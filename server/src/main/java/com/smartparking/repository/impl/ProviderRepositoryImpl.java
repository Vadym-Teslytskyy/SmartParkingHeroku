package com.smartparking.repository.impl;

import com.smartparking.entity.Provider;
import com.smartparking.model.filter.ProviderFilter;
import com.smartparking.repository.ProviderFilterRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProviderRepositoryImpl implements ProviderFilterRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Provider> findAllByFilter(ProviderFilter providerFilter) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Provider> criteria = criteriaBuilder.createQuery(Provider.class);
        Root<Provider> provider = criteria.from(Provider.class);
        criteria.select(provider);
        List<Predicate> predicates = new ArrayList<>();
        if (providerFilter.getActive().equals("true") || providerFilter.getActive().equals("false")) {
            predicates.add(criteriaBuilder.and(criteriaBuilder.equal(provider.get("active"), Boolean.valueOf(providerFilter.getActive()))));
        }
        if (!providerFilter.getCompanyName().isEmpty()) {
            predicates.add((criteriaBuilder.and(criteriaBuilder.like(provider.get("name"), providerFilter.getCompanyName() + "%"))));
        }
        criteria.where(predicates.toArray(new Predicate[predicates.size()]));
        return entityManager.createQuery(criteria).getResultList();
    }
}
