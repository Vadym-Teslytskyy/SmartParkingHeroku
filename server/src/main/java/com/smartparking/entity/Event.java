package com.smartparking.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.time.Instant;

@Entity
@Table(name = "event")
@Getter
@Setter
public class Event extends AbstractIdentifiableEntity {

    @NotNull
    @Column(name = "event_marker", nullable = false)
    private EventType eventType;

    @NotNull
    @ManyToOne(optional = false)
    private Spot spot;

    @NotNull
    @Column(name = "timestamp", nullable = false)
    private Instant timestamp;

    public Event(@NotNull Spot spot, @NotNull Instant timestamp, @NotNull EventType eventType) {
        this.spot = spot;
        this.timestamp = timestamp;
        this.eventType = eventType;
    }
}
