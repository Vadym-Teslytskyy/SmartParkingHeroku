package com.smartparking.repository;

import com.smartparking.entity.Spot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Map;

public interface SpotStatisticRepository {


    Map<Long, Double> getSpotStatistic(long id);

}
