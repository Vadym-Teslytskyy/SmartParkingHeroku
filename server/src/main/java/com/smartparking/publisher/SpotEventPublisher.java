package com.smartparking.publisher;

import com.smartparking.config.constants.RabbitConstants;
import com.smartparking.entity.Spot;
import com.smartparking.model.event.SpotAddEvent;
import com.smartparking.model.event.SpotDeleteEvent;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SpotEventPublisher {

    @Autowired
    private AmqpTemplate amqpTemplate;

    public void publishSave(Spot spot) {
        if (spot.getId() == null) {
            publishAdd(spot);
        }
    }

    public void publishAdd(Spot spot) {
        SpotAddEvent event = new SpotAddEvent(spot.getId(), spot.getParking().getId());
        amqpTemplate.convertAndSend(RabbitConstants.SPOT_ADD_QUEUE, event);
    }

    public void publishDelete(Spot spot) {
        SpotDeleteEvent event = new SpotDeleteEvent(spot.getId());
        amqpTemplate.convertAndSend(RabbitConstants.SPOT_DELETE_QUEUE, event);
    }
}
