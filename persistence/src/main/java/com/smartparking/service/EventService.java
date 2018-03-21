package com.smartparking.service;

import com.smartparking.entity.Event;
import com.smartparking.repository.EventRepository;

import java.util.List;

public interface EventService extends Service<Event, Long, EventRepository> {
    Event findBySpotId(Long spotId);
    void insertListEvents(List<Event> events);
}
