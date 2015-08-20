package org.vaadin.artur.gridgwt.client;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

class Person {


    static int c = 1;

    public final int id = c++;

    @Size(min = 5, max = 50)
    private String name;
    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public int getChildren() {
        return children;
    }

    public void setChildren(int children) {
        this.children = children;
    }

    private String surname;
    private String job;
    private int children;

    @Min(0)
    @Max(100)
    private int age;

    public Person(String name, String surname, String job, int age, int children) {
        this.name = name;
        this.surname = surname;
        this.job = job;
        this.age = age;
        this.children = children;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
