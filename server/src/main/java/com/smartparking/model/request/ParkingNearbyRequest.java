package com.smartparking.model.request;

import lombok.Data;

@Data
public class ParkingNearbyRequest {
    private Double latitude;
    private Double longitude;
    private Double radius;
}