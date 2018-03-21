package com.smartparking.service;

import com.smartparking.entity.Spot;
import com.smartparking.repository.SpotRepository;

import java.util.List;

public interface SpotService extends Service<Spot, Long, SpotRepository> {

    List<Spot> findAllAvailableSpotsByParkingId(Long id);

    Long countAvailableSpotsByParkingId(Long id);

    Long countAllSpotsByParkingId(Long id);

    List<Spot> findAllSpotsByParkingId(Long id);
}
