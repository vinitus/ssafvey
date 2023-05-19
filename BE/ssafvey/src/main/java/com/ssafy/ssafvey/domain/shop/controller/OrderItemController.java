package com.ssafy.ssafvey.domain.shop.controller;

import com.ssafy.ssafvey.domain.shop.dto.OrderItemDto;
import com.ssafy.ssafvey.domain.shop.service.OrderItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "api/member/mypage" )

public class OrderItemController {

    private final OrderItemService orderItemService;

    @PutMapping(value = "/{orderItem_id}")
    public ResponseEntity<?> useOrderItem(HttpServletRequest request, @PathVariable("orderItem_id") Long orderItem_id) {
         orderItemService.useItem((Long) request.getAttribute("memberId"), orderItem_id);
         return new ResponseEntity<>(HttpStatus.OK);
    }
}
