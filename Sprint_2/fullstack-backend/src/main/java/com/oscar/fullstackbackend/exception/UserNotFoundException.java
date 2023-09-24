package com.oscar.fullstackbackend.exception;

public class UserNotFoundException  extends RuntimeException{
    public UserNotFoundException(Integer id){
        super("No se encontró usuario con id " + id);
    }
    public UserNotFoundException(Long id){
        super("No se encontró usuario con id " + id);
    }
}
