package com.smartparking.service.impl;

import com.smartparking.entity.Parking;
import com.smartparking.entity.Spot;
import com.smartparking.model.response.SpotStatisticResponse;
import com.smartparking.repository.SpotRepository;
import com.smartparking.repository.SpotStatisticRepository;
import com.smartparking.service.AbstractService;
import com.smartparking.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class SpotServiceImpl extends AbstractService<Spot, Long, SpotRepository> implements SpotService {

    @Autowired
    private SpotStatisticRepository spotStatisticRepository;

    protected SpotServiceImpl(@Autowired SpotRepository spotRepository) {
        super(spotRepository);
    }

    @Override
    public List<Spot> findAllAvailableSpotsByParkingId(Long id) {
        System.out.println(repository.findAllAvailableSpotsByParkingId(id));
        return repository.findAllAvailableSpotsByParkingId(id);
    }

    @Override
    public Long countAvailableSpotsByParkingId(Long id) {
        return repository.countAvailableSpotsByParkingId(id);
    }

    @Override
    public Long countAllSpotsByParkingId(Long id) {
        return repository.countAllSpotsByParkingId(id);
    }

    @Override
    public List<Spot> findAllSpotsByParkingId(Long id) {
        return repository.findAllByParkingId(id);
    }

    @Override
    public List<Parking> findBestParkings(String city, String street, Instant date) {
        return repository.findBestParkings(city, street, date);
    }

    @Override
    public List<Parking> findBestParkingsInTheCity(String city, Instant date) {
        return repository.findBestParkingsInTheCity(city, date);
    }

    @Override
    public List<SpotStatisticResponse> getSpotStatistic(long id, long startDate, long endDate) {
        return spotStatisticRepository.getSpotStatistic(id, startDate, endDate);
    }
}
