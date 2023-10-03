package com.oscar.fullstackbackend.model;

import jakarta.persistence.*;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, columnDefinition = "int default 0")
    private int ratingCount; // Count of ratings

    @Column(nullable = false)
    private String text;
}
