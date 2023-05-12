package com.ssafy.ssafvey.utils;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    // hello 큐의 메시지가 컨슘되는지 확인하기위해 로그 추가
    @RabbitListener(queues = "hello")
    public void consume(Message message){
        System.out.println(message);
    }
}