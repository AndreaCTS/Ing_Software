package com.app.fullstackbackend.repository;

import com.app.fullstackbackend.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report,Long> {
}
