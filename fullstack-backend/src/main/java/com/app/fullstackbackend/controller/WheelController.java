package com.app.fullstackbackend.controller;

import java.util.List;

import com.app.fullstackbackend.exception.UserNotExistException;
import com.app.fullstackbackend.exception.WheelNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.fullstackbackend.model.Wheel;
import com.app.fullstackbackend.repository.WheelRepository;
import com.app.fullstackbackend.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
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


    @DeleteMapping("/remove/{id}")
    String deleteComment(@PathVariable int id){
        if(!wheelRepository.existsById(id)){
            throw new WheelNotFoundException(id);
        }
        wheelRepository.deleteById(id);
        return  "Wheel with id "+id+" has been deleted success.";
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
