package com.smartparking.service;

import com.smartparking.entity.Provider;
import com.smartparking.model.filter.ProviderFilter;
import com.smartparking.repository.ProviderRepository;
import com.smartparking.model.request.ProviderRequest;

import java.util.List;

public interface ProviderService extends Service<Provider, Long, ProviderRepository> {
    void saveFromRequest(ProviderRequest providerRequest);

    Provider changeState(Long id);

    List<Provider> findAllByFilter(ProviderFilter providerFilter);

    Provider findProviderByClientId(Long id);
}
