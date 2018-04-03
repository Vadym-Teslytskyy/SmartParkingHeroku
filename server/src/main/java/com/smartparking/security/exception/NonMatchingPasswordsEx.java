package com.smartparking.security.exception;

public class NonMatchingPasswordsEx extends AuthorizationEx {
    public NonMatchingPasswordsEx() {
        super();
    }
    public NonMatchingPasswordsEx(String message) {
        super(message);
    }
    public NonMatchingPasswordsEx(String message, Throwable cause) {
        super(message, cause);
    }
}
