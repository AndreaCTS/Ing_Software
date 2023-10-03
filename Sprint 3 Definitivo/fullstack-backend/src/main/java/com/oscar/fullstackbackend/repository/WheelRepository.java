package com.oscar.fullstackbackend.repository;

import com.oscar.fullstackbackend.model.Wheel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WheelRepository extends JpaRepository<Wheel, Integer> {
    
}
