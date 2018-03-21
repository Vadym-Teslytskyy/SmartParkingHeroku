package com.smartparking.repository;

import com.smartparking.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProviderRepository extends JpaRepository<Provider, Long> {

    @Query("SELECT p from Provider p join p.employees em where em.id=?1")
    Provider findProviderByClientId(Long id);

}