package com.smartparking.controller;

import com.smartparking.model.request.RegistrationClientRequest;
import com.smartparking.entity.Client;
import com.smartparking.entity.Role;
import com.smartparking.entity.Provider;
import com.smartparking.model.request.ClientRequest;
import com.smartparking.model.response.ClientDetailResponse;
import com.smartparking.model.response.ClientItemResponse;
import com.smartparking.model.response.ProviderDetailResponse;
import com.smartparking.model.response.ProviderItemResponse;
import com.smartparking.service.ClientService;
import com.smartparking.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ClientController {

    @Autowired
    ClientService clientService;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    ProviderService providerService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("clients")
    List<ClientItemResponse> findAllClients() {
        List<Client> clients = clientService.findAll();
        List<ClientItemResponse> clientItemResponses = new ArrayList<>();
        for (Client client : clients) {
            clientItemResponses.add(ClientItemResponse.of(client));
        }
        return clientItemResponses;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("clients/clientslimit")
    List<ClientItemResponse> findLimitNumberOfClients() {
        List<Client> clients = clientService.findLimitNumberOfClients(new PageRequest(0, 50));
        List<ClientItemResponse> clientItemResponses = new ArrayList<>();
        for (Client client : clients) {
            clientItemResponses.add(ClientItemResponse.of(client));
        }
        return clientItemResponses;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("clients/{id}")
    ClientDetailResponse getClientsDetail(@PathVariable Long id) {
        Client client = clientService.findById(id);
        return ClientDetailResponse.of(client);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/clients/update/{id}")
    ResponseEntity updateClient(@PathVariable Long id, @RequestBody ClientRequest clientRequest) {
        if (clientRequest.getFirstName() != "" && clientRequest.getLastName() != "" &&
                clientRequest.getEmail() != "" && clientRequest.getRole() != "") {
            clientService.updateFromRequest(id, clientRequest);
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.NO_CONTENT.valueOf("Bad data input."));
        }
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("clients/findprovider/{id}")
    ProviderDetailResponse findProviderById(@PathVariable Long id) {
        Provider provider = providerService.findProviderByClientId(id);
        return ProviderDetailResponse.of(provider);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("clients/findclients/{input}")
    List<ClientItemResponse> findClientsByAnyMatch(@PathVariable String input) {
        if (input != "") {
            List<Client> clients = clientService.findClientsByAnyMatch(input);
            List<ClientItemResponse> clientItemResponses = new ArrayList<>();
            for (Client client : clients) {
                clientItemResponses.add(ClientItemResponse.of(client));
            }
            return clientItemResponses;
        } else return findAllClients();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("clients/getproviders")
    List<ProviderItemResponse> findAllProviders() {
        List<Provider> providers = providerService.findAll();
        List<ProviderItemResponse> providerItemResponses = new ArrayList<>();
        for (Provider provider : providers) {
            providerItemResponses.add(ProviderItemResponse.of(provider));
        }
        return providerItemResponses;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public String saveUser(@RequestBody RegistrationClientRequest regClient) {
        Client client = new Client();
        client.setEmail(regClient.getEmail());
        client.setPassword(bcryptEncoder.encode(regClient.getPassword()));
        client.setFirstName(regClient.getFirstname());
        client.setLastName(regClient.getLastname());
        client.setRole(String.valueOf(Role.DRIVER));
        clientService.save(client);
        return "registration successful";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("clients/findclientsbyrole/{input}")
    List<ClientItemResponse> findClientsByRole(@PathVariable String input) {
        if (input != "") {
            List<Client> clients = clientService.findClientsByRole(input);
            List<ClientItemResponse> clientItemResponses = new ArrayList<>();
            for (Client client : clients) {
                clientItemResponses.add(ClientItemResponse.of(client));
            }
            return clientItemResponses;
        } else return findAllClients();
    }

}
