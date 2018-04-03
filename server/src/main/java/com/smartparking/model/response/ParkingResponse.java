package com.smartparking.model.response;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class ParkingResponse {

    private Long id;
    private String city;
    private String street;
    private String building;
    private Double latitude;
    private Double longitude;
    private BigDecimal price;
    private Double distance;
    private Long spotsCount;
    private Long availableSpotsCount;
    private String token;
    private Long providerId;
    private String providerName;
    private Long favoritesCount;
}
