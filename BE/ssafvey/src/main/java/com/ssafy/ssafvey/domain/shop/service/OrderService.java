package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.member.repository.MemberRepository;
import com.ssafy.ssafvey.domain.shop.dto.OrderItemDto;
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
        int point = member.getPoint();
        int price = item.getPrice();
        if (point >= price) {
            //주문상품 생성
            OrderItem orderItem = OrderItem.createOrderItem(item, item.getPrice());
            //주문 생성
            Order order = Order.createOrder(member, orderItem);
            //주문 저장
            orderRepository.save(order);
            //포인트 차감
            point -= price;
            member.setPoint(point);

            return order.getId();
        }
        return null;
    }

    public List<Order> findOrders() {
        return orderRepository.findAll();
    }
    @Transactional
    public Order findOne(Long orderId) {
        return orderRepository.findOne(orderId);
    }

    @Transactional
    public List<Order> orderList(Long memberId) {

        Member member = memberRepository.findById(memberId).get();

        List<Order> orders = member.getOrders();

        for(Order order : orders){
            System.out.println(order.getOrderItem());
            System.out.println(order.getPrice());
            System.out.println(order);
        }

        return orders;
    }

}

