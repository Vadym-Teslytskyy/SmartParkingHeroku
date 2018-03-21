package com.smartparking.model.response;

import com.smartparking.dto.SpotDto;
import com.smartparking.entity.Parking;
import com.smartparking.repository.SpotRepository;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

public class ParkingDetailResponse {

    private Long id;

    private String address;

    private BigDecimal price;

    private String providerName;

    private String providerAddress;

    private Long numberSpots;

    private Long numberAvailableSpots;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Long getNumberSpots() {
        return numberSpots;
    }

    public Long getNumberAvailableSpots() {
        return numberAvailableSpots;
    }

    public void setNumberAvailableSpots(Long numberAvailableSpots) {
        this.numberAvailableSpots = numberAvailableSpots;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getProviderAddress() {
        return providerAddress;
    }

    public void setProviderAddress(String providerAddress) {
        this.providerAddress = providerAddress;
    }

    public void setNumberSpots(Long numberSpots) {
        this.numberSpots = numberSpots;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    /*
         *This method don`t set numberSpots and numberAvailableSpots values please set its after using this method
         */
    public static ParkingDetailResponse of(Parking parking) {
        ParkingDetailResponse parkingDetailResponse = new ParkingDetailResponse();

        parkingDetailResponse.setId(parking.getId());

        parkingDetailResponse.setAddress(
                parking.getCity() +
                        "/" + parking.getStreet() +
                        "/" + parking.getBuilding());

        parkingDetailResponse.setPrice(parking.getPrice());

        parkingDetailResponse.setProviderName(parking.getProvider().getName());

        parkingDetailResponse.setProviderAddress(
                parking.getProvider().getCity() +
                        "/" + parking.getStreet() +
                        "/" + parking.getBuilding());
        return parkingDetailResponse;
    }
}

