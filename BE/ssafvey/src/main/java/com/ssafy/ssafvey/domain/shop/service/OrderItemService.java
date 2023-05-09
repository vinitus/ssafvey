package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.shop.entity.OrderItem;

import java.util.List;
import java.util.Optional;

public interface OrderItemService {

    OrderItem saveOrderItem(OrderItem orderItem);

    Optional<OrderItem> findOrderItemById(Long orderItemId);

    List<OrderItem> findAllOrderItems();

    void deleteOrderItemById(Long orderItemId);
}
