package com.smartparking.realtimeserver.element;

import java.time.Instant;

public class InRequest {
    private Long spotId;
    private String token;
    private Instant currentTime;

    public InRequest(Long spotId, String token, Instant currentTime) {
        this.spotId = spotId;
        this.token = token;
        this.currentTime = currentTime;
    }

    public Long getSpotId() {
        return spotId;
    }

    public void setSpotId(Long spotId) {
        this.spotId = spotId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Instant getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(Instant currentTime) {
        this.currentTime = currentTime;
    }
}
