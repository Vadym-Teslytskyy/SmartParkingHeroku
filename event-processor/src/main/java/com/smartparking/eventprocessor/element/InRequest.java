package com.smartparking.eventprocessor.element;

import com.smartparking.entity.Event;
import com.smartparking.entity.EventMarker;
import com.smartparking.eventprocessor.controller.MainController;
import org.springframework.beans.factory.annotation.Autowired;

public class InRequest {
    private Long spotId;
    @Autowired
    MainController mainController;
    private String parkingToken;
    private int currentEvent;

    public InRequest() {
    }

    public InRequest(Long spotId, String parkingToken, int currentEvent) {
        this.spotId = spotId;
        this.parkingToken = parkingToken;
        this.currentEvent = currentEvent;
    }

    public Long getSpotId() {
        return spotId;
    }

    public void setSpotId(Long spotId) {
        this.spotId = spotId;
    }

    public String getParkingToken() {
        return parkingToken;
    }

    public void setParkingToken(String parkingToken) {
        this.parkingToken = parkingToken;
    }

    public int getCurrentEvent() {
        return currentEvent;
    }

    public void setCurrentEvent(int currentEvent) {
        this.currentEvent = currentEvent;
    }

    @Override
    public String toString() {
        return "InRequest{" +
                "spotId=" + spotId +
                ", parkingToken='" + parkingToken + '\'' +
                ", currentEvent=" + currentEvent +
                '}';
    }

    public Event toEvent() {
        Event event = new Event();

        if (currentEvent == 0) {
            event.setEventMarker(EventMarker.ARRIVED);
        } else if (currentEvent == 1) {
            event.setEventMarker(EventMarker.DEPARTUDED);
        } else if (currentEvent == 2) {
            event.setEventMarker(EventMarker.BLOCK);
        } else {
            return null;
        }

        event.setCurrentEventTime();
        return event;
    }
}
