package com.smartparking.service;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T, ID, R extends JpaRepository<T, ID>> implements Service<T, ID, R> {

    protected final R repository;

    protected AbstractService(R repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public void delete(T entity) {
        repository.delete(entity);
    }

    @Override
    @Transactional
    public void save(T entity) {
        repository.save(entity);
    }

    @Override
    public Optional<T> findById(ID id) {
        return repository.findById(id);
    }

    @Override
    public List<T> findAll() {
        return repository.findAll();
    }

    @Override
    public R getRepository() {
        return repository;
    }

    @Override
    public T getOne(ID id) {
        return repository.getOne(id);
    }

    @Override
    @Transactional
    public List<T> saveAll(Iterable<T> iterable) {
        return repository.saveAll(iterable);
    }
}
