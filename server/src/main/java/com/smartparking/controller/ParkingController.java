package com.smartparking.controller;


import com.smartparking.entity.Parking;
import com.smartparking.model.request.ParkingRequest;
import com.smartparking.model.response.ManagerParkingResponse;
import com.smartparking.model.response.ParkingDetailResponse;
import com.smartparking.model.response.ParkingItemResponse;
import com.smartparking.service.ParkingService;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("parkings")
    List<ParkingItemResponse> parkings() {
        return ParkingItemResponse.listOf(parkingService.findAll());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("parkingdetail/{id}")
    ParkingDetailResponse findParkingDetailResponseById(@PathVariable Long id) {
        Parking parking = parkingService.findById(id);
        ParkingDetailResponse parkingDetailResponse = ParkingDetailResponse.of(parking);
        parkingDetailResponse.setNumberSpots(
                spotService.countAllSpotsByParkingId(id)
        );
        parkingDetailResponse.setNumberAvailableSpots(
                spotService.countAvailableSpotsByParkingId(id)
        );
        return parkingDetailResponse;
    }

    // TODO Change url to manager-configuration/parking/{id}

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("manager-parkings-configure/{id}")
    ResponseEntity<ManagerParkingResponse> managerParkingConfigure(@PathVariable Long id) {
        Parking parking = parkingService.findById(id);
        if (parking != null) {
            return new ResponseEntity<>(ManagerParkingResponse.of(parking), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/manager-parkings-configure/save")
    ResponseEntity<?> save(@RequestBody ParkingRequest parkingRequest) {
        parkingService.save(parkingRequest.toParking());

//        if (providerRequest.getName() != "" && providerRequest.getState() != "" &&
//                providerRequest.getCity() != "" && providerRequest.getStreet() != "" &&
//                providerRequest.getBuildingNumber() != "") {
//            providerService.saveFromRequest(providerRequest);
//            return new ResponseEntity(HttpStatus.OK);
//        } else {
//            return new ResponseEntity(HttpStatus.NO_CONTENT.valueOf("Bad data input."));
//        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}