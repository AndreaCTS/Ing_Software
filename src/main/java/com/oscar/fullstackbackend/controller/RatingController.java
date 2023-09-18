package com.oscar.fullstackbackend.controller;

import com.oscar.fullstackbackend.exception.CommentNotFoundException;
import com.oscar.fullstackbackend.model.Comment;
import com.oscar.fullstackbackend.model.Rating;
import com.oscar.fullstackbackend.repository.CommentRepository;
import com.oscar.fullstackbackend.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ratings")
public class RatingController {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private RatingRepository ratingRepository;

    @PostMapping("/{commentId}")
    public ResponseEntity<Comment> addRatingToComment(
            @PathVariable Long commentId,
            @RequestBody Rating rating
    ) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new CommentNotFoundException(commentId));

        // Set the comment for the rating
        rating.setComment(comment);

        // Save the rating
        ratingRepository.save(rating);

        // Update the comment's ratings list
        comment.getRatings().add(rating);
        commentRepository.save(comment);

        return ResponseEntity.ok(comment);
    }
}