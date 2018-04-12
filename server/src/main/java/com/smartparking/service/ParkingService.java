package com.smartparking.service;

import com.smartparking.entity.Parking;
import com.smartparking.model.request.ParkingNearbyRequest;
import com.smartparking.model.response.ParkingResponse;
import com.smartparking.model.response.ParkingWithSpotsResponse;
import com.smartparking.repository.ParkingRepository;

import java.util.List;
import java.util.Optional;

public interface ParkingService extends Service<Parking, Long, ParkingRepository> {

    Optional<ParkingResponse> findByIdResponse(Long id);

    List<ParkingResponse> findAllByProviderIdResponse(Long id);

    List<ParkingResponse> findAllNearbyResponse(ParkingNearbyRequest request);

    List<ParkingWithSpotsResponse> findAllWithSpotsResponse();

    Boolean isFavorite(String email, Long parkingId);

    String findFavoriteNameByEmailAndParkingId(String email, Long parkingId);

    List<Parking> findParkingsByCity(String input);

    List<String> findParkingStreetByAnyMatch(String city, String street);

    List<String> findParkingCitiesByAnyMatch(String input);

    List<String> findAllParkingCities();

}
