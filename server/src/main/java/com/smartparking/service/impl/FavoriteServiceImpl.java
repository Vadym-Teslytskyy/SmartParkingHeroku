package com.smartparking.service.impl;

import com.smartparking.entity.Favorite;
import com.smartparking.entity.Parking;
import com.smartparking.model.response.ParkingDetailResponse;
import com.smartparking.repository.FavoriteRepository;
import com.smartparking.service.AbstractService;
import com.smartparking.service.FavoriteService;
import com.smartparking.service.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavoriteServiceImpl extends AbstractService<Favorite, Long, FavoriteRepository> implements FavoriteService {

    @Autowired
    ParkingService parkingService;

    protected FavoriteServiceImpl(@Autowired FavoriteRepository repository) {
        super(repository);
    }

    @Override
    public Long getCountByClientId(Long id) {
        return repository.getCountByClientId(id);
    }

    @Override
    public Favorite findFavoriteByClientEmailAndParkingId(String email, Long parkingId) {
        return getRepository().findFavoriteByClientEmailAndParkingId(email, parkingId);
    }

    @Override
    public List<ParkingDetailResponse> findFavoritesDetailByClientId(String clientEmail) {
        List<Parking> parkings = getRepository().findFavoritesDetailByClientId(clientEmail);
        List<ParkingDetailResponse> parkingDetailResponses = new ArrayList<>();
        parkings.forEach(parking -> {
            ParkingDetailResponse p = ParkingDetailResponse.of(parking);
            p.setIsFavorite(true);
            p.setFavoriteName(parkingService.findFavoriteNameByEmailAndParkingId(clientEmail, p.getId()));
            parkingDetailResponses.add(p);
        });
        return parkingDetailResponses;
    }
}
