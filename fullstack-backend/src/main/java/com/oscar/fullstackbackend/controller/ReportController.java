package com.oscar.fullstackbackend.controller;

import com.oscar.fullstackbackend.exception.ReportNotFoundException;
import com.oscar.fullstackbackend.exception.UserNotFoundException;
import com.oscar.fullstackbackend.model.Report;
import com.oscar.fullstackbackend.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ReportController {
    @Autowired
    private ReportRepository reportRepository;

    @PostMapping("/report")
    Report newReport(@RequestBody Report newReport) {
        return reportRepository.save(newReport);
    }

    @GetMapping("/reports")
    List<Report> getAllReports(){
        return reportRepository.findAll();
    }

    @GetMapping("/report/{id}")
    Report getReportById(@PathVariable Long id) {
        return reportRepository.findById(id)
                .orElseThrow(() -> new ReportNotFoundException(id));
    }


}
