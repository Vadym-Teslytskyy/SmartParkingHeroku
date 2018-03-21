package com.smartparking.controller;

import com.smartparking.entity.Provider;
import com.smartparking.model.filter.ProviderFilter;
import com.smartparking.model.request.ProviderRequest;
import com.smartparking.model.response.ProviderDetailResponse;
import com.smartparking.model.response.ProviderItemResponse;
import com.smartparking.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProviderController {

    @Autowired
    private ProviderService providerService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("providers")
    List<ProviderItemResponse> findAll(@RequestParam String active,
                                       @RequestParam String companyName) {
        ProviderFilter providerFilter = new ProviderFilter();
        providerFilter.setActive(active);
        providerFilter.setCompanyName(companyName);
        List<Provider> providers = providerService.findAllByFilter(providerFilter);
        List<ProviderItemResponse> providerResponses = new ArrayList<>();
        for (Provider provider : providers) {
            providerResponses.add(ProviderItemResponse.of(provider));
        }
        return providerResponses;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("providers/{id}")
    ProviderDetailResponse find(@PathVariable Long id) {
        Provider provider = providerService.findById(id);
        System.out.println(id);
        return ProviderDetailResponse.of(provider);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("providers/changeState/{id}")
    ProviderDetailResponse changeState(@PathVariable Long id) {
        return ProviderDetailResponse.of(providerService.changeState(id));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/providers/add")
    ResponseEntity<?> save(@RequestBody ProviderRequest providerRequest) {
        if (!(providerRequest.getName().equals("") && providerRequest.getCity().equals("")
                && providerRequest.getStreet().equals("")
                && providerRequest.getBuilding().equals(""))) {
            providerService.saveFromRequest(providerRequest);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Bad data input.", HttpStatus.NO_CONTENT);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/providers/add/{id}")
    ResponseEntity<?> update(@PathVariable Long id, @RequestBody ProviderRequest providerRequest) {
        Provider provider = providerService.findById(id);
        provider.setName(providerRequest.getName());
        provider.setCity(providerRequest.getCity());
        provider.setStreet(providerRequest.getStreet());
        provider.setBuilding(providerRequest.getBuilding());
        providerService.save(provider);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
