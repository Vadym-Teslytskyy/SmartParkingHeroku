package com.smartparking.controller;


import com.smartparking.entity.Parking;
import com.smartparking.model.request.ParkingRequest;
import com.smartparking.model.response.ParkingDetailResponse;
import com.smartparking.model.response.ParkingResponse;
import com.smartparking.service.ParkingService;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ParkingController {

    @Autowired
    ParkingService parkingService;

    @Autowired
    SpotService spotService;

    @Autowired
    ParkingService addressService;

    @RequestMapping("parkings-nearby")
    public ResponseEntity<?> parkingsNearby(@RequestParam("latitude") Double latitude,
                                            @RequestParam("longitude") Double longitude,
                                            @RequestParam("radius") Double radius) {
        if (radius < 0) {
            return new ResponseEntity<>("Radius must be positive or zero.", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(parkingService.findAllNearbyResponse(latitude, longitude, radius), HttpStatus.OK);
    }

    @RequestMapping("parkingdetail/{id}")
    ParkingDetailResponse findParkingDetailResponseById(@PathVariable Long id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Parking parking = parkingService.findById(id);
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

    // TODO Change url to manager-configuration/parking/{id}

    @GetMapping("manager-configuration/parking/{id}")
    ResponseEntity<?> configure(@PathVariable Long id) {
        return parkingService.findByIdResponse(id)
                .map(parking -> new ResponseEntity<Object>(parking, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<Object>("Incorrect parking id", HttpStatus.BAD_REQUEST));
    }

    @GetMapping("manager-configuration/parkings")
    ResponseEntity<List<ParkingResponse>> parkings() {
        return new ResponseEntity<>(parkingService.findAllByProviderIdResponse(1L), HttpStatus.OK);
    }

    @PostMapping("/manager-configuration/parking/save")
    ResponseEntity<?> save(@RequestBody ParkingRequest parkingRequest) {
        parkingService.save(parkingRequest.toParking());
        //TODO Handle different HttpStatuses.
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/manager-configuration/parking/delete")
    ResponseEntity<?> delete(@RequestBody ParkingRequest parkingRequest) {
        parkingService.delete(parkingRequest.toParking());
        //TODO Handle different HttpStatuses.
        return new ResponseEntity<>(HttpStatus.OK);
    }
}