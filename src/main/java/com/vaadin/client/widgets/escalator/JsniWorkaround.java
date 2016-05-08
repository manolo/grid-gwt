package com.vaadin.client.widgets.escalator;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * A workaround-class for GWT and JSNI.
 * <p>
 * GWT is unable to handle some method calls to Java methods in inner-classes
 * from within JSNI blocks. Having that inner class extend a non-inner-class (or
 * implement such an interface), makes it possible for JSNI to indirectly refer
 * to the inner class, by invoking methods and fields in the non-inner-class
 * API.
 * 
 * @see Scroller
 */
abstract class JsniWorkaround {
    /**
     * A JavaScript function that handles the scroll DOM event, and passes it on
     * to Java code.
     * 
     * @see #createScrollListenerFunction(Escalator)
     * @see Escalator#onScroll()
     * @see Scroller#onScroll()
     */
    protected final JavaScriptObject scrollListenerFunction;

    /**
     * A JavaScript function that handles the mousewheel DOM event, and passes
     * it on to Java code.
     * 
     * @see #createMousewheelListenerFunction(Escalator)
     * @see Escalator#onScroll()
     * @see Scroller#onScroll()
     */
    protected final JavaScriptObject mousewheelListenerFunction;

    /**
     * A JavaScript function that handles the touch start DOM event, and passes
     * it on to Java code.
     * 
     * @see TouchHandlerBundle#touchStart(TouchHandlerBundle.CustomTouchEvent)
     */
    protected JavaScriptObject touchStartFunction;

    /**
     * A JavaScript function that handles the touch move DOM event, and passes
     * it on to Java code.
     * 
     * @see TouchHandlerBundle#touchMove(TouchHandlerBundle.CustomTouchEvent)
     */
    protected JavaScriptObject touchMoveFunction;

    /**
     * A JavaScript function that handles the touch end and cancel DOM events,
     * and passes them on to Java code.
     * 
     * @see TouchHandlerBundle#touchEnd(TouchHandlerBundle.CustomTouchEvent)
     */
    protected JavaScriptObject touchEndFunction;

    protected TouchHandlerBundle touchHandlerBundle;

    protected JsniWorkaround(final Escalator escalator) {
        scrollListenerFunction = createScrollListenerFunction(escalator);
        mousewheelListenerFunction = createMousewheelListenerFunction(escalator);

        touchHandlerBundle = new TouchHandlerBundle(escalator);
        touchStartFunction = touchHandlerBundle.getTouchStartHandler();
        touchMoveFunction = touchHandlerBundle.getTouchMoveHandler();
        touchEndFunction = touchHandlerBundle.getTouchEndHandler();
    }

    /**
     * A method that constructs the JavaScript function that will be stored into
     * {@link #scrollListenerFunction}.
     * 
     * @param esc
     *            a reference to the current instance of {@link Escalator}
     * @see Escalator#onScroll()
     */
    protected abstract JavaScriptObject createScrollListenerFunction(
            Escalator esc);

    /**
     * A method that constructs the JavaScript function that will be stored into
     * {@link #mousewheelListenerFunction}.
     * 
     * @param esc
     *            a reference to the current instance of {@link Escalator}
     * @see Escalator#onScroll()
     */
    protected abstract JavaScriptObject createMousewheelListenerFunction(
            Escalator esc);
}