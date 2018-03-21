package com.smartparking.model.request;

import com.smartparking.entity.Parking;
import com.smartparking.entity.Provider;

import java.math.BigDecimal;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getProviderId() {
        return providerId;
    }

    public void setProviderId(Long providerId) {
        this.providerId = providerId;
    }
}
