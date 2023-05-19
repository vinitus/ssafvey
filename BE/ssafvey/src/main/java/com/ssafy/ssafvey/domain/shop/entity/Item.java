package com.ssafy.ssafvey.domain.shop.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Item {

    @Id @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    private String name;
    private int price;
    private int stockQuantity;

    @OneToOne(mappedBy = "item", cascade = CascadeType.ALL)
    @ToString.Exclude
    private Image image; //이미지

}
