package com.ssafy.ssafvey.domain.shop.dto;

import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.shop.entity.OrderItem;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDto {

    @NotNull
    private Long itemId;

    private Member member;

    private OrderItem orderItem;





}
