package com.smartparking.service;

import com.smartparking.entity.Event;
import com.smartparking.repository.EventRepository;

public interface EventService extends Service<Event, Long, EventRepository> {
    Event findBySpotId(Long spotId);
}
