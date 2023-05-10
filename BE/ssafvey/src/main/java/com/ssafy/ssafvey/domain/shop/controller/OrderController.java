package com.ssafy.ssafvey.domain.shop.controller;

import com.ssafy.ssafvey.domain.member.service.MemberService;
import com.ssafy.ssafvey.domain.shop.dto.OrderDto;
import com.ssafy.ssafvey.domain.shop.entity.Order;
import com.ssafy.ssafvey.domain.shop.service.ItemService;
import com.ssafy.ssafvey.domain.shop.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "api/shop/order" )

public class OrderController {

    private final OrderService orderService;
    private final MemberService memberService;
    private final ItemService itemService;

    @PostMapping(value = "new")
    public ResponseEntity<?> order(@RequestBody OrderDto orderDto) {
        Long order_Id = orderService.order(orderDto.getMemberId(), orderDto.getItemId());
        return new ResponseEntity<>(order_Id, HttpStatus.CREATED);
    }

//    @GetMapping
//    public String orderList(@ModelAttribute("orderSearch") OrderSearch
//                                    orderSearch, Model model) {
//        List<Order> orders = orderService.findOrders(orderSearch);
//        model.addAttribute("orders", orders);
//        return "order/orderList";
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Long orderId) {
        Order optionalOrder = orderService.findOne(orderId);
        return new ResponseEntity<>(optionalOrder, HttpStatus.OK);
//                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
//
//    @GetMapping
//    public ResponseEntity<List<Order>> getAllOrders() {
//        List<Order> orders = orderService.findAllOrders();
//        return new ResponseEntity<>(orders, HttpStatus.OK);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteOrderById(@PathVariable("id") Long orderId) {
//        orderService.deleteOrderById(orderId);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
}
