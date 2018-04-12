package com.smartparking.repository;

import com.smartparking.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ProviderRepository extends JpaRepository<Provider, Long> {

    @Query("SELECT p from Provider p join p.employees em where em.id=?1")
    Optional<Provider> findProviderByClientId(Long id);

    Integer countProviderByActive(Boolean active);

    Integer countProviderBy();

    @Query("SELECT provider FROM Provider provider JOIN provider.parkings parking where parking.id=:parkingId")
    Optional<Provider> findByParkingId(@Param("parkingId") Long parkingId);

}