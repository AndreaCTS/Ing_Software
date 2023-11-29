package com.oscar.fullstackbackend.repository;

import com.oscar.fullstackbackend.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {
}
