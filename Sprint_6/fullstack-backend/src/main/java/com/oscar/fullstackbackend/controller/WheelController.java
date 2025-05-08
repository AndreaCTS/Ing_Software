package com.oscar.fullstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.oscar.fullstackbackend.exception.UserNotExistException;
import com.oscar.fullstackbackend.exception.WheelNotFoundException;
import com.oscar.fullstackbackend.model.Wheel;
import com.oscar.fullstackbackend.repository.WheelRepository;
import com.oscar.fullstackbackend.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/wheels")
public class WheelController {
    @Autowired
    private WheelRepository wheelRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/save")
    Wheel newWheel(@RequestBody Wheel newWheel) {
        if (userRepository.existsByUsername(newWheel.getUsername())) {
            return wheelRepository.save(newWheel);
        }
        throw new UserNotExistException("User with this username does not exists.");
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

    @PutMapping("/{id}")
    Wheel updateWheel(@RequestBody Wheel newWheel, @PathVariable Integer id) {
        return wheelRepository.findById(id)
                .map(wheel -> {
                    wheel.setUsername(newWheel.getUsername());
                    wheel.setLocalidad(newWheel.getLocalidad());
                    wheel.setCapacidadMax(newWheel.getCapacidadMax());
                    wheel.setCuposDisp(newWheel.getCuposDisp() - 1);
                    wheel.setPrecio(newWheel.getPrecio());
                    wheel.setTelefono(newWheel.getTelefono());
                    return wheelRepository.save(wheel);
                }).orElseThrow(() -> new WheelNotFoundException(id));
    }

    @DeleteMapping("/remove/{id}")
    String deleteComment(@PathVariable int id) {
        if (!wheelRepository.existsById(id)) {
            throw new WheelNotFoundException(id);
        }
        wheelRepository.deleteById(id);
        return "Wheel with id " + id + " has been deleted success.";
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