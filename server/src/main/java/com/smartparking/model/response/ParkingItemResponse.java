package com.smartparking.model.response;

import com.smartparking.entity.Parking;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

public class ParkingItemResponse {

    private Long id;
    private String city;
    private String street;
    private String building;
    private Double latitude;
    private Double longitude;
    private BigDecimal price;
    private Long spotsNumber;
    private Long availableSpotsNumber;

    public ParkingItemResponse(Parking parking) {
        this.id = parking.getId();
        this.city = parking.getCity();
        this.street = parking.getStreet();
        this.building = parking.getBuilding();
        this.latitude = parking.getLatitude();
        this.longitude = parking.getLongitude();
        this.price = parking.getPrice();
        this.spotsNumber = (long) parking.getSpots().size();
        // TODO Calculate available spots number.
    }

    public static ParkingItemResponse of(Parking parking) {
        return new ParkingItemResponse(parking);
    }

    public static List<ParkingItemResponse> listOf(List<Parking> parkings) {
        return parkings.stream().map(ParkingItemResponse::of).collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Long getSpotsNumber() {
        return spotsNumber;
    }

    public void setSpotsNumber(Long spotsNumber) {
        this.spotsNumber = spotsNumber;
    }

    public Long getAvailableSpotsNumber() {
        return availableSpotsNumber;
    }

    public void setAvailableSpotsNumber(Long availableSpotsNumber) {
        this.availableSpotsNumber = availableSpotsNumber;
    }
}
