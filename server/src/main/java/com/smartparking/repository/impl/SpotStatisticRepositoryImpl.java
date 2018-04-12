package com.smartparking.repository.impl;



import com.smartparking.model.response.SpotStatisticResponse;
import com.smartparking.repository.SpotStatisticRepository;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.*;

@Repository
public class SpotStatisticRepositoryImpl implements SpotStatisticRepository {

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public List<SpotStatisticResponse> getSpotStatistic(long id, long startDate, long endDate)
    {
        Date startTime = new Date(startDate);
        Date endTime = new Date(endDate);
        String sql = "SELECT  spot.id  \n" +
                ",(sum(CASE WHEN event.eventType = 1 THEN timestamp ELSE 0 END) \n" +
                "-\n" +
                "sum(CASE WHEN event.eventType = 0 THEN timestamp ELSE 0 END))/10000\n" +
                "AS NumberOfhours, \n" +
                "COUNT(case event_marker when '0' then 1 else null end) \n" +
                "as NumberOfEvent\n" +
                "  FROM Spot spot \n" +
                "INNER JOIN Event event ON\n" +
                " event.spot=spot and parking_id = :id \n" +
                " AND timestamp BETWEEN :startTime AND :endTime \n"+
                " GROUP BY spot.id ORDER BY NumberOfEvent DESC\n";
        List<SpotStatisticResponse> result = new ArrayList<>();
        TypedQuery<Object[]> query = entityManager.createQuery(sql, Object[].class).setParameter("id",id)
                .setParameter("startTime",startTime).setParameter("endTime",endTime);

        for (Object[] objects : query.getResultList()) {
            SpotStatisticResponse spotStatisticResponse = new SpotStatisticResponse((Long) objects[0], (Double) objects[1],(Long) objects[2]);
            result.add(spotStatisticResponse);
        }
        return result;
    }




}
