package com.oscar.fullstackbackend.exception;

public class CommentNotFoundException extends RuntimeException{

    public CommentNotFoundException(Long id){
        super("Could not find the comment with id"+id);
    }
}
