package com.smartparking.model.response;

import com.smartparking.entity.Provider;
import lombok.Data;

@Data
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
}
