package com.company;

public class MovieTestDrive {

    public static void main(String[] args) {
        Movie one = new Movie();
        one.title = "First";
        one.genre = "tragedy";
        one.rating = -2;

        Movie two = new Movie();
        two.title = "Second";
        two.genre = "comedy";
        two.rating = 9;

        Movie three = new Movie();
        three.title = "Third";
        three.genre = "documentary";
        three.rating = 4;

        one.playIt();
        two.playIt();
        three.playIt();
    }

}
