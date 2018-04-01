package com.smartparking.eventprocessor.element;

import com.smartparking.entity.Event;
import com.smartparking.eventprocessor.controller.MainController;
import org.springframework.batch.item.ItemReader;
import org.springframework.beans.factory.annotation.Autowired;

public class RequestItemReader implements ItemReader<Event> {

    @Autowired
    MainController mainController;


    @Override
    public Event read() {
        System.out.println("**********reader***********");
        if (!mainController.getEvents().isEmpty()) {
            return mainController.getEvents().remove(0);
        } else {
            return null;
        }
    }
}
