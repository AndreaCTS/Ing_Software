package com.app.fullstackbackend.exception;

public class WheelNotFoundException extends RuntimeException {
    public WheelNotFoundException(int id){
        super("No se encontró el wheel con id " + id);
    }
}
