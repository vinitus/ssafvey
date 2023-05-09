package com.ssafy.ssafvey.domain.shop.repository;

import com.ssafy.ssafvey.domain.shop.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
