package org.vaadin.artur.gridgwt.client;

import java.util.ArrayList;
import java.util.Random;

import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.vaadin.client.widget.grid.datasources.ListDataSource;
import com.vaadin.client.widgets.Grid;

public class MyGrid extends Grid<Person> {
    public MyGrid() {
        super();
        setSelectionMode(SelectionMode.SINGLE);
        addColumn(new Column<Integer, Person>("Id") {
            public Integer getValue(Person row) {
                return row.id;
            }
        });
        addColumn(new Column<String, Person>("Name") {
            public String getValue(Person row) {
                return row.getName();
            }
        });
        addColumn(new Column<String, Person>("Surname") {
            public String getValue(Person row) {
                return row.getSurname();
            }
        });
        addColumn(new Column<String, Person>("Job") {
            public String getValue(Person row) {
                return row.getJob();
            }
        });
        addColumn(new Column<Integer, Person>("Age") {
            @Override
            public Integer getValue(Person row) {
                return row.getAge();
            }
        });
        addColumn(new Column<Integer, Person>("Kids") {
            public Integer getValue(Person row) {
                return row.getChildren();
            }
        });

        String s = Window.Location.getParameter("rows");
        int rows = (s == null || s.isEmpty() ? 100 : Integer.parseInt(s)) / 10;



        getColumn(0).setWidth(80);
        getColumn(1).setWidth(200);
        getColumn(2).setWidth(200);
        getColumn(3).setWidth(200);

        setWidth("100%");
        setHeight(Window.getClientHeight() + "px");

        // Some dummy data
        final ArrayList<Person> addons = new ArrayList<Person>();
        for (int i = 0; i < rows; i++) {
            addons.add(new Person("John", "Garcia", "Developer", 12, 1));
            addons.add(new Person("Emma", "Sesmero", "Engineer", 18, 0));
            addons.add(new Person("Jeff", "Harris", "CEO", 44, 1));
            addons.add(new Person("George", "Washington", "President", 78, 3));
            addons.add(new Person("Abraham", "Lincoln", "ExPresident", 114, 5));
            addons.add(new Person("Henrik", "Paul", "Currito", 32, 6));
            addons.add(new Person("Paul", "Vaca", "Ganadero", 56, 66));
            addons.add(new Person("Biff", "Eeter", "Drinker", 34, 4));
            addons.add(new Person("Leo", "Tron", "Troco", 88, 5));
            addons.add(new Person("Peri", "Co", "Palotes", 22, 37));
        }
        new Timer() {
            public void run() {
                setDataSource(new ListDataSource<Person>(addons));
            }
        }.schedule(1000);


    }
}
