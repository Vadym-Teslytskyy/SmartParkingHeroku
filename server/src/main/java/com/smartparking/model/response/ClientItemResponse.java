package com.smartparking.model.response;

import com.smartparking.entity.Client;

public class ClientItemResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String role;

    public static ClientItemResponse of(Client client) {
        ClientItemResponse clientItemResponse = new ClientItemResponse();
        clientItemResponse.setId(client.getId());
        clientItemResponse.setFirstName(client.getFirstName());
        clientItemResponse.setLastName(client.getLastName());
        clientItemResponse.setEmail(client.getEmail());
        clientItemResponse.setRole(client.getRole().toString());
        return clientItemResponse;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
