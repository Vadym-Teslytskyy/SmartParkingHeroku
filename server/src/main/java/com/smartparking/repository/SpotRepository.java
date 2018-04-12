package com.smartparking.repository;

import com.smartparking.entity.Parking;
import com.smartparking.entity.Spot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface SpotRepository extends JpaRepository<Spot, Long> {

    @Query("SELECT s FROM Parking p JOIN p.spots s JOIN s.events e WHERE p.id=?1 AND e.timestamp = "
            + "(SELECT MAX(ee.timestamp) FROM Event ee JOIN ee.spot ss JOIN ss.parking pp WHERE pp.id=?1) AND e.eventType=1")
    List<Spot> findAllAvailableSpotsByParkingId(Long id);

    @Query("SELECT COUNT(s) FROM Parking p JOIN p.spots s JOIN s.events e WHERE p.id=?1 AND e.timestamp = "
            + "(SELECT MAX(ee.timestamp) FROM Event ee JOIN ee.spot ss JOIN ss.parking pp WHERE pp.id=?1) AND e.eventType=1")
    Long countAvailableSpotsByParkingId(Long id);

    @Query("SELECT COUNT(s) FROM Parking p JOIN p.spots s WHERE p.id=?1")
    Long countAllSpotsByParkingId(Long id);

    List<Spot> findAllByParkingId(Long id);

    @Query("SELECT p, count(s.id) FROM Parking p JOIN p.spots s JOIN s.events e where p.city=?1 and p.street=?2 and e.timestamp > ?3"
            + " group by p order by count(s.id) desc")
    List<Parking> findBestParkings(String city, String street, Instant date);

    @Query("SELECT p, count(s.id) FROM Parking p JOIN p.spots s JOIN s.events e where p.city=?1 and e.timestamp > ?2"
            + " group by p order by count(s.id) desc")
    List<Parking> findBestParkingsInTheCity(String city, Instant date);

}