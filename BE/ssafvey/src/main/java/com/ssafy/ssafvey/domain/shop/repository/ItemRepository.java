package com.ssafy.ssafvey.domain.shop.repository;

import com.ssafy.ssafvey.domain.shop.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}