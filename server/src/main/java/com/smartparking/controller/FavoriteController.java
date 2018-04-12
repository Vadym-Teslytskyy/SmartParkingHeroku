package com.smartparking.controller;

import com.smartparking.entity.Client;
import com.smartparking.entity.Favorite;
import com.smartparking.entity.Parking;
import com.smartparking.model.request.FavoriteRequest;
import com.smartparking.model.response.InfoResponse;
import com.smartparking.service.ClientService;
import com.smartparking.service.FavoriteService;
import com.smartparking.service.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FavoriteController {

    @Autowired
    ParkingService parkingService;

    @Autowired
    FavoriteService favoriteService;

    @Autowired
    ClientService clientService;

    @PostMapping("parkingdetail/{id}/savetofavorites")
    ResponseEntity<?> saveToFavorites(@RequestBody FavoriteRequest favoriteRequest, @PathVariable Long id) {
        Parking parking = parkingService.findById(id).orElse(null);
        Client client = clientService.findOne(
                SecurityContextHolder.getContext().getAuthentication().getName());
        Boolean isFavorite = parkingService.isFavorite(client.getEmail(), id);
        if (!isFavorite){
        favoriteService.save(favoriteRequest.toFavorite(client, parking));
            return ResponseEntity.status(HttpStatus.OK).body(new InfoResponse("Parking was added to favorites"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new InfoResponse("Parking is already in favorites"));
        }
    }

    @PostMapping("parkingdetail/{id}/deletefromfavorites")
    ResponseEntity<?> deleteFromFavorites(@PathVariable Long id){
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Favorite favorite = favoriteService.findFavoriteByClientEmailAndParkingId(email, id);
        favoriteService.delete(favorite);
        return ResponseEntity.status(HttpStatus.OK).body(new InfoResponse("Parking was deleted from favorites"));
    }

}
