package com.smartparking.config;

import com.smartparking.controller.exception.HttpStatusException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerConfig {

    @ExceptionHandler(HttpStatusException.class)
    public ResponseEntity<?> handleException(HttpStatusException e) {
        return ResponseEntity.status(e.getStatus()).body(e.getBody());
    }
}
