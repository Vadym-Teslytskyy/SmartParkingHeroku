package com.smartparking.service.impl;

import com.smartparking.entity.Client;
import com.smartparking.entity.Role;
import com.smartparking.model.request.ClientRequest;
import com.smartparking.repository.ClientRepository;
import com.smartparking.service.AbstractService;
import com.smartparking.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl extends AbstractService<Client, Long, ClientRepository> implements ClientService {

    @Autowired
    ClientRepository clientRepository;

    protected ClientServiceImpl(@Autowired ClientRepository repository) {
        super(repository);
    }

    @Override
    public Client findOne(String email) {
        return clientRepository.findClientByEmail(email).get();
    }

    @Override
    @Transactional
    public void updateFromRequest(Long id, ClientRequest clientRequest) {
        Client client = findById(id);
        client.setFirstName(clientRequest.getFirstName());
        client.setLastName(clientRequest.getLastName());
        client.setEmail(clientRequest.getEmail());
        client.setRole(clientRequest.getRole());
        getRepository().save(client);
    }

    @Override
    public List<Client> findClientsByAnyMatch(String input) {
        return getRepository().findClientsByAnyMatch(input);
    }

    @Override
    public List<Client> findLimitNumberOfClients(Pageable pageable) {
        return getRepository().findLimitNumberOfClients(pageable);
    }

    @Override
    public List<Client> findClientsByRole(String input) {
        return getRepository().findClientsByRole(input);
    }
}
