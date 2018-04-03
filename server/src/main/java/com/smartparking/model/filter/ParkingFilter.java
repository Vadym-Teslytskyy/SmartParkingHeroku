package com.smartparking.model.filter;

import com.smartparking.model.filter.exception.FilterParseException;
import com.smartparking.model.request.ParkingFilterRequest;
import lombok.Data;

@Data
public class ParkingFilter {

    private Double latitude;
    private Double longitude;
    private Double radius;

    public ParkingFilter(Double latitude, Double longitude, Double radius) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.radius = radius;
    }

    /**
     * Create new instance from request.
     *
     * @param request not null instance with preset or not preset fields.
     * @return new <code>ParkingFilter</code> based on <code>ParkingFilterRequest</code>.
     * @throws FilterParseException when some field in <code>request</code> can`t be parsed in <code>double</code>.
     */
    public static ParkingFilter of(ParkingFilterRequest request) throws FilterParseException {
        return new ParkingFilter(
                parseProperty("latitude", request.getLatitude()),
                parseProperty("longitude", request.getLongitude()),
                parseProperty("radius", request.getRadius()));
    }

    private static Double parseProperty(String propertyName, String propertyValue) {
        try {
            return Double.valueOf(propertyValue);
        } catch (NumberFormatException ex) {
            throw new FilterParseException(ex, propertyName);
        }
    }
}
