package com.smartparking.model.filter;

import lombok.Data;

@Data
public class ProviderFilter {
    private String active;
    private String companyName;

    public ProviderFilter(String active, String companyName) {
        this.active = active;
        this.companyName = companyName;
    }
}