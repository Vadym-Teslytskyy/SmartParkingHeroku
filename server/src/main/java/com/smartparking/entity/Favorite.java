package com.smartparking.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "favorite")
@Getter
@Setter
public class Favorite extends AbstractIdentifiableEntity {

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Parking parking;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;
}
