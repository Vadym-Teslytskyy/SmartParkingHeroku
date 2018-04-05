package com.smartparking.controller;

import com.smartparking.entity.Client;
import com.smartparking.entity.Provider;
import com.smartparking.entity.Role;
import com.smartparking.model.request.ClientRequest;
import com.smartparking.model.response.*;
import com.smartparking.service.ClientService;
import com.smartparking.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    ClientService clientService;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    ProviderService providerService;

    @GetMapping("")
    List<ClientItemResponse> getAllClients() {
        List<Client> clients = clientService.findAll();
        List<ClientItemResponse> clientItemResponses = new ArrayList<>();
        clients.forEach(client -> clientItemResponses.add(ClientItemResponse.of(client)));
        return clientItemResponses;
    }


    @GetMapping("/clientslimit")
    List<ClientItemResponse> getLimitNumberOfClients() {
        List<Client> clients = clientService.findLimitNumberOfClients(PageRequest.of(0, 50));
        List<ClientItemResponse> clientItemResponses = new ArrayList<>();
        clients.forEach(client -> clientItemResponses.add(ClientItemResponse.of(client)));
        return clientItemResponses;
    }


    @GetMapping("/{id}")
    ClientDetailResponse getClientDetails(@PathVariable Long id) {
        Client client = clientService.findById(id);
        return ClientDetailResponse.of(client);
    }

    @PostMapping("/update/{id}")
    ResponseEntity updateClient(@PathVariable Long id, @RequestBody ClientRequest clientRequest) {
        if (!clientRequest.getFirstName().equals("") && !clientRequest.getLastName().equals("")) {
            clientService.updateFromRequest(id, clientRequest);
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Empty data input.", HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/findprovider/{id}")
    ProviderDetailResponse getProviderById(@PathVariable Long id) {
        Provider provider = providerService.findProviderByClientId(id);
        return ProviderDetailResponse.of(provider);
    }

    @GetMapping("/findclients/{input}")
    List<ClientItemResponse> getClientsByAnyMatch(@PathVariable String input) {
        if (input != "") {
            List<Client> clients = clientService.findClientsByAnyMatch(input);
            List<ClientItemResponse> clientItemResponses = new ArrayList<>();
            clients.forEach(client -> clientItemResponses.add(ClientItemResponse.of(client)));
            return clientItemResponses;
        } else return getAllClients();
    }

    @GetMapping("/findbyrole/{input}")
    List<ClientItemResponse> getClientsByRole(@PathVariable String input) {
        List<Client> clients = clientService.findClientsByRole(input);
        List<ClientItemResponse> clientItemResponses = new ArrayList<>();
        clients.forEach(client -> clientItemResponses.add(ClientItemResponse.of(client)));
        return clientItemResponses;
    }

    @GetMapping("/getproviders")
    List<ProviderItemResponse> getAllProviders() {
        List<Provider> providers = providerService.findAll();
        List<ProviderItemResponse> providerItemResponses = new ArrayList<>();
        providers.forEach(provider -> providerItemResponses.add(ProviderItemResponse.of(provider)));
        return providerItemResponses;
    }
}
