package com.oscar.fullstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.oscar.fullstackbackend.exception.WheelNotFoundException;
import com.oscar.fullstackbackend.model.Wheel;
import com.oscar.fullstackbackend.repository.WheelRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/wheels")
public class WheelController {
    @Autowired
    private WheelRepository wheelRepository;
    
    @PostMapping("/save")
    Wheel newWheel(@RequestBody Wheel newWheel) {
        return wheelRepository.save(newWheel);
    }

    @GetMapping("/all")
    List<Wheel> getAllWheels() {
        return (List<Wheel>) wheelRepository.findAll();

    }

    @GetMapping("/{id}")
    Wheel getWheelById(@PathVariable Integer id) {
        return wheelRepository.findById(id)
                .orElseThrow(() -> new WheelNotFoundException(id));
    }

    @PutMapping("/find/{id}")
    Wheel updateUser(@RequestBody Wheel newWheel, @PathVariable Integer id) {
        return wheelRepository.findById(id)
                .map(wheel -> {
                    wheel.setUsername(newWheel.getUsername());
                    wheel.setLocalidad(newWheel.getLocalidad());
                    wheel.setCapacidadMax(newWheel.getCapacidadMax());
                    wheel.setCuposDisp(newWheel.getCuposDisp());
                    wheel.setPrecio(newWheel.getPrecio());
                    wheel.setTelefono(newWheel.getTelefono());
                    return wheelRepository.save(wheel);
                }).orElseThrow(() -> new WheelNotFoundException(id));
    }
}
