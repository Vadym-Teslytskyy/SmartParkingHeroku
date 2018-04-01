package com.smartparking.eventprocessor.controller;

import com.smartparking.entity.Event;
import com.smartparking.entity.Parking;
import com.smartparking.entity.Spot;
import com.smartparking.eventprocessor.element.InRequest;
import com.smartparking.service.ParkingService;
import com.smartparking.service.SpotService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class MainController {
    private Logger LOGGER = LoggerFactory.getLogger(MainController.class);

    private Map<Long, String> tokens;
    private List<Event> events = new LinkedList<>();
    private Map<Long, Spot> spots;

    @Autowired
    private ParkingService parkingService;

    @Autowired
    private SpotService spotService;

    @PostConstruct
    public void init() {
        tokens = parkingService.findAll().stream()
                .collect(Collectors.toMap(Parking::getId, Parking::getToken));
        spots = spotService.findAll().stream()
                .collect(Collectors.toMap(Spot::getId, s -> s));
    }

    @RequestMapping("parking/update")
    public ResponseEntity parkingUpdated(@RequestParam Long parkingId) {
        String token;
        token = parkingService.findById(parkingId).getToken();
        if (token == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        } else {
            tokens.put(parkingId, token);
            return new ResponseEntity(HttpStatus.OK);
        }
    }

    @RequestMapping("spot/add")
    public ResponseEntity spotUpdate(@RequestParam Long spotId) {
        Spot spot = spotService.findById(spotId);
        if (spot == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        } else {
            spots.put(spotId, spot);
            return new ResponseEntity(HttpStatus.OK);
        }
    }




    @RequestMapping(value = "spot/update", method = RequestMethod.POST)
    public ResponseEntity processingInRequests(@RequestBody InRequest inRequest) {
        Event event = inRequest.toEvent();
        if (event != null && tokenIsValid(inRequest, event)) {
            events.add(event);
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }

    private boolean tokenIsValid(InRequest inRequest, Event event) {
        Spot spot = spots.get(inRequest.getSpotId());
        if (spot != null && tokens.containsValue(inRequest.getParkingToken())) {
            event.setSpot(spot);
            return true;
        } else {
            return false;
        }

    }

    public List<Event> getEvents() {
        return events;
    }

    public Map<Long, Spot> getSpots() {
        return spots;
    }

}