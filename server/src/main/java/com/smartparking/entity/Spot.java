package com.smartparking.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "spot")
@Getter
@Setter
public class Spot extends AbstractIdentifiableEntity {

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Parking parking;

    @OneToMany(mappedBy = "spot")
    private List<Event> events;
}
