package com.smartparking.model.response;
import lombok.Data;


@Data
public class SpotStatisticResponse {
    private long id;
    private double numberOfHours;
    private long numberOfEvents;



    public SpotStatisticResponse(long id, double numberOfHours, long numberOfEvent) {
        this.id = id;
        this.numberOfHours = numberOfHours;
        this.numberOfEvents = numberOfEvent;
    }

    @Override
    public String toString() {
        return "SpotStatisticResponse{" +
                "id=" + id +
                ", numberOfHours=" + numberOfHours +
                ", numberOfEvent=" + numberOfEvents +
                '}';
    }
}
