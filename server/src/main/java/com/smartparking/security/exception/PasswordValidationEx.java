package com.smartparking.security.exception;

public class PasswordValidationEx extends AuthorizationEx{
    public PasswordValidationEx() {
        super();
    }
    public PasswordValidationEx(String message) {
        super(message);
    }
    public PasswordValidationEx(String message, Throwable cause) {
        super(message, cause);
    }
}
