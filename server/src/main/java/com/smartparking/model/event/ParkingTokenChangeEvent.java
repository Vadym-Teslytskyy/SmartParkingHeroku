package com.smartparking.model.event;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParkingTokenChangeEvent {
    private Long parkingId;
    private String parkingToken;
}
