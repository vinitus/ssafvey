package com.ssafy.ssafvey.domain.shop.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore // 순환 참조 방지
    private Member member;

    @JsonIgnore // 순환 참조 방지
    private OrderItem orderItem;

}
