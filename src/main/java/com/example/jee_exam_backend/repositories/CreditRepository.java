package com.example.jee_exam_backend.repositories;

import com.example.jee_exam_backend.entities.Credit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditRepository extends JpaRepository<Credit, Long> {}
