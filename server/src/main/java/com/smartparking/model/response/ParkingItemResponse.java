package com.smartparking.model.response;

import com.smartparking.entity.Parking;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ParkingItemResponse {

    private Long id;
    private String city;
    private String street;
    private BigDecimal price;
    private String providerName;
    private String building;

    public static ParkingItemResponse of(Parking parking){
        ParkingItemResponse parkingItemResponse = new ParkingItemResponse();
        parkingItemResponse.setId(parking.getId());
        parkingItemResponse.setCity(parking.getCity());
        parkingItemResponse.setStreet(parking.getStreet());
        parkingItemResponse.setBuilding(parking.getBuilding());
        parkingItemResponse.setPrice(parking.getPrice());
        parkingItemResponse.setProviderName(parking.getProvider().getName());
        return parkingItemResponse;
    }
}
