package com.smartparking.controller;

import com.smartparking.entity.Parking;
import com.smartparking.model.response.ParkingItemResponse;
import com.smartparking.service.ParkingService;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/statistic")
public class StatisticController {

    @Autowired
    ParkingService parkingService;

    @Autowired
    SpotService spotService;

    @GetMapping("/allparkings")
    List<ParkingItemResponse> getAllParkings() {
        List<Parking> parkings = parkingService.findAll();
        List<ParkingItemResponse> parkingItemResponses = new ArrayList<>();
        parkings.forEach(parking -> parkingItemResponses.add(ParkingItemResponse.of(parking)));
        return parkingItemResponses;
    }

    @GetMapping("/findparkings/{input}")
    List<ParkingItemResponse> getLimitNumberOfClients(@PathVariable String input) {
        List<Parking> parkings = parkingService.findParkingsByCity(input);
        List<ParkingItemResponse> parkingItemResponses = new ArrayList<>();
        parkings.forEach(parking -> parkingItemResponses.add(ParkingItemResponse.of(parking)));
        return parkingItemResponses;
    }

    @GetMapping("/findbestparkingsbystreet/{input}")
    List<ParkingItemResponse> findMostPopularParkingsByStreet(@PathVariable String input) {
        List<Parking> parkings = spotService.findMostPopularParkingsByStreet(input);
        List<ParkingItemResponse> parkingItemResponses = new ArrayList<>();
        parkings.forEach(parking -> parkingItemResponses.add(ParkingItemResponse.of(parking)));
        return parkingItemResponses;
    }

    @GetMapping("/findparkingstreets/{input}")
    List<String> findParkingsStreet(@PathVariable String input) {
        List<String> parkingsStreet = parkingService.findParkingStreetByAnyMatch(input);
        return parkingsStreet;
    }

}
