package com.smartparking.controller;

import com.smartparking.entity.Spot;
import com.smartparking.model.request.ClientRequest;
import com.smartparking.model.response.SpotResponse;
import com.smartparking.model.response.SpotStatisticResponse;
import com.smartparking.service.SpotService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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

    @RequestMapping("spotstatistic/{id}")
    List<SpotStatisticResponse> getSpotStatistic (@PathVariable Long id) {
        List<SpotStatisticResponse> spotStatisticResponseList = new ArrayList<>();

        Map<Long, Double > spotStatistic = spotService.getSpotStatistic(id);
        for(Map.Entry<Long, Double> entry : spotStatistic.entrySet()) {
            Long key = entry.getKey();
            Double value = entry.getValue();
            SpotStatisticResponse spotStatisticResponse = new SpotStatisticResponse();
            spotStatisticResponse.setId(key);
            spotStatisticResponse.setNumberOfHours(value);
            spotStatisticResponseList.add(spotStatisticResponse);

        }

        return spotStatisticResponseList;
    }


    @RequestMapping("spotstatistic/byDate/{id}")
    List<SpotStatisticResponse> getSpotStatisticByDateRange (@PathVariable Long id,@RequestBody ClientRequest clientRequest) {
        List<SpotStatisticResponse> spotStatisticResponseList = new ArrayList<>();

        /*Map<Long, Double > spotStatistic = spotService.getSpotStatistic(id);
        for(Map.Entry<Long, Double> entry : spotStatistic.entrySet()) {
            Long key = entry.getKey();
            Double value = entry.getValue();
            SpotStatisticResponse spotStatisticResponse = new SpotStatisticResponse();
            spotStatisticResponse.setId(key);
            spotStatisticResponse.setNumberOfHours(value);
            spotStatisticResponseList.add(spotStatisticResponse);

        }*/

        return spotStatisticResponseList;
    }



}
