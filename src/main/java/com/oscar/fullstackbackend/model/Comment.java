package com.oscar.fullstackbackend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String text;

    // Add a one-to-many relationship with Rating
    @OneToMany(mappedBy = "comment", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Rating> ratings;

    @Column(nullable = false, columnDefinition = "int default 0") // Set a default value of 0
    private int rating;

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
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

    public void setId(Long id) {
        this.id = id;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public void addRating(Rating rating) {
        ratings.add(rating);
        rating.setComment(this);
        updateMeanRating(); // Update the mean rating when a new rating is added
    }

    public void removeRating(Rating rating) {
        ratings.remove(rating);
        rating.setComment(null);
        updateMeanRating(); // Update the mean rating when a rating is removed
    }

    // Method to update the mean rating
    public void updateMeanRating() {
        if (ratings != null && !ratings.isEmpty()) {
            int sum = 0;
            for (Rating r : ratings) {
                sum += r.getRating();
            }
            rating = sum / ratings.size();
            System.out.println("Updated mean rating: " + rating); // Add this line for debugging
        } else {
            rating = 0; // Set a default rating if there are no ratings.
            System.out.println("No ratings available. Default rating set.");
        }
    }

}