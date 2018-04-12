package com.smartparking.publisher;

import com.smartparking.config.constants.RabbitConstants;
import com.smartparking.entity.Parking;
import com.smartparking.model.event.ParkingAddEvent;
import com.smartparking.model.event.ParkingDeleteEvent;
import com.smartparking.model.event.ParkingTokenChangeEvent;
import com.smartparking.service.ParkingService;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ParkingEventPublisher {

    @Autowired
    private ParkingService parkingService;

    @Autowired
    private AmqpTemplate amqpTemplate;

    public void publishSave(Parking parking) {
        Long parkingId = parking.getId();
        if (parkingId != null) {
            if (checkTokenChanged(parking, parkingId)) {
                publishTokenChange(parking);
            }
        } else {
            publishAdd(parking);
        }
    }

    private boolean checkTokenChanged(Parking parking, Long parkingId) {
        return parkingService
                .findById(parkingId)
                .filter(p -> !p.getToken().equals(parking.getToken()))
                .isPresent();
    }

    public void publishAdd(Parking parking) {
        ParkingAddEvent event = new ParkingAddEvent(parking.getId(), parking.getToken());
        amqpTemplate.convertAndSend(RabbitConstants.PARKING_ADD_QUEUE, event);
    }

    public void publishDelete(Parking parking) {
        ParkingDeleteEvent event = new ParkingDeleteEvent(parking.getId());
        amqpTemplate.convertAndSend(RabbitConstants.PARKING_DELETE_QUEUE, event);
    }

    public void publishTokenChange(Parking parking) {
        ParkingTokenChangeEvent event = new ParkingTokenChangeEvent(parking.getId(), parking.getToken());
        amqpTemplate.convertAndSend(RabbitConstants.PARKING_TOKEN_CHANGE_QUEUE, event);
    }
}
