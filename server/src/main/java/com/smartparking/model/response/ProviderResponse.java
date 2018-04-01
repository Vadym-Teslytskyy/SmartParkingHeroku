package com.smartparking.model.response;

import com.smartparking.entity.Parking;
import com.smartparking.entity.Provider;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class ProviderResponse {

    private Long id;
    private String name;
    private String city;
    private String street;
    private String building;
    private Boolean active;
    private List<Long> parkingIds;

    public static ProviderResponse of(Provider provider) {
        ProviderResponse response = new ProviderResponse();
        response.setId(provider.getId());
        response.setName(provider.getName());
        response.setCity(provider.getCity());
        response.setStreet(provider.getStreet());
        response.setBuilding(provider.getBuilding());
        response.setActive(provider.getActive());
        response.setParkingIds(provider.getParkings()
                .stream().map(Parking::getId).collect(Collectors.toList()));
        return response;
    }
}
