package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.shop.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {

    Item saveItem(Item item);

    Optional<Item> findById(Long itemId);

    List<Item> findAllItems();

    void deleteItemById(Long id);

}
