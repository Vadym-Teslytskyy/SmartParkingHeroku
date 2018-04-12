package com.smartparking.repository;

import com.smartparking.entity.Spot;
import com.smartparking.model.response.SpotStatisticResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Map;

public interface SpotStatisticRepository {


    public List<SpotStatisticResponse> getSpotStatistic(long id, long startDate, long endDate);

}
