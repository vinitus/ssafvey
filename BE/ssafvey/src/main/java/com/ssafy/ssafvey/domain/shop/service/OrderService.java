package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.member.entity.PointHistory;
import com.ssafy.ssafvey.domain.member.exception.BadRequestException;
import com.ssafy.ssafvey.domain.member.repository.MemberRepository;
import com.ssafy.ssafvey.domain.member.repository.PointHistoryRepository;
import com.ssafy.ssafvey.domain.shop.dto.OrderResponseDto;
import com.ssafy.ssafvey.domain.shop.entity.Item;
import com.ssafy.ssafvey.domain.shop.entity.Order;
import com.ssafy.ssafvey.domain.shop.entity.OrderItem;
import com.ssafy.ssafvey.domain.shop.repository.ItemRepository;
import com.ssafy.ssafvey.domain.shop.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {

    private final MemberRepository memberRepository;
    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;
    private final PointHistoryRepository pointHistoryRepository;

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

            PointHistory pointHistory = new PointHistory();
            pointHistory.setPoint(price);
            pointHistory.setMember(member);
            pointHistory.setPointUsageHistory("상품 구매");
            pointHistory.setPlusMinus(false);
            pointHistory.setCreateDate(LocalDateTime.now());
            pointHistoryRepository.save(pointHistory);

            return order.getId();
        }
        return null;
    }

    @Transactional
    public int orderLotto(Long memberId, Long itemId) {
        Member member = memberRepository.findById(memberId).get();
        Item item = itemRepository.findOne(itemId);
        int lotto = member.getCouponCount();
        int point = member.getPoint();
        int price = item.getPrice();
        if (point >= price) {
            //포인트 차감
            point -= price;
            member.setPoint(point);
            member.setCouponCount(lotto + 1);
            PointHistory pointHistory = new PointHistory();
            pointHistory.setPoint(price);
            pointHistory.setMember(member);
            pointHistory.setPointUsageHistory("로또 구매");
            pointHistory.setPlusMinus(false);
            pointHistory.setCreateDate(LocalDateTime.now());
            pointHistoryRepository.save(pointHistory);

            //로또생성됨
            return member.getCouponCount();
        }
        // 돈 부족함 ㅋㅋ
        throw new BadRequestException("포인트가 부족합니다.");
    }

    public List<Order> findOrders() {
        return orderRepository.findAll();
    }
    @Transactional
    public Order findOne(Long orderId) {
        return orderRepository.findOne(orderId);
    }

    @Transactional
    public List<OrderResponseDto> orderList(Long memberId) {

        Member member = memberRepository.findById(memberId).get();

        List<Order> orders = member.getOrders();
        List<OrderResponseDto> orderList = new ArrayList<>();
        for(Order order : orders){
            OrderResponseDto orderResponseDto = new OrderResponseDto();
            orderResponseDto.setOrderItemId(order.getOrderItem().getId());
            orderResponseDto.setItemName(order.getOrderItem().getItem().getName());
            orderResponseDto.setImageUrl(order.getOrderItem().getItem().getImage().getImage_url());
            orderResponseDto.setUsed(order.getOrderItem().isUsed());
            orderList.add(orderResponseDto);
        }

        return orderList;
    }

}

