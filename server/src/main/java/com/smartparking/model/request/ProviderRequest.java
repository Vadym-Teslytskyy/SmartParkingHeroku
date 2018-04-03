package com.smartparking.model.request;

import com.smartparking.entity.Provider;
import lombok.Data;

@Data
public class ProviderRequest {
    private Long id;
    private String name;
    private String city;
    private String street;
    private String building;
    private boolean active;

    public Provider toProvider() {
        Provider provider = new Provider();
        provider.setId(id);
        provider.setName(name);
        provider.setCity(city);
        provider.setStreet(street);
        provider.setBuilding(building);
        provider.setActive(active);
        return provider;
    }
}
