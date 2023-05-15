package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.member.repository.MemberRepository;
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
    private final MemberRepository memberRepository;

    @Transactional
    public void useItem(Long member, Long OrderItemId) {

        OrderItem orderItem = orderItemRepository.findById(OrderItemId).get();
        Long memberId = orderItemRepository.findById(OrderItemId).get().getOrder().getMember().getId();

        System.out.println(memberId);
        System.out.println(member);
//        주문자와 사용자가 같은지 check
        if ( member == memberId) {
            boolean use = orderItem.isUsed();
            orderItem.setUsed(!use);
        }
    }


}
