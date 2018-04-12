package com.smartparking.service;

import com.smartparking.entity.Parking;
import com.smartparking.entity.Spot;
import com.smartparking.model.response.SpotStatisticResponse;
import com.smartparking.repository.SpotRepository;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;

public interface SpotService extends Service<Spot, Long, SpotRepository> {

    List<Spot> findAllAvailableSpotsByParkingId(Long id);

    Long countAvailableSpotsByParkingId(Long id);

    Long countAllSpotsByParkingId(Long id);

    List<Spot> findAllSpotsByParkingId(Long id);

    public List<SpotStatisticResponse> getSpotStatistic(long id, long startDate, long endDate);

    List<Parking> findBestParkings(String city, String street, Instant date);

    List<Parking> findBestParkingsInTheCity(String city, Instant date);

}
