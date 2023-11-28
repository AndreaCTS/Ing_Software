package com.oscar.fullstackbackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;
import java.util.Optional;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, columnDefinition = "int default 0")
    private int rating; // Count of ratings

    @Column(nullable = false)
    private String texto;

    @Column(nullable = false)
    private String barrio;

    @Column(nullable = false, columnDefinition = "TIMESTAMP")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss.SSS")
    private Date publishDate;

    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String user) {
        this.username = user;
    }


    public Comment() {
        this.publishDate = new Date();
    }
    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public Long getId() {
        return id;
    }
    public String getText() {
        return texto;
    }
    public void setText(String texto) {
        this.texto = texto;
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