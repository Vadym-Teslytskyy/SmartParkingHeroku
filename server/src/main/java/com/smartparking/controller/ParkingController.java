package com.smartparking.controller;


import com.smartparking.controller.exception.BadRequestException;
import com.smartparking.entity.Parking;
import com.smartparking.model.request.ParkingNearbyRequest;
import com.smartparking.model.request.ParkingRequest;
import com.smartparking.model.response.ParkingDetailResponse;
import com.smartparking.model.response.ParkingResponse;
import com.smartparking.model.response.ParkingWithSpotsResponse;
import com.smartparking.publisher.ParkingEventPublisher;
import com.smartparking.service.ParkingService;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ParkingController {

    @Autowired
    private ParkingService parkingService;

    @Autowired
    private SpotService spotService;

    @Autowired
    private ParkingService addressService;

    @Autowired
    private ParkingEventPublisher parkingEventPublisher;

    @RequestMapping("parkings-nearby")
    public List<ParkingResponse> parkingsNearby(@ModelAttribute ParkingNearbyRequest request) {
        if (request.getRadius() < 0) {
            throw new BadRequestException("Radius must be positive or zero.");
        }
        return parkingService.findAllNearbyResponse(request);
    }

    @RequestMapping("parkingdetail/{id}")
    public ParkingDetailResponse findParkingDetailResponseById(@PathVariable Long id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Parking parking = parkingService.findById(id).orElse(null);
        ParkingDetailResponse parkingDetailResponse = ParkingDetailResponse.of(parking);
        if (auth == null){
            parkingDetailResponse.setIsFavorite(false);
        }else {
            String email = SecurityContextHolder.getContext().getAuthentication().getName();
            parkingDetailResponse.setIsFavorite(
                    parkingService.isFavorite(email, id));
            if (parkingDetailResponse.getIsFavorite()){
                parkingDetailResponse.setFavoriteName(
                        parkingService.findFavoriteNameByEmailAndParkingId(email,id));
            }
        }
        parkingDetailResponse.setSpotsCount(
                spotService.countAllSpotsByParkingId(id)
        );
        parkingDetailResponse.setAvailableSpotsCount(
                spotService.countAvailableSpotsByParkingId(id)
        );
        return parkingDetailResponse;

    }

    @GetMapping("manager-configuration/parking/{id}")
    public ResponseEntity<?> configure(@PathVariable Long id) {
        return parkingService.findByIdResponse(id)
                .map(parking -> new ResponseEntity<Object>(parking, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<Object>("Incorrect parking id", HttpStatus.BAD_REQUEST));
    }

    @GetMapping("manager-configuration/parkings")
    public ResponseEntity<List<ParkingResponse>> parkings() {
        return new ResponseEntity<>(parkingService.findAllByProviderIdResponse(1L), HttpStatus.OK);
    }

    @PostMapping("/manager-configuration/parking/save")
    public ResponseEntity<?> save(@RequestBody ParkingRequest parkingRequest) {
        Parking parking = parkingRequest.toParking();
        parkingService.save(parking);
        parkingEventPublisher.publishSave(parking);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/manager-configuration/parking/delete")
    public ResponseEntity<?> delete(@RequestBody ParkingRequest parkingRequest) {
        final Parking parking = parkingRequest.toParking();
        parkingService.delete(parking);
        parkingEventPublisher.publishDelete(parking);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/parkings-with-spots")
    public List<ParkingWithSpotsResponse> parkingWithSpots() {
        return parkingService.findAllWithSpotsResponse();
    }
}