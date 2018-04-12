package com.smartparking.controller;

import com.smartparking.entity.Spot;
import com.smartparking.model.response.SpotStatisticResponse;
import com.smartparking.model.response.SpotStatusResponse;
import com.smartparking.service.SpotService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class SpotController {

    private final SpotService spotService;
    private static final Logger LOGGER = LoggerFactory.getLogger(SpotController.class);



    @Autowired
    public SpotController(SpotService spotService) {
        this.spotService = spotService;
    }

    @RequestMapping("parkingdetail/{id}/spots")
    List<SpotStatusResponse> findAllSpotsDto(@PathVariable Long id) {
        List<Spot> allSpots = spotService.findAllSpotsByParkingId(id);
        List<Spot> freeSpots = spotService.findAllAvailableSpotsByParkingId(id);
        List<SpotStatusResponse> spotStatusResponseList = new ArrayList<>();
        for (Spot spot : allSpots) {
            SpotStatusResponse spotStatusResponse = new SpotStatusResponse();
            spotStatusResponse.setId(spot.getId());
            spotStatusResponse.setIsFree(freeSpots.contains(spot));
            spotStatusResponseList.add(spotStatusResponse);
        }
        return spotStatusResponseList;
    }

    @RequestMapping("parkingdetail/{id}/freespots")
    List<SpotStatusResponse> findAvailableSpotsDto(@PathVariable Long id) {
        List<Spot> freeSpots = spotService.findAllAvailableSpotsByParkingId(id);
        List<SpotStatusResponse> spotStatusResponseList = new ArrayList<>();
        for (Spot spot : freeSpots) {
            SpotStatusResponse spotStatusResponse = new SpotStatusResponse();
            spotStatusResponse.setId(spot.getId());
            spotStatusResponse.setIsFree(true);
            spotStatusResponseList.add(spotStatusResponse);
        }
        return spotStatusResponseList;
    }



    @RequestMapping("parkingdetail/{id}/spotstatistic")
    public ResponseEntity<List<SpotStatisticResponse>> getSpotStatistic(
            @PathVariable Long id,
            @RequestParam("start_time") String startTime,
            @RequestParam("end_time") String endTime) {

        List<SpotStatisticResponse> spotStatisticResponseList = spotService.getSpotStatistic(id,Long.parseLong(startTime),Long.parseLong(endTime));
        return new ResponseEntity<>(spotStatisticResponseList, HttpStatus.OK);
    }



}
