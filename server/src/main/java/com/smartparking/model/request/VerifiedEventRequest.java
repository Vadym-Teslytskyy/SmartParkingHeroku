package com.smartparking.model.request;

import com.smartparking.entity.Event;
import com.smartparking.entity.EventType;
import com.smartparking.entity.Spot;
import lombok.Data;

import java.time.Instant;
import java.util.Objects;

@Data
public class VerifiedEventRequest {

    private Long spotId;
    private String eventType;
    private Long timestamp;

    public Event toEvent() {
        Spot spot = new Spot(this.spotId);
        EventType eventType = EventType.valueOf(this.eventType);
        Instant timestamp = Instant.ofEpochMilli(Objects.requireNonNull(this.timestamp, "timestamp"));
        return new Event(spot, eventType, timestamp);
    }
}
