package com.company;

public class Movie {

    String title;
    String genre;
    int rating;

    void playIt() {
        System.out.println("the movie " + title + " has genre - " + genre + " and rating " + rating);
    }
}
