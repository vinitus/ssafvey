package com.ssafy.ssafvey.domain.shop.controller;

import com.ssafy.ssafvey.domain.shop.entity.OrderItem;
import com.ssafy.ssafvey.domain.shop.service.OrderItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "api/shop/order-items" )
public class OrderItemController {

    private OrderItemService orderItemService;

    @PostMapping
    public ResponseEntity<OrderItem> createOrderItem(@RequestBody OrderItem orderItem) {
        OrderItem savedOrderItem = orderItemService.saveOrderItem(orderItem);
        return new ResponseEntity<>(savedOrderItem, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderItem> getOrderItemById(@PathVariable("id") Long oderItemId) {
        Optional<OrderItem> optionalOrderItem = orderItemService.findOrderItemById(oderItemId);
        return optionalOrderItem.map(orderItem -> new ResponseEntity<>(orderItem, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public ResponseEntity<List<OrderItem>> getAllOrderItems() {
        List<OrderItem> orderItems = orderItemService.findAllOrderItems();
        return new ResponseEntity<>(orderItems, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderItemById(@PathVariable("id") Long oderItemId) {
        orderItemService.deleteOrderItemById(oderItemId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
