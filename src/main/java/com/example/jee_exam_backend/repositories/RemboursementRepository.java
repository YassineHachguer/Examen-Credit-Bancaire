package com.example.jee_exam_backend.repositories;

import com.example.jee_exam_backend.entities.Remboursement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RemboursementRepository extends JpaRepository<Remboursement, Long> {}