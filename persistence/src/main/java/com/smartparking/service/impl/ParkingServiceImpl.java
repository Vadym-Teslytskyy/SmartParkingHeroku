package com.smartparking.service.impl;

import com.smartparking.entity.Parking;
import com.smartparking.repository.ParkingRepository;
import com.smartparking.service.AbstractService;
import com.smartparking.service.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParkingServiceImpl extends AbstractService<Parking, Long, ParkingRepository> implements ParkingService {

    protected ParkingServiceImpl(@Autowired ParkingRepository repository) {
        super(repository);
    }

    @Override
    public List<Parking> findAllByProviderId(Long id) {
        return getRepository().findAllByProviderId(id);
    }
}
