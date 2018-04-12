package com.smartparking.controller;

import com.smartparking.entity.Client;
import com.smartparking.entity.Provider;
import com.smartparking.model.request.ClientRequest;
import com.smartparking.model.response.ClientItemResponse;
import com.smartparking.model.response.ProviderItemResponse;
import com.smartparking.service.ClientService;
import com.smartparking.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    ResponseEntity<?> getAllClients() {
        List<Client> clients = clientService.findAll();
        List<ClientItemResponse> clientItemResponses = new ArrayList<>();
        clients.forEach(client -> clientItemResponses.add(ClientItemResponse.of(client)));
        return new ResponseEntity<>(clientItemResponses, HttpStatus.OK);
    }

    @GetMapping("/clientslimit")
    ResponseEntity<?> getLimitNumberOfClients() {
        List<Client> clients = clientService.findLimitNumberOfClients(PageRequest.of(0, 50));
        List<ClientItemResponse> clientItemResponses = new ArrayList<>();
        clients.forEach(client -> clientItemResponses.add(ClientItemResponse.of(client)));
        return new ResponseEntity<>(clientItemResponses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getClientDetails(@PathVariable Long id) {
        return clientService.findByIdResponse(id)
                .map(clientDetailResponse -> new ResponseEntity<Object>(clientDetailResponse, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<Object>("Incorrect client id", HttpStatus.BAD_REQUEST));
    }

    @PostMapping("/update/{id}")
    ResponseEntity<?> updateClient(@PathVariable Long id, @RequestBody ClientRequest clientRequest) {
        if (!clientRequest.getFirstName().equals("") && !clientRequest.getLastName().equals("")) {
            clientService.updateFromRequest(id, clientRequest);
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Empty data input.", HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/findprovider/{id}")
    ResponseEntity<?> getProviderByClientId(@PathVariable Long id) {
        return providerService.findProviderByClientId(id)
                .map(providerResponse -> new ResponseEntity<Object>(providerResponse, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<Object>("Incorrect client id", HttpStatus.BAD_REQUEST));
    }

    @GetMapping("/findclients/{input}")
    ResponseEntity<?> getClientsByAnyMatch(@PathVariable String input) {
        if (!input.equals("")) {
            List<Client> clients = clientService.findClientsByAnyMatch(input);
            List<ClientItemResponse> clientItemResponses = new ArrayList<>();
            clients.forEach(client -> clientItemResponses.add(ClientItemResponse.of(client)));
            return new ResponseEntity<>(clientItemResponses, HttpStatus.OK);
        } else return getLimitNumberOfClients();
    }

    @GetMapping("/findbyrole/{input}")
    ResponseEntity<?> getClientsByRole(@PathVariable String input) {
        List<Client> clients = clientService.findClientsByRole(input);
        List<ClientItemResponse> clientItemResponses = new ArrayList<>();
        clients.forEach(client -> clientItemResponses.add(ClientItemResponse.of(client)));
        return new ResponseEntity<>(clientItemResponses, HttpStatus.OK);
    }

    @GetMapping("/getproviders")
    ResponseEntity<?> getAllProviders() {
        List<Provider> providers = providerService.findAll();
        List<ProviderItemResponse> providerItemResponses = new ArrayList<>();
        providers.forEach(provider -> providerItemResponses.add(ProviderItemResponse.of(provider)));
        return new ResponseEntity<>(providerItemResponses, HttpStatus.OK);
    }
}
