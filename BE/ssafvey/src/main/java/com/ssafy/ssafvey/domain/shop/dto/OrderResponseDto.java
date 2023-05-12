package com.ssafy.ssafvey.domain.shop.dto;

import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.shop.entity.OrderItem;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderResponseDto {

    @NotNull

    private Long itemId;

    private Long orderItemId;

    private String imageUrl;

    private String itemName;

}
