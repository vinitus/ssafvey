package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.member.repository.MemberRepository;
import com.ssafy.ssafvey.domain.shop.entity.Item;
import com.ssafy.ssafvey.domain.shop.entity.Order;
import com.ssafy.ssafvey.domain.shop.entity.OrderItem;
import com.ssafy.ssafvey.domain.shop.repository.ItemRepository;
import com.ssafy.ssafvey.domain.shop.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {

    private final MemberRepository memberRepository;
    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;

    @Transactional
    public Long order(Long memberId, Long itemId) {
        //엔티티 조회
        Member member = memberRepository.findById(memberId).get();
        Item item = itemRepository.findOne(itemId);

        //주문상품 생성
        OrderItem orderItem = OrderItem.createOrderItem(item, item.getPrice());
        //주문 생성
        Order order = Order.createOrder(member, orderItem);
        //주문 저장
        orderRepository.save(order);
        System.out.println(order.getOrderItem());
        return order.getId();
    }

    public List<Order> findOrders() {
        return orderRepository.findAll();
    }
    public Order findOne(Long orderId) {
        return orderRepository.findOne(orderId);
    }

}

