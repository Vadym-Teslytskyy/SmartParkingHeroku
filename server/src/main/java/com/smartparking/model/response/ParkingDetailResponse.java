package com.smartparking.model.response;

import com.smartparking.entity.Parking;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ParkingDetailResponse {

    private Long id;
    private Double latitude;
    private Double longitude;
    private String address;
    private BigDecimal price;
    private String providerName;
    private String providerAddress;
    private Long spotsCount;
    private Long availableSpotsCount;
    private Boolean isFavorite;
    private String favoriteName;

    /**
     * This method don`t set numberSpots and numberAvailableSpots values please set its after using this method
     */
    public static ParkingDetailResponse of(Parking parking) {
        ParkingDetailResponse parkingDetailResponse = new ParkingDetailResponse();
        parkingDetailResponse.setId(parking.getId());

        parkingDetailResponse.setAddress(
                parking.getCity() +
                        "/" + parking.getStreet() +
                        "/" + parking.getBuilding());

        parkingDetailResponse.setPrice(parking.getPrice());

        parkingDetailResponse.setLongitude(parking.getLongitude());

        parkingDetailResponse.setLatitude(parking.getLatitude());

        parkingDetailResponse.setProviderName(parking.getProvider().getName());

        parkingDetailResponse.setProviderAddress(
                parking.getProvider().getCity() +
                        "/" + parking.getStreet() +
                        "/" + parking.getBuilding());
        return parkingDetailResponse;
    }
}

