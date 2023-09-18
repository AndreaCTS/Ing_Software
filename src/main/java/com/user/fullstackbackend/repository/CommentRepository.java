package com.oscar.fullstackbackend.repository;

import com.oscar.fullstackbackend.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    // Add any custom query methods if needed
}
