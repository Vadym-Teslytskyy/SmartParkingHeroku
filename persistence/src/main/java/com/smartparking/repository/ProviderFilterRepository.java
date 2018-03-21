package com.smartparking.repository;

import com.smartparking.entity.Provider;
import com.smartparking.model.filter.ProviderFilter;

import java.util.List;

public interface ProviderFilterRepository {
    List<Provider> findAllByFilter(ProviderFilter providerFilter);
}
