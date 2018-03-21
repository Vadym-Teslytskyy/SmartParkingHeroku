package com.smartparking.dto;

import java.util.List;

public class ClientDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private List<FavoriteDto> favoriteDto;
    private ProviderDto providerDto;
    private String role;

    public static ClientDto builder() {
        ClientDto clientDto = new ClientDto();
        return clientDto;
    }

    public ClientDto setId(Long id) {
        this.id = id;
        return this;
    }

    public ClientDto setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public ClientDto setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public ClientDto setEmail(String email) {
        this.email = email;
        return this;
    }

    public ClientDto setPassword(String password) {
        this.password = password;
        return this;
    }

    public ClientDto setFavoriteDto(List<FavoriteDto> favoriteDto) {
        this.favoriteDto = favoriteDto;
        return this;
    }

    public ClientDto setProviderDto(ProviderDto providerDto) {
        this.providerDto = providerDto;
        return this;
    }

    public String getRole() {
        return role;
    }

    public ClientDto setRole(String role) {
        this.role = role;
        return this;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public List<FavoriteDto> getFavoriteDto() {
        return favoriteDto;
    }

    public ProviderDto getProviderDto() {
        return providerDto;
    }


}
