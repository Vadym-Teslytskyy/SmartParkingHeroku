package com.smartparking.model.request;

import com.smartparking.entity.Parking;
import com.smartparking.entity.Provider;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ParkingRequest {

    private Long id;
    private String city;
    private String street;
    private String building;
    private Double latitude;
    private Double longitude;
    private BigDecimal price;
    private String token;
    private Long providerId;

    public Parking toParking() {
        Parking parking = new Parking();
        parking.setId(id);
        parking.setCity(city);
        parking.setStreet(street);
        parking.setBuilding(building);
        parking.setLatitude(latitude);
        parking.setLongitude(longitude);
        parking.setPrice(price);
        parking.setToken(token);
        Provider provider = new Provider();
        provider.setId(providerId);
        parking.setProvider(provider);
        return parking;
    }
}
