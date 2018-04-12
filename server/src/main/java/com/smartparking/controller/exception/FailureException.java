package com.smartparking.controller.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public class FailureException extends RuntimeException {

    @Getter
    private final HttpStatus status;

    @Getter
    private final Object body;

    public FailureException(HttpStatus status) {
        this(status, null);
    }

    public FailureException(HttpStatus status, Object body) {
        super(messageFromParameters(status, body));
        this.status = status;
        this.body = body;
    }

    public FailureException(HttpStatus status, Object body, Throwable cause) {
        super(messageFromParameters(status, body), cause);
        this.status = status;
        this.body = body;
    }

    private static String messageFromParameters(HttpStatus status, Object body) {
        return "status=" + status + (body != null ? ", body=" + body : null);
    }
}
