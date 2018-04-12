package com.smartparking.service.impl;


import com.smartparking.entity.Provider;
import com.smartparking.model.filter.ProviderFilter;
import com.smartparking.model.request.ProviderRequest;
import com.smartparking.model.response.ProviderResponse;
import com.smartparking.repository.ProviderFilterRepository;
import com.smartparking.repository.ProviderRepository;
import com.smartparking.service.AbstractService;
import com.smartparking.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProviderServiceImpl extends AbstractService<Provider, Long, ProviderRepository> implements ProviderService {

    @Autowired
    private ProviderFilterRepository providerFilterRepository;

    protected ProviderServiceImpl(@Autowired ProviderRepository repository) {
        super(repository);
    }

    @Override
    @Transactional
    public void saveFromRequest(ProviderRequest providerRequest) {
        Provider provider = new Provider();
        provider.setName(providerRequest.getName());
        provider.setActive(true);
        provider.setCity(providerRequest.getCity());
        provider.setStreet(providerRequest.getStreet());
        provider.setBuilding(providerRequest.getBuilding());
        getRepository().save(provider);
    }

    @Override
    public Optional<ProviderResponse> findProviderByClientId(Long id) {
        return getRepository().findProviderByClientId(id).map(ProviderResponse::of);
    }

    @Override
    public Optional<Provider> findByParkingId(Long parkingId) {
        return getRepository().findByParkingId(parkingId);
    }

    @Override
    public Optional<ProviderResponse> findByIdResponse(Long id) {
        return getRepository().findById(id).map(ProviderResponse::of);
    }

    @Override
    public List<Provider> findAllByFilter(ProviderFilter providerFilter) {
        return providerFilterRepository.findAllByFilter(providerFilter);
    }

}
