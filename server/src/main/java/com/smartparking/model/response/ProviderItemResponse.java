package com.smartparking.model.response;

import com.smartparking.entity.Provider;

public class ProviderItemResponse {
    private Long id;
    private String name;
    private String city;
    private String street;
    private String building;
    private Boolean active;

    public static ProviderItemResponse of(Provider provider) {
        ProviderItemResponse providerResponse = new ProviderItemResponse();
        providerResponse.setId(provider.getId());
        providerResponse.setName(provider.getName());
        providerResponse.setCity(provider.getCity());
        providerResponse.setStreet(provider.getStreet());
        providerResponse.setBuilding(provider.getBuilding());
        providerResponse.setActive(provider.getActive());
        return providerResponse;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }
}
