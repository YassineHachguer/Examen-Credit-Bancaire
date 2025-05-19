package com.example.jee_exam_backend.service;

import com.example.jee_exam_backend.dtos.RemboursementDTO;
import java.util.List;

public interface RemboursementService {
    RemboursementDTO saveRemboursement(RemboursementDTO remboursementDTO);
    List<RemboursementDTO> listRemboursements();
    RemboursementDTO getRemboursement(Long id);
    void deleteRemboursement(Long id);
}