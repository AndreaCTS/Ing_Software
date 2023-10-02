package com.oscar.fullstackbackend.repository;

import com.oscar.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    long count();
}