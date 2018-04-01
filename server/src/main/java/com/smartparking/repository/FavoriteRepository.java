package com.smartparking.repository;

import com.smartparking.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    @Query("SELECT COUNT(favorite) FROM Favorite favorite WHERE favorite.client.id = :clientId")
    Long getCountByClientId(@Param("clientId") Long clientId);
}