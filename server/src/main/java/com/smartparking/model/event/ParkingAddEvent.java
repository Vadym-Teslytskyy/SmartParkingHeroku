package com.smartparking.model.event;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParkingAddEvent {
    private Long parkingId;
    private String parkingToken;
}
