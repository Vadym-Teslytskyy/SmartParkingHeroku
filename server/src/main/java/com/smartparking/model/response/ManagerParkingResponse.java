package com.smartparking.model.response;

import com.smartparking.entity.Parking;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

// TODO Refactoring. Remove getters-setters boilerplate code: use Lombok.

public class ManagerParkingResponse {

    private Long id;
    private String city;
    private String street;
    private String building;
    private Double latitude;
    private Double longitude;
    private BigDecimal price;
    private String token;
    private Long providerId;
    private String providerName;
    private Integer favoritesCount;
    private Integer spotsCount;

    private ManagerParkingResponse(Parking parking) {
        this.id = parking.getId();
        this.city = parking.getCity();
        this.street = parking.getStreet();
        this.building = parking.getBuilding();
        this.latitude = parking.getLatitude();
        this.longitude = parking.getLongitude();
        this.price = parking.getPrice();
        this.token = parking.getToken();
        this.providerId = parking.getProvider().getId();
        this.providerName = parking.getProvider().getName();
        this.favoritesCount = parking.getFavorites().size();
        this.spotsCount = parking.getSpots().size();
    }

    public static ManagerParkingResponse of(Parking parking) {
        return new ManagerParkingResponse(parking);
    }

    public static List<ManagerParkingResponse> listOf(List<Parking> parkings) {
        return parkings.stream().map(ManagerParkingResponse::of).collect(Collectors.toList());
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

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public Integer getFavoritesCount() {
        return favoritesCount;
    }

    public void setFavoritesCount(Integer favoritesCount) {
        this.favoritesCount = favoritesCount;
    }

    public Integer getSpotsCount() {
        return spotsCount;
    }

    public void setSpotsCount(Integer spotsCount) {
        this.spotsCount = spotsCount;
    }
}
