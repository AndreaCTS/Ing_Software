package com.oscar.fullstackbackend.controller;

import com.oscar.fullstackbackend.model.Report;
import com.oscar.fullstackbackend.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ReportController {
    @Autowired
    private ReportRepository reportRepository;

    @PostMapping("/report")
    public ResponseEntity<Report> createCrimeReport(@RequestBody Report crimeReport) {
        Report savedReport = reportRepository.save(crimeReport);
        return new ResponseEntity<>(savedReport, HttpStatus.CREATED);
    }

    @GetMapping("/report")
    public ResponseEntity<List<String>> getCrimeCategories() {
        List<String> crimeCategories = Arrays.asList("Robo", "Asalto", "Vandalismo", "Homicidio", "Hurto a Mano Armada",
                "Disturbios","Robo a Tienda", "Carterismo", "Asalto Vehicular");
        return new ResponseEntity<>(crimeCategories, HttpStatus.OK);
    }

    @GetMapping("/reports")
    public ResponseEntity<List<Report>> getAllReports() {
        List<Report> reports = reportRepository.findAll();
        return new ResponseEntity<>(reports, HttpStatus.OK);
    }
}
