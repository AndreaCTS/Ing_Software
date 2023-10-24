package com.app.fullstackbackend.repository;

import com.app.fullstackbackend.model.Wheel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WheelRepository extends JpaRepository<Wheel, Integer> {
    boolean existsByUsername(String username);
}
