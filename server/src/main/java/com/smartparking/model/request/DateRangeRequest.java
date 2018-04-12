package com.smartparking.model.request;


import lombok.Data;


@Data
public class DateRangeRequest {
    private String beginDate;
    private String endDate;

    public String getBeginDate() {
        return beginDate;
    }

    public String getEndDate() {
        return endDate;
    }
}
