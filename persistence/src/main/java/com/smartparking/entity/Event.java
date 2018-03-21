package com.smartparking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Entity
@Table(name = "event")
public class Event extends AbstractIdentifiableEntity {

    @NotNull
    @Column(name = "event_marker", nullable = false)
    private EventMarker eventMarker;

    public Event() {
    }

    @NotNull
    @ManyToOne(optional = false)
    private Spot spot;

    @NotNull
    @Column(name = "timestamp", nullable = false)
    private Instant timestamp;

    public Event(@NotNull Spot spot, @NotNull Instant timestamp, @NotNull EventMarker eventMarker) {
        this.spot = spot;
        this.timestamp = timestamp;
        this.eventMarker = eventMarker;
    }


    public Spot getSpot() {
        return spot;
    }

    public void setSpot(Spot spot) {
        this.spot = spot;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public EventMarker getEventMarker() {
        return eventMarker;
    }

    public void setEventMarker(EventMarker eventMarker) {
        this.eventMarker = eventMarker;
    }

    public void setCurrentEventTime() {
        this.timestamp = LocalDateTime.now().toInstant(ZoneOffset.UTC);
    }

    @Override
    public String toString() {
        return "Event{" +
                "spotId=" + spot.getId() +
                ", timestamp=" + timestamp +
                ", eventMarker=" + eventMarker +
                '}';
    }
}
