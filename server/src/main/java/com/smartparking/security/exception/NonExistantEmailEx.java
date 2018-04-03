package com.smartparking.security.exception;

public class NonExistantEmailEx extends AuthorizationEx{
    public NonExistantEmailEx() {
        super();
    }
    public NonExistantEmailEx(String message) {
        super(message);
    }
    public NonExistantEmailEx(String message, Throwable cause) {
        super(message, cause);
    }
}
