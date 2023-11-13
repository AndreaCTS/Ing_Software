package com.oscar.fullstackbackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, columnDefinition = "int default 0")
    private int ratingCount; // Count of ratings

    @Column(nullable = false)
    private String text;


    @Column(nullable = false)
    private String barrio;


    @ElementCollection
    @CollectionTable(name = "comment_ratings", joinColumns = @JoinColumn(name = "comment_id"))
    @Column(name = "rating")
    private List<Integer> ratings = new ArrayList<>();

    @Column(nullable = false)
    private int averageRating; // Add this field



    @Column(nullable = false)
    private Date publish_Date;

    // Constructor, getters, setters, and other fields are defined here...

    public Date getPublish_Date() {
        return publish_Date;
    }

    public void setPublish_Date(Date publish_Date){
        this.publish_Date = publish_Date;
    }


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

    public List<Integer> getRatings() {
        return ratings;
    }

    public int getAverageRating() { // Add this getter
        return averageRating;
    }


    // Method to add a new rating to the list and update the average
    public void addRating(int newRating) {
        ratings.add(newRating);
        updateAverageRating();
    }

    // Method to remove a rating from the list and update the average
    public void removeRating(int removedRating) {
        ratings.remove(Integer.valueOf(removedRating));
        updateAverageRating();
    }

    // Calculate and update the average rating based on the ratings list
    private void updateAverageRating() {
        if (ratings.isEmpty()) {
            averageRating = 0;
        } else {
            int total = ratings.stream().mapToInt(Integer::intValue).sum();
            averageRating = Math.round((float) total / ratings.size());
        }
    }
}