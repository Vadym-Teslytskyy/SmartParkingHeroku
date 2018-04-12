package com.smartparking.model.response;

import lombok.Data;

import java.util.List;

@Data
public class ParkingWithSpotsResponse {
    private Long id;
    private String token;
    private List<SpotResponse> spots;
}
