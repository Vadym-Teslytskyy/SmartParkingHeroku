package com.smartparking.repository;

import com.smartparking.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    @Query("SELECT COUNT(favorite) FROM Favorite favorite WHERE favorite.client.id = :clientId")
    Long getCountByClientId(@Param("clientId") Long clientId);

    @Query("SELECT DISTINCT f.name FROM Favorite f JOIN f.client c JOIN f.parking p WHERE c.email=?1 AND p.id=?2")
    Optional<String> findByClientEmailAndParkingId(String email, Long parkingId);
}