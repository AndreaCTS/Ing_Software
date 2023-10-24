package com.app.fullstackbackend.controller;

import com.app.fullstackbackend.exception.ReportNotFoundException;
import com.app.fullstackbackend.model.Report;
import com.app.fullstackbackend.repository.ReportRepository;
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
