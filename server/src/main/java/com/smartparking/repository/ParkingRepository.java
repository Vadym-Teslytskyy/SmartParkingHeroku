package com.smartparking.repository;

import com.smartparking.entity.Parking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.Tuple;
import java.util.List;

public interface ParkingRepository extends JpaRepository<Parking, Long> {

    List<Parking> findAllByProviderId(Long id);


    @Query(value = "SELECT *, LOCATION_DISTANCE(:latitude, :longitude, parking.latitude, parking.longitude) AS distance " +
            "FROM parking " +
            "WHERE LOCATION_DISTANCE(:latitude, :longitude, parking.latitude, parking.longitude) <= :radius",
            nativeQuery = true)
    List<Tuple> findAllNearby(@Param(value = "latitude") Double latitude,
                              @Param(value = "longitude") Double longitude,
                              @Param(value = "radius") Double radius);

    List<Parking> findParkingsByCity(String input);

    @Query("SELECT distinct p.street from Parking p where p.city=?1 and p.street like ?2%")
    List<String> findParkingStreetByAnyMatch(String city, String street);

    @Query("SELECT distinct p.city from Parking p where p.city like ?1%")
    List<String> findParkingCitiesByAnyMatch(String input);

    @Query("SELECT distinct p.city from Parking p")
    List<String> findAllParkingCities();

}
