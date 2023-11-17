package com.oscar.fullstackbackend.controller;
import com.oscar.fullstackbackend.exception.CommentNotFoundException;
import com.oscar.fullstackbackend.model.Comment;
import com.oscar.fullstackbackend.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;
    @PostMapping
    public Comment createComment(@RequestBody Comment comment) {
        return commentRepository.save(comment);

    }
    @GetMapping("/{id}")
    public Comment getCommentById(@PathVariable Long id) {
        return commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException(id));
    }
/*
    @GetMapping("/rating/{averageRating}")
    public List<Comment> getCommentRating(@PathVariable int averageRating){
        if (averageRating == 0){
            return commentRepository.findAll();
        }
        return commentRepository.findByAverageRating(averageRating);
    }*/

    @GetMapping("/barrio/{barrio}")
    public List<Comment> getCommentBarrio(@PathVariable String barrio){
        if (barrio.equals("Todos")){
            return commentRepository.findAll();
        }
        return commentRepository.findByBarrio(barrio);
    }

    @GetMapping("/ascendente")
    public List<Comment> getCommentAsc(){
        return commentRepository.findAllByOrderByRatingAsc();
    }

    @GetMapping("/descendente")
    public List<Comment> getCommentDesc(){
        return commentRepository.findAllByOrderByRatingDesc();
    }

    @GetMapping("/all")
    public List<Comment> getAllComments() {
        List<Comment> lc=commentRepository.findAllByOrderByIdDesc();
        System.out.println(lc.size());
        return commentRepository.findAllByOrderByIdDesc();
    }

    @PostMapping("/{id}/rate")
    public Comment addRatingToComment(
            @PathVariable Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException(id));
        // Add the new rating and update the average
        comment.addRating();
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

}
