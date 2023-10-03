package com.oscar.fullstackbackend.controller;

import com.oscar.fullstackbackend.exception.CommentNotFoundException;

import com.oscar.fullstackbackend.exception.UserNotFoundException;
import com.oscar.fullstackbackend.model.Comment;

import com.oscar.fullstackbackend.repository.CommentRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/comments")
public class CommentController {


    @Autowired
    private CommentRepository commentRepository;
    //@Autowired
    //private RatingRepository ratingRepository;


    @PostMapping
    public Comment createComment(@RequestBody Comment comment) {

        return commentRepository.save(comment);

    }
    @GetMapping("/{id}")
    public Comment getCommentById(@PathVariable Long id) {
        return commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException(id));
    }

    @GetMapping("/rating/{averageRating}")
    public List<Comment> getCommentRating(@PathVariable int averageRating){
        if (averageRating == 0){
            return commentRepository.findAll();
        }
        return commentRepository.findByAverageRating(averageRating);
    }

    @GetMapping("/ascendente")
    public List<Comment> getCommentAsc(){
        return commentRepository.findAllByOrderByAverageRatingAsc();
    }

    @GetMapping("/descendente")
    public List<Comment> getCommentDesc(){
        return commentRepository.findAllByOrderByAverageRatingDesc();
    }
    @GetMapping("/all")
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    @PostMapping("/{id}/rate")
    public Comment addRatingToComment(
            @PathVariable Long id,
            @RequestBody int rating) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException(id));

        // Add the new rating and update the average
        System.out.println("Received rating: " + rating);
        comment.addRating(rating);

        // Save the updated comment
        return commentRepository.save(comment);
    }

    @DeleteMapping("/{id}/rate/{rating}")
    public Comment removeRatingFromComment(
            @PathVariable Long id,
            @PathVariable int rating) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException(id));

        // Remove the specified rating and update the average
        comment.removeRating(rating);

        // Save the updated comment
        return commentRepository.save(comment);
    }

    @DeleteMapping("/remove/{id}")
    String deleteComment(@PathVariable Long id){
        if(!commentRepository.existsById(id)){
            throw new CommentNotFoundException(id);
        }
        commentRepository.deleteById(id);
        return  "Comment with id "+id+" has been deleted success.";
    }

    /*
    @PostMapping
    public Comment createComment(@RequestBody Comment comment) {

            return commentRepository.save(comment);

    }


    @GetMapping("/{id}")
    public Comment getCommentById(@PathVariable Long id) {
        return commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException(id));
    }


    @GetMapping("/all")
    public List<Comment> getAllComments() {

            //List<User> getAllUsers(){
            //    return userRepository.findAll();
            //}
            System.out.println("si entra ");
            System.out.println(commentRepository.findAll());
            return commentRepository.findAll();
            //logger.info("Retrieved {} comments.", comments.size());
            //return ResponseEntity.ok(comments);

    }

    @PostMapping("/{id}/rate")
    public ResponseEntity<Comment> addRatingToComment(
            @PathVariable Long id,
            @RequestBody Rating rating) {
        Comment comment = commentRepository.findById(id).orElse(null);

        if (comment != null) {
            // Associate the rating with the comment
            rating.setComment(comment);

            // Save the rating and update the comment
            comment.getRatings().add(rating);
            ratingRepository.save(rating);

            // Update the mean rating
            comment.updateMeanRating();
            commentRepository.save(comment);

            System.out.println("Mean rating updated: " + comment.getRating()); // Add this line for debugging

            return ResponseEntity.ok(comment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

     */

}

