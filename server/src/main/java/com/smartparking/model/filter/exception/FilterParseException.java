package com.smartparking.model.filter.exception;

public class FilterParseException extends RuntimeException {

    private final String property;

    public FilterParseException(String property) {
        this.property = property;
    }

    public FilterParseException(String message, String property) {
        super(message);
        this.property = property;
    }

    public FilterParseException(String message, Throwable cause, String property) {
        super(message, cause);
        this.property = property;
    }

    public FilterParseException(Throwable cause, String property) {
        super(cause);
        this.property = property;
    }

    public FilterParseException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, String property) {
        super(message, cause, enableSuppression, writableStackTrace);
        this.property = property;
    }

    public String getProperty() {
        return property;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append(getClass().getName()).append(": property=").append(property);
        String message = getLocalizedMessage();
        if (message != null) {
            builder.append(" message=").append(message);
        }
        return builder.toString();
    }
}
