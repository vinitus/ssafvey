package com.ssafy.ssafvey.domain.shop.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ssafy.ssafvey.domain.member.entity.Member;
import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "orders")
public class Order {

    @Id @GeneratedValue
    @Column(name = "order_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    @JsonIgnoreProperties("orders")
    private Member member; //주문 회원

    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("order")
    private OrderItem orderItem;

    private LocalDateTime orderDate;

//    연관관계 메서드
    public void setMember(Member member) {
        this.member = member;
        member.getOrders().add(this);
    }

    public void addOrderItem(OrderItem orderItem) {
        orderItem.setOrder(this);
    }


    public static Order createOrder(Member member, OrderItem orderItem) {
        Order order = new Order();
        order.setMember(member);

        order.setOrderDate(LocalDateTime.now());
        order.addOrderItem(orderItem);
        order.setOrderItem(orderItem);
        return order;
    }

    public int getPrice() {
        int price = 0;
        price += orderItem.getOrderPrice();
        return price;
    }


}
