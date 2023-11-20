package com.oscar.fullstackbackend.exception;

public class ReportNotFoundException extends RuntimeException{
    public ReportNotFoundException(Long id){
        super("No se encontró reporte con id " + id);
    }

}
