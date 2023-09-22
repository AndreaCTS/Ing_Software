package com.oscar.fullstackbackend.model;

import jakarta.persistence.*;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String text;

    @Column(nullable = false, columnDefinition = "int default 0")
    private int averageRating;

    @Column(nullable = false)
    private int ratingCount; // Count of ratings

    // Other fields, getters, setters, and methods

    // Constructor, getters, setters, and other fields are defined here...

    public Long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(int averageRating) {
        this.averageRating = averageRating;
    }

    public int getRatingCount() {
        return ratingCount;
    }

    public void setRatingCount(int ratingCount) {
        this.ratingCount = ratingCount;
    }

    // Method to add a new rating and update the average
    public void addRating(int newRating) {
        int currentTotal = averageRating * ratingCount;
        ratingCount++;
        int newTotal = currentTotal + newRating;
        this.averageRating = newTotal / ratingCount;
    }

    // Method to remove a rating and update the average
    public void removeRating(int removedRating) {
        if (ratingCount > 0) {
            int currentTotal = averageRating * ratingCount;
            ratingCount--;
            if (ratingCount > 0) {
                int newTotal = currentTotal - removedRating;
                averageRating = newTotal / ratingCount;
            } else {
                averageRating = 0;
            }
        }
    }
}