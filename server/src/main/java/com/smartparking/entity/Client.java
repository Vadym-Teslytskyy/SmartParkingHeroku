package com.smartparking.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "client")
@Getter
@Setter
public class Client extends AbstractIdentifiableEntity {

    @NotNull
    @Column(name = "first_name", nullable = false)
    private String firstName;

    @NotNull
    @Column(name = "last_name", nullable = false)
    private String lastName;

    @NotNull
    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @NotNull
    @Column(name = "password", nullable = false)
    private String password;

    @NotNull
    @Column(name = "role", nullable = false)
    private Role role;

    @Column(name = "image")
    private byte[] image;

    @OneToMany(mappedBy = "client")
    private List<Favorite> favorites;

    @ManyToOne(fetch = FetchType.LAZY)
    private Provider provider;
}
