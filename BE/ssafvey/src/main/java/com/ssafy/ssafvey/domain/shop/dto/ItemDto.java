package com.ssafy.ssafvey.domain.shop.dto;

import com.ssafy.ssafvey.domain.shop.entity.Image;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemDto {

    private Long id;

    private String name;

    private int price;

    private String imageUrl;

}
