package com.ssafy.ssafvey.domain.shop.dto;

import com.ssafy.ssafvey.domain.shop.entity.Item;
import com.ssafy.ssafvey.domain.shop.entity.Order;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class OrderItemDto {

    @NotNull
    private Long Id;

    @NotNull
    private Long orderId;

    @NotNull
    private Long itemId;

    @NotNull
    private String itemName;

    @NotNull
    private String itemImage;

    @NotNull
    private boolean isUsed;
}
