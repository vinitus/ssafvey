package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.shop.entity.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    Order saveOrder(Order order);

    Optional<Order> findOrderById(Long id);

    List<Order> findAllOrders();

    void deleteOrderById(Long id);
}
