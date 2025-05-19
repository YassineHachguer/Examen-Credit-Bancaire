package com.example.jee_exam_backend.repositories;

import com.example.jee_exam_backend.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {}
