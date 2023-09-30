package com.oscar.fullstackbackend.model;

import jakarta.persistence.*;

@Entity
public class Wheel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String username; // Usuario que ofrece el wheel
    @Column(nullable = false)
    private String localidad; // Localidad en la que reside quien ofrece el wheel
    @Column(nullable = false)
    private int capacidadMax; // Capacidad máxima del transporte
    @Column(nullable = false)
    private int cuposDisp; // Cupos disponibles del wheel
    @Column(nullable = false)
    private int precio; // Precio por compartir el transporte
    @Column(nullable = false)
    private int telefono; // Contacto


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getLocalidad() {
        return localidad;
    }
    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }
    public int getCapacidadMax() {
        return capacidadMax;
    }
    public void setCapacidadMax(int capacidadMax) {
        this.capacidadMax = capacidadMax;
    }
    public int getCuposDisp() {
        return cuposDisp;
    }
    public void setCuposDisp(int cuposDisp) {
        this.cuposDisp = cuposDisp;
    }
    public int getPrecio() {
        return precio;
    }
    public void setPrecio(int precio) {
        this.precio = precio;
    }
    public int getTelefono() {
        return telefono;
    }
    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public void updateCupos(){
        if(this.cuposDisp > 0){
            this.cuposDisp -= 1;
        } else {
            System.out.println("No disponible");
        }
    }
}
