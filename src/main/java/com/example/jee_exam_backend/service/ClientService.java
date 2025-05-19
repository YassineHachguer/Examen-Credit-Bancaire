package com.example.jee_exam_backend.service;

import com.example.jee_exam_backend.dtos.ClientDTO;
import java.util.List;

public interface ClientService {
    ClientDTO saveClient(ClientDTO clientDTO);
    List<ClientDTO> listClients();
    ClientDTO getClient(Long id);
    void deleteClient(Long id);
}
