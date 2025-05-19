package com.example.jee_exam_backend.service;

import com.example.jee_exam_backend.dtos.CreditDTO;
import java.util.List;

public interface CreditService {
    CreditDTO saveCredit(CreditDTO creditDTO);
    List<CreditDTO> listCredits();
    CreditDTO getCredit(Long id);
    void deleteCredit(Long id);
}