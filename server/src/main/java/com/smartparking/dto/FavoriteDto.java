package com.smartparking.dto;

public class FavoriteDto {

    private Long id;
    private String name;
    private ClientDto clientDto;

    public Long getId() {
        return id;
    }

    public FavoriteDto setId(Long id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public FavoriteDto setName(String name) {
        this.name = name;
        return this;
    }

    public ClientDto getClientDto() {
        return clientDto;
    }

    public FavoriteDto setClientDto(ClientDto clientDto) {
        this.clientDto = clientDto;
        return this;
    }
}
