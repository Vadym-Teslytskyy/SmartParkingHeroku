package com.smartparking.security.exception;

public class SecurityEx extends Exception {
    public SecurityEx() {
        super();
    }
    public SecurityEx(String message) {
        super(message);
    }
    public SecurityEx(String message, Throwable cause) {
        super(message, cause);
    }
}
