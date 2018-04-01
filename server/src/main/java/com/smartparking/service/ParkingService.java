package com.smartparking.service;

import com.smartparking.entity.Parking;
import com.smartparking.model.response.ParkingResponse;
import com.smartparking.repository.ParkingRepository;

import java.util.List;
import java.util.Optional;

public interface ParkingService extends Service<Parking, Long, ParkingRepository> {

    Optional<ParkingResponse> findByIdResponse(Long id);

    List<ParkingResponse> findAllByProviderIdResponse(Long id);

    List<ParkingResponse> findAllNearbyResponse(Double latitude, Double longitude, Double radius);
}
