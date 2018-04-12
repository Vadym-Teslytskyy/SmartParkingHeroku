package com.smartparking.controller;

import com.smartparking.entity.Event;
import com.smartparking.model.request.VerifiedEventRequest;
import com.smartparking.service.EventService;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.amqp.RabbitProperties;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class EventController {

    @Autowired
    private EventService eventService;

    @Autowired
    AmqpTemplate amqpTemplate;

    @Autowired
    RabbitProperties rabbitProperties;

    @PostMapping("/events/save")
    private void saveEvents(@RequestBody List<VerifiedEventRequest> requests) {
        List<Event> events = requests.stream()
                .map(VerifiedEventRequest::toEvent)
                .collect(Collectors.toList());
        eventService.saveAll(events);
    }
}
