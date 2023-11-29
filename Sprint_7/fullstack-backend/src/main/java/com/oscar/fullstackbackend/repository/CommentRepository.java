package com.oscar.fullstackbackend.repository;

import com.oscar.fullstackbackend.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface CommentRepository extends JpaRepository<Comment, Long> {
    // Add any custom query methods if needed
    List<Comment> findAllByOrderByRatingDesc();
    List<Comment> findAllByOrderByRatingAsc();
    List<Comment> findByBarrio(String b);
    List<Comment> findAllByOrderByIdDesc();

}
