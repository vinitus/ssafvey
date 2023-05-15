package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.shop.entity.OrderItem;
import com.ssafy.ssafvey.domain.shop.repository.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderItemService {

    private final OrderItemRepository orderItemRepository;

    @Transactional
    public void useItem(Long OrderItemId) {

        OrderItem orderItem = orderItemRepository.findById(OrderItemId).get();
        boolean use = orderItem.isUsed();
        orderItem.setUsed(!use);
    }


}
