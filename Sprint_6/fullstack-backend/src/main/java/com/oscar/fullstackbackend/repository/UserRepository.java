package com.oscar.fullstackbackend.repository;

import com.oscar.fullstackbackend.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    long count();

    // Check if a user with the given email exists
    boolean existsByEmail(String email);

    // Check if a user with the given username exists
    boolean existsByUsername(String username);

    // Retorna el usuario si se encuentra en el repositorio
    Optional<User> findByEmail(String email);

    User findByUsername(String username);

}