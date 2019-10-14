package com.company;

public class DogTestDrive {

    public static void main(String[] args) {
        Dog d = new Dog();
        d.size = 98;
        d.name = "Phil";
        d.color = "black";
        d.bark();
        d.info();
    }
}
