package com.smartparking.model.response;

import com.smartparking.entity.Parking;
import com.smartparking.entity.Provider;

import java.util.List;
import java.util.stream.Collectors;

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
        response.setParkingIds(provider.getParkings()
                .stream().map(Parking::getId).collect(Collectors.toList()));

        return response;
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

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public List<Long> getParkingIds() {
        return parkingIds;
    }

    public void setParkingIds(List<Long> parkingIds) {
        this.parkingIds = parkingIds;
    }
}
