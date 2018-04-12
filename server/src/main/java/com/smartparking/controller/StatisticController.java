package com.smartparking.controller;

import com.smartparking.entity.Parking;
import com.smartparking.model.response.ParkingItemResponse;
import com.smartparking.service.ParkingService;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.*;
import java.util.ArrayList;
import java.util.List;
import java.util.TimeZone;

@RestController
@RequestMapping("/statistic")
public class StatisticController {

    @Autowired
    ParkingService parkingService;

    @Autowired
    SpotService spotService;

    @GetMapping("/findparkingstreets")
    ResponseEntity<List<String>> findParkingsStreetsByAnyMatching(@RequestParam("city") String city,
                                                                  @RequestParam("street") String input) {
        return new ResponseEntity<>(parkingService.findParkingStreetByAnyMatch(city, input), HttpStatus.OK);
    }

    @GetMapping("/findparkingscities/{input}")
    ResponseEntity<List<String>> findParkingsCitiesByAnyMatching(@PathVariable String input) {
        return new ResponseEntity<>(parkingService.findParkingCitiesByAnyMatch(input), HttpStatus.OK);
    }

    @GetMapping("/findallparkingscities")
    ResponseEntity<List<String>> findAllParkingsCities() {
        return new ResponseEntity<>(parkingService.findAllParkingCities(), HttpStatus.OK);
    }

    @RequestMapping("/findbestparkings")
    public ResponseEntity<List<ParkingItemResponse>> findBestParkings(@RequestParam("city") String city,
                                                                      @RequestParam("street") String street,
                                                                      @RequestParam("date") String date) {

        Instant instant = getInstant(date);

        List<Parking> parkings = spotService.findBestParkings(city, street, instant);
        List<ParkingItemResponse> parkingItemResponses = new ArrayList<>();
        parkings.forEach(parking -> parkingItemResponses.add(ParkingItemResponse.of(parking)));
        return new ResponseEntity<>(parkingItemResponses, HttpStatus.OK);
    }

    @RequestMapping("/findbestparkingsincity")
    public ResponseEntity<List<ParkingItemResponse>> findBestParkingsInTheCity(@RequestParam("city") String city,
                                                                               @RequestParam("date") String date) {

        Instant instant = getInstant(date);

        List<Parking> parkings = spotService.findBestParkingsInTheCity(city, instant);
        List<ParkingItemResponse> parkingItemResponses = new ArrayList<>();
        parkings.forEach(parking -> parkingItemResponses.add(ParkingItemResponse.of(parking)));
        return new ResponseEntity<>(parkingItemResponses, HttpStatus.OK);
    }

    private Instant getInstant(String date) {
        LocalDateTime localDateTime =
                LocalDateTime.ofInstant(Instant.ofEpochMilli(Long.parseLong(date)),
                        TimeZone.getDefault().toZoneId());
        return localDateTime.toInstant(ZoneOffset.UTC);
    }

}
