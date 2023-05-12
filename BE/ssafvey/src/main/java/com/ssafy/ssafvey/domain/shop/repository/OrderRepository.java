package com.ssafy.ssafvey.domain.shop.repository;

import com.ssafy.ssafvey.domain.shop.entity.Item;
import com.ssafy.ssafvey.domain.shop.entity.Order;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class OrderRepository {

    private final EntityManager em;
    public void save(Order order) {
        em.persist(order);
    }
    public Order findOne(Long id) {
        return em.find(Order.class, id);
    }

    public List<Order> findAll() {
        return em.createQuery("select i from Order i", Order.class).getResultList();
    }
}
