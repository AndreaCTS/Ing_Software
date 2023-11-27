package com.oscar.fullstackbackend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, columnDefinition = "int default 0")
    private int rating; // Count of ratings

    @Column(nullable = false)
    private String text;

    @Column(nullable = false)
    private String barrio;

    @Column(nullable = false)
    private Date publish_Date;

    /*
    @Column(nullable = false)
    private User user;


    public User getUser(){return user;}
    // Constructor, getters, setters, and other fields are defined here...
*/
    public Date getPublish_Date() {return publish_Date;}
    public void setPublish_Date(Date publish_Date){this.publish_Date = publish_Date;}
    public Long getId() {
        return id;
    }
    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }
    public String getBarrio() {
        return barrio;
    }
    public void setBarrio(String barrio) {
        this.barrio = barrio;
    }
    public int getRating() {
        return rating;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }

    // Method to add a new rating to the list and update the average
    public void addRating() {
        rating += 1;
    }
}