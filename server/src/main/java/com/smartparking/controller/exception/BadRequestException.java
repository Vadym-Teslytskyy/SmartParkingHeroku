package com.smartparking.controller.exception;

import org.springframework.http.HttpStatus;

public class BadRequestException extends HttpStatusException {

    public BadRequestException() {
        super(HttpStatus.BAD_REQUEST);
    }

    public BadRequestException(Object body) {
        super(HttpStatus.BAD_REQUEST, body);
    }

    public BadRequestException(Object body, Throwable cause) {
        super(HttpStatus.BAD_REQUEST, body, cause);
    }
}
