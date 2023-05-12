package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.shop.dto.ItemDto;
import com.ssafy.ssafvey.domain.shop.entity.Item;
import com.ssafy.ssafvey.domain.shop.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;
    @Transactional
    public Item saveItem(Item item) {
        itemRepository.save(item);
        return item;
    }
    public List<ItemDto> findItems() {
        List<Item> items = itemRepository.findAll();
        List<ItemDto> itemDtoList = new ArrayList<>();
        for (Item item : items) {
            ItemDto itemDto = new ItemDto();
            itemDto.setId(item.getId());
            itemDto.setName(item.getName());
            itemDto.setPrice(item.getPrice());
            itemDto.setImageUrl(item.getImage().getImage_url());
            itemDtoList.add(itemDto);
        }
        return itemDtoList;
    }
    public ItemDto findOne(Long itemId) {
        Item item = itemRepository.findOne(itemId);
        ItemDto itemDto = new ItemDto();
        itemDto.setId(item.getId());
        itemDto.setName(item.getName());
        itemDto.setPrice(item.getPrice());
        itemDto.setImageUrl(item.getImage().getImage_url());
        return itemDto;
    }

}
