package com.smartparking.controller;

import com.smartparking.entity.Provider;
import com.smartparking.model.filter.ProviderFilter;
import com.smartparking.model.request.ProviderRequest;
import com.smartparking.model.response.ClientDetailResponse;
import com.smartparking.model.response.ClientItemResponse;
import com.smartparking.model.response.ProviderItemResponse;
import com.smartparking.service.ProviderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
public class ProviderController {

    private final ProviderService providerService;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProviderController.class);

    @Autowired
    public ProviderController(ProviderService providerService) {
        this.providerService = providerService;
    }

    @PostMapping("providers")
    ResponseEntity<List<ProviderItemResponse>> findAll(@RequestBody ProviderFilter providerFilter) {
        LOGGER.debug("Filtering by " + providerFilter.getActive() + " state and " + providerFilter.getCompanyName() +
                " company name.");
        List<Provider> providers = providerService.findAllByFilter(providerFilter);
        List<ProviderItemResponse> providerResponses = new ArrayList<>();
        providers.forEach(provider -> providerResponses.add(ProviderItemResponse.of(provider)));
        LOGGER.debug("Filtered providers response - " + providerResponses);
        return new ResponseEntity<>(providerResponses, HttpStatus.OK);
    }

    @GetMapping("providers/{id}")
    @SuppressWarnings("Convert2Diamond")
    ResponseEntity<?> find(@PathVariable Long id) {
        LOGGER.debug("Searching the provider with id " + id);
        return providerService.findByIdResponse(id)
                .map(provider -> new ResponseEntity<Object>(provider, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<Object>("Such provider wasn't found!", HttpStatus.BAD_REQUEST));
    }

    @PostMapping("/providers/save")
    ResponseEntity<?> save(@RequestBody ProviderRequest providerRequest) {
        LOGGER.debug("Received providerRequest with params: " + providerRequest.getId() + " " +
                providerRequest.getName() + " " +
                providerRequest.getCity() + " " +
                providerRequest.getStreet() + " " +
                providerRequest.getBuilding() + " " +
                providerRequest.isActive());
        providerService.save(providerRequest.toProvider());
        LOGGER.debug("Provider was saved.");
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
