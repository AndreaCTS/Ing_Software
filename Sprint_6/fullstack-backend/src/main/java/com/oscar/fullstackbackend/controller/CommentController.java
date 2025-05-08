package com.oscar.fullstackbackend.controller;
import ch.qos.logback.core.net.SyslogOutputStream;
import com.oscar.fullstackbackend.config.JwtAuthenticationFilter;
import com.oscar.fullstackbackend.config.JwtService;
import com.oscar.fullstackbackend.exception.CommentNotFoundException;
import com.oscar.fullstackbackend.exception.UserNotFoundException;
import com.oscar.fullstackbackend.model.Comment;
import com.oscar.fullstackbackend.model.User;
import com.oscar.fullstackbackend.repository.CommentRepository;
import com.oscar.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import service.UserService;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;
    /*@PostMapping
    public Comment createComment(@RequestBody Comment comment) {
        return commentRepository.save(comment);

    }


     */

    @Autowired
    private UserRepository userRepository; // Supongamos que tienes un repositorio para usuarios

    @PostMapping
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment, @AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {

            System.out.println("Usuario no autenticado");
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        String username = userDetails.getUsername();
        System.out.println("Nombre de usuario autenticado: " + username);

        comment.setUsername(username);

        try {
            Comment createdComment = commentRepository.save(comment);
            System.out.println("Comentario creado con éxito");
            return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
        } catch (Exception e) {
            System.err.println("Error al crear el comentario: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
