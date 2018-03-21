package com.smartparking.realtimeserver.controller;

import com.smartparking.entity.Event;
import com.smartparking.entity.EventMarker;
import com.smartparking.entity.Parking;
import com.smartparking.entity.Spot;
import com.smartparking.service.ParkingService;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class MainController {

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
    public ResponseEntity processingInRequests(@RequestParam String id,
                                               @RequestParam String parkingToken,
                                               @RequestParam String currentEvent) {

        System.out.println(id);
        System.out.println(parkingToken);
        System.out.println(currentEvent);

        Long spotId = null;
        EventMarker eventMarker = null;
        if (id != null && currentEvent != null) {
            try {
                spotId = Long.valueOf(id);
            } catch (IllegalArgumentException e) {
                return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        if (currentEvent.equals("0")) {
            eventMarker = EventMarker.ARRIVED;
        } else if (currentEvent.equals("1")) {
            eventMarker = EventMarker.DEPARTUDED;
        } else {
            eventMarker = EventMarker.BLOCK;
        }

        if (tokens.containsValue(parkingToken)) {
            if (!spots.get(spotId).getParking().getToken().equals(parkingToken)) {
                return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        System.out.println(id);
        System.out.println(parkingToken);
        System.out.println(spots.get(spotId).getId());

        Spot spot = spots.get(spotId);
        if (spot != null && tokens.containsValue(parkingToken)) {
            events.add(new Event(spot, LocalDateTime.now().toInstant(ZoneOffset.UTC), eventMarker));
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    public List<Event> getEvents() {
        return events;
    }

    public Map<Long, Spot> getSpots() {
        return spots;
    }

}