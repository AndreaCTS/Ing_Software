package com.oscar.fullstackbackend.controller;

import com.oscar.fullstackbackend.model.Coordinate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/map")
public class MapController {

    @GetMapping("/coordinates")
    public List<Coordinate> getRouteCoordinates() {
        return Arrays.asList(
                new Coordinate(4.710989, -74.072090)// Bogotá
  
        );
    }
}
