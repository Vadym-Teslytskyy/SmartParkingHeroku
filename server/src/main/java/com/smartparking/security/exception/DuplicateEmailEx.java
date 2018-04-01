package com.smartparking.security.exception;

public class DuplicateEmailEx extends AuthorizationEx{
    public DuplicateEmailEx() {
        super();
    }
    public DuplicateEmailEx(String message) {
        super(message);
    }
    public DuplicateEmailEx(String message, Throwable cause) {
        super(message, cause);
    }
}
