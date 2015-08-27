package org.vaadin.artur.gridgwt.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;

public class GridApp implements EntryPoint {
    @Override
    public void onModuleLoad() {
        Panel p = RootPanel.get("new_v2");
        if (p == null) {
            p = RootPanel.get("new_grid");
        }
        if (p == null) {
            p = RootPanel.get("grid");
        }
        if (p == null) {
            Window.alert("Unable to find an element with new_grid or grid id");
        } else {
            final MyGrid g = new MyGrid();
            p.add(g);
            onResize(g);
        }
    }
    
    private native static void onResize(MyGrid g) /*-{
        $wnd.onresize = function() {
            g.@org.vaadin.artur.gridgwt.client.MyGrid::onResize(*)();
        }
    }-*/;
    
}
