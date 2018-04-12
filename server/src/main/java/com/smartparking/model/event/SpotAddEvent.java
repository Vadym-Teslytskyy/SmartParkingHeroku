package com.smartparking.model.event;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SpotAddEvent {
    private Long spotId;
    private Long parkingId;
}
