package com.smartparking.controller.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public class HttpStatusException extends RuntimeException {

    @Getter
    private final HttpStatus status;

    @Getter
    private final Object body;

    public HttpStatusException(HttpStatus status) {
        this(status, null);
    }

    public HttpStatusException(HttpStatus status, Object body) {
        super(messageFromParameters(status, body));
        this.status = status;
        this.body = body;
    }

    public HttpStatusException(HttpStatus status, Object body, Throwable cause) {
        super(messageFromParameters(status, body), cause);
        this.status = status;
        this.body = body;
    }

    private static String messageFromParameters(HttpStatus status, Object body) {
        return "status=" + status + (body != null ? ", body=" + body : null);
    }
}
