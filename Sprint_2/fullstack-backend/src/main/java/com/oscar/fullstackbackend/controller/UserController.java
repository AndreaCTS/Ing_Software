package com.oscar.fullstackbackend.controller;

import com.oscar.fullstackbackend.exception.UserAlreadyExistsException;
import com.oscar.fullstackbackend.model.User;
import com.oscar.fullstackbackend.repository.UserRepository;
import com.oscar.fullstackbackend.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        if (userRepository.existsByEmail(newUser.getEmail())) {
            throw new UserAlreadyExistsException("User with this email already exists.");
        }

        if (userRepository.existsByUsername(newUser.getUsername())) {
            throw new UserAlreadyExistsException("User with this username already exists.");
        }

        return userRepository.save(newUser);
    }





    @GetMapping("/users")
        List<User> getAllUsers(){
            return userRepository.findAll();
        }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }

}





