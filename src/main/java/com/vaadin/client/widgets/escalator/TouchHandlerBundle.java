package com.vaadin.client.widgets.escalator;

import com.google.gwt.animation.client.Animation;
import com.google.gwt.core.client.Duration;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.dom.client.NativeEvent;
import com.google.gwt.dom.client.Touch;
import com.google.gwt.user.client.Window;

import com.vaadin.client.widget.escalator.ScrollbarBundle;

import java.util.ArrayList;
import java.util.List;

public class TouchHandlerBundle {

    /**
     * A <a href=
     * "http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsOverlay.html"
     * >JavaScriptObject overlay</a> for the <a
     * href="http://www.w3.org/TR/touch-events/">JavaScript
     * TouchEvent</a> object.
     * <p>
     * This needs to be used in the touch event handlers, since GWT's
     * {@link com.google.gwt.event.dom.client.TouchEvent TouchEvent}
     * can't be cast from the JSNI call, and the
     * {@link com.google.gwt.dom.client.NativeEvent NativeEvent} isn't
     * properly populated with the correct values.
     */
    final static class CustomTouchEvent extends NativeEvent {
        protected CustomTouchEvent() {
        }

        public native int getPageX()
        /*-{
            return this.targetTouches[0].pageX;
        }-*/;

        public native int getPageY()
        /*-{
            return this.targetTouches[0].pageY;
        }-*/;

        public native boolean isCancelable()
        /*-{
            return this.cancelable;
        }-*/;
    }

    private final Escalator escalator;

    public TouchHandlerBundle(final Escalator escalator) {
        this.escalator = escalator;
    }

    public native JavaScriptObject getTouchStartHandler()
    /*-{
        // we need to store "this", since it won't be preserved on call.
        var self = this;
        return $entry(function (e) {
            self.@com.vaadin.client.widgets.escalator.TouchHandlerBundle::touchStart(*)(e);
        });
    }-*/;

    public native JavaScriptObject getTouchMoveHandler()
    /*-{
        // we need to store "this", since it won't be preserved on call.
        var self = this;
        return $entry(function (e) {
            self.@com.vaadin.client.widgets.escalator.TouchHandlerBundle::touchMove(*)(e);
        });
    }-*/;

    public native JavaScriptObject getTouchEndHandler()
    /*-{
        // we need to store "this", since it won't be preserved on call.
        var self = this;
        return $entry(function (e) {
            self.@com.vaadin.client.widgets.escalator.TouchHandlerBundle::touchEnd(*)(e);
        });
    }-*/;

    // Duration of the inertial scrolling simulation. Devices with
    // larger screens take longer durations.
    private static final int DURATION = Window.getClientHeight();
    // multiply scroll velocity with repeated touching
    private int acceleration = 1;
    private boolean touching = false;
    // Two movement objects for storing status and processing touches
    private Movement yMov, xMov;
    final double MIN_VEL = 0.6, MAX_VEL = 4, F_VEL = 1500, F_ACC = 0.7,
            F_AXIS = 1;

    // The object to deal with one direction scrolling
    private class Movement {
        final List<Double> speeds = new ArrayList<Double>();
        final ScrollbarBundle scroll;
        double position, offset, velocity, prevPos, prevTime, delta;
        double scrollMax;
        boolean run, vertical;

        public Movement(boolean vertical) {
            this.vertical = vertical;
            scroll = vertical ? escalator.verticalScrollbar
                    : escalator.horizontalScrollbar;
        }

        public void startTouch(TouchHandlerBundle.CustomTouchEvent event) {
            speeds.clear();
            prevPos = pagePosition(event);
            prevTime = Duration.currentTimeMillis();
            scrollMax = scroll.getScrollSize() - scroll.getOffsetSize();
            delta = 0;
        }

        public void moveTouch(TouchHandlerBundle.CustomTouchEvent event) {
            double pagePosition = pagePosition(event);
            run = false;
            // skip grids without scroll
            if (scrollMax > 1) {
                delta = prevPos - pagePosition;
                double now = Duration.currentTimeMillis();
                double ellapsed = now - prevTime;
                velocity = delta / ellapsed;
                // if last speed was so low, reset speeds and start
                // storing again
                if (speeds.size() > 0 && !validSpeed(speeds.get(0))) {
                    speeds.clear();
                }
                speeds.add(0, velocity);
                prevTime = now;
                prevPos = pagePosition;
                position = scroll.getScrollPos();
            }
        }

        public void validate(Movement other) {
            // We don't move the scroll if no delta, scroll position
            // has reached the edge, or movement in one direction is
            // insignificant.
            run = delta != 0 && inScrollRange(position + delta)
                    && Math.abs(other.delta / delta) < F_AXIS;
            if (!run) delta = 0;
        }

        public void endTouch(TouchHandlerBundle.CustomTouchEvent event) {
            // Compute average speed
            velocity = 0;
            for (double s : speeds) {
                velocity += s / speeds.size();
            }
            position = scroll.getScrollPos();

            // Compute offset, and adjust it with an easing curve so as
            // movement is smoother.
            offset = F_VEL * velocity * acceleration
                    * easingInOutCos(velocity, MAX_VEL);

            // Enable or disable inertia movement in this axis
            run = validSpeed(velocity);
            if (run) {
                event.preventDefault();
            }
        }

        void stepAnimation(double progress) {
            if (run) {
                double p = position + offset * progress;
                scroll.setScrollPos(p);
                run = inScrollRange(p);
            }
        }

        boolean inScrollRange(double p) {
            return p > 0 && p < scrollMax;
        }

        int pagePosition(TouchHandlerBundle.CustomTouchEvent event) {
            JsArray<Touch> a = event.getTouches();
            return vertical ? a.get(0).getPageY() : a.get(0).getPageX();
        }

        boolean validSpeed(double speed) {
            return Math.abs(speed) > MIN_VEL;
        }
    }

    // Using GWT animations which take care of native animation frames.
    private Animation animation = new Animation() {
        @Override
        public void onUpdate(double progress) {
            xMov.stepAnimation(progress);
            yMov.stepAnimation(progress);
            if (!xMov.run && !yMov.run) {
                // Stop animation as soon as we reach the border,
                // so as we do not wait to move the external scroll.
                cancel();
            }
        }

        @Override
        public double interpolate(double progress) {
            return easingOutCirc(progress);
        };

        @Override
        public void onComplete() {
            touching = false;
            escalator.body.domSorter.reschedule();
        };

        @Override
        public void run(int duration) {
            if (xMov.run || yMov.run) {
                super.run(duration);
            } else {
                onComplete();
            }
        };
    };

    public void touchStart(final TouchHandlerBundle.CustomTouchEvent event) {
        // Consider only one-finger gestures over the body.
        if (JsniUtil.eventOnBody(escalator, event)
                && event.getTouches().length() == 1) {
            if (yMov == null) {
                yMov = new Movement(true);
                xMov = new Movement(false);
                // Mark this as a touch device. Useful for
                // fix hover styles in iOS.
                escalator.bodyElem.addClassName("touch");
            }
            if (animation.isRunning()) {
                acceleration += F_ACC;
                event.preventDefault();
                animation.cancel();
            } else {
                acceleration = 1;
            }
            xMov.startTouch(event);
            yMov.startTouch(event);
            touching = true;
        } else {
            // Cancel to allow multi-finger gestures like zoom.
            touching = false;
            animation.cancel();
            acceleration = 1;
        }
    }

    public void touchMove(final TouchHandlerBundle.CustomTouchEvent event) {
        if (touching && event.isCancelable()) {
            xMov.moveTouch(event);
            yMov.moveTouch(event);
            xMov.validate(yMov);
            yMov.validate(xMov);
            if (xMov.run) {
                xMov.scroll.setScrollPosByDelta(xMov.delta);
            }
            if (yMov.run) {
                yMov.scroll.setScrollPosByDelta(yMov.delta);
            }
            if (xMov.run || yMov.run) {
                // If we move the scroll prevent default, otherwise
                // pass the control to the device.
                event.preventDefault();
            }
        }
    }

    public void touchEnd(final TouchHandlerBundle.CustomTouchEvent event) {
        if (touching) {
            xMov.endTouch(event);
            yMov.endTouch(event);
            xMov.validate(yMov);
            yMov.validate(xMov);
            // Adjust duration so as longer movements take bigger duration
            boolean vert = !xMov.run || yMov.run
                    && Math.abs(yMov.offset) > Math.abs(xMov.offset);
            double delta = Math.abs((vert ? yMov : xMov).offset);
            animation.run((int) (3 * DURATION * easingOutExp(delta)));
        }
    }

    private double easingInOutCos(double val, double max) {
        return 0.5 - 0.5 * Math.cos(Math.PI * Math.signum(val)
                * Math.min(Math.abs(val), max) / max);
    }

    private double easingOutExp(double delta) {
        return (1 - Math.pow(2, -delta / 1000));
    }

    private double easingOutCirc(double progress) {
        return Math.sqrt(1 - (progress - 1) * (progress - 1));
    }
}