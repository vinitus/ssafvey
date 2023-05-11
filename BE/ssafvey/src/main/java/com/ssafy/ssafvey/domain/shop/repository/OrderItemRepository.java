package com.ssafy.ssafvey.domain.shop.repository;

import com.ssafy.ssafvey.domain.shop.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
