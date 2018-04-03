package com.smartparking.model.response;

import com.smartparking.entity.Parking;
import com.smartparking.entity.Provider;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class ProviderDetailResponse {

    private Long id;
    private String name;
    private String city;
    private String street;
    private String building;
    private Boolean active;
    private List<Long> parkingIds;

    public static ProviderDetailResponse of(Provider provider) {
        ProviderDetailResponse response = new ProviderDetailResponse();
        response.setActive(provider.getActive());
        response.setCity(provider.getCity());
        response.setStreet(provider.getStreet());
        response.setBuilding(provider.getBuilding());
        response.setName(provider.getName());
        response.setId(provider.getId());
        response.setParkingIds(provider.getParkings().stream()
                .map(Parking::getId)
                .collect(Collectors.toList()));
        return response;
    }
}
