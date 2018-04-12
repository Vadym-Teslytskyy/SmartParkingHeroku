package com.smartparking.entity;

import lombok.NonNull;

public enum EventType {
    ARRIVE, DEPARTURE, BLOCK;

    public static EventType valueOf(@NonNull Integer ordinal) {
        return values()[ordinal];
    }
}
