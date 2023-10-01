package com.oscar.fullstackbackend.controller;

import com.oscar.fullstackbackend.model.Report;
import com.oscar.fullstackbackend.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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


}
