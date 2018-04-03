package com.smartparking.eventprocessor.element;

import com.smartparking.entity.Event;
import com.smartparking.service.EventService;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class RequestItemWriter implements ItemWriter<Event> {

    @Autowired
    EventService eventService;

    @Override
    public void write(List<? extends Event> list) throws Exception {
        System.out.println("**********writer***********");
        eventService.insertListEvents((List<Event>) list);

    }
}
