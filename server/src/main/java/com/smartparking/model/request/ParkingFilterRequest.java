package com.smartparking.model.request;

import lombok.Data;

@Data
public class ParkingFilterRequest {
    private String latitude;
    private String longitude;
    private String radius;
}
