package com.smartparking.controller;

import com.smartparking.entity.Spot;
import com.smartparking.model.response.SpotResponse;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SpotController {

    private final SpotService spotService;

    @Autowired
    public SpotController(SpotService spotService) {
        this.spotService = spotService;
    }

    @RequestMapping("parkingdetail/{id}/spots")
    List<SpotResponse> findAllSpotsDto(@PathVariable Long id) {
        List<Spot> allSpots = spotService.findAllSpotsByParkingId(id);
        List<Spot> freeSpots = spotService.findAllAvailableSpotsByParkingId(id);
        List<SpotResponse> spotResponseList = new ArrayList<>();
        for (Spot spot : allSpots) {
            SpotResponse spotResponse = new SpotResponse();
            spotResponse.setId(spot.getId());
            spotResponse.setIsFree(freeSpots.contains(spot));
            spotResponseList.add(spotResponse);
        }
        return spotResponseList;
    }

    @RequestMapping("parkingdetail/{id}/freespots")
    List<SpotResponse> findAvailableSpotsDto(@PathVariable Long id) {
        List<Spot> freeSpots = spotService.findAllAvailableSpotsByParkingId(id);
        List<SpotResponse> spotResponseList = new ArrayList<>();
        for (Spot spot : freeSpots) {
            SpotResponse spotResponse = new SpotResponse();
            spotResponse.setId(spot.getId());
            spotResponse.setIsFree(true);
            spotResponseList.add(spotResponse);
        }
        return spotResponseList;
    }
}
