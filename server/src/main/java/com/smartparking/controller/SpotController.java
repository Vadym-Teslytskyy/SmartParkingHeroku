package com.smartparking.controller;

import com.smartparking.dto.SpotDto;
import com.smartparking.entity.Spot;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SpotController {

    @Autowired
    SpotService spotService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("parkingdetail/{id}/spots")
    List<SpotDto> findAllSpotsDto (@PathVariable Long id){
        List<Spot> allSpots = spotService.findAllSpotsByParkingId(id);
        List<Spot> freeSpots = spotService.findAllAvailableSpotsByParkingId(id);
        List<SpotDto> spotDtoList = new ArrayList<>();
        for (Spot spot : allSpots) {
            SpotDto spotDto = new SpotDto();
            spotDto.setId(spot.getId());
            spotDto.setIsFree(freeSpots.contains(spot));
            spotDtoList.add(spotDto);
        }
        return spotDtoList;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("parkingdetail/{id}/freespots")
    List<SpotDto> findAvailableSpotsDto (@PathVariable Long id){
        List<Spot> freeSpots = spotService.findAllAvailableSpotsByParkingId(id);
        List<SpotDto> spotDtoList = new ArrayList<>();
        for (Spot spot : freeSpots) {
            SpotDto spotDto = new SpotDto();
            spotDto.setId(spot.getId());
            spotDto.setIsFree(true);
            spotDtoList.add(spotDto);
        }
        return spotDtoList;
    }
}
