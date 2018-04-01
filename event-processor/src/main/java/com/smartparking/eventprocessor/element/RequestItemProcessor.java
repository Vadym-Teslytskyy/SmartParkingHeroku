package com.smartparking.eventprocessor.element;

import com.smartparking.entity.Event;
import com.smartparking.eventprocessor.controller.MainController;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.beans.factory.annotation.Autowired;

public class RequestItemProcessor implements ItemProcessor<Event, Event> {

    @Autowired
    MainController mainController;

    @Override
    public Event process(Event event) throws Exception {
        System.out.println("**********processor***********");
//        Map<Long, Spot> spots = mainController.getSpots();
//        boolean updateEvent = false;
//        List<Event> events = new ArrayList<>();
//
//        Event event = new Event();
//        event.setSpot(inRequest.getSpot());
//        event.setEventMarker(inRequest.getEventMarker());
//        event.setCurrentEventTime();
//        while (inRequests.size()>0) {
//            for (Event event : events) {
//                if (event.getSpot().getId() == inRequests.get(0).getSpotId() &&
//                        event.getDepartureTime() == null) {
//                    event.setDepartureTime(inRequests.remove(0).getCurrentTime());
//                    updateEvent = true;
//                }
//            }
//            if (!updateEvent){
//                Event event = new Event();
//                event.setSpot(spots.get(inRequests.get(0)));
//                event.setArrivalTime(inRequests.remove(0).getCurrentTime());
//                events.add(event);
//                updateEvent = false;
//            }
//            System.out.println("/////////////////////////////////");
//        }
//        inRequests.clear();
        return event;
    }
}
