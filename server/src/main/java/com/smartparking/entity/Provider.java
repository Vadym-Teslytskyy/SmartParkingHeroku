package com.smartparking.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;


@Entity
@Table(name = "provider")
@Getter
@Setter
public class Provider extends AbstractIdentifiableEntity {

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "provider", cascade = CascadeType.REMOVE)
    private List<Parking> parkings;

    @OneToMany(mappedBy = "provider")
    private List<Client> employees;

    @NotNull
    @Column(name = "active", nullable = false)
    private Boolean active;

    @NotNull
    @Column(name = "city", nullable = false)
    private String city;

    @NotNull
    @Column(name = "street", nullable = false)
    private String street;

    @Column(name = "building")
    private String building;
}
