package com.smartparking.model.request;

import lombok.Data;

@Data
public class ProviderStatisticRequest {
    private String activeAmount;
    private String nonactiveAmount;
    private String allAmount;
}
