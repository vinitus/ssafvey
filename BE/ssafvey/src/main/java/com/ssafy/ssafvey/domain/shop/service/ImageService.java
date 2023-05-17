package com.ssafy.ssafvey.domain.shop.service;

import com.ssafy.ssafvey.domain.shop.dto.ImageDto;
import com.ssafy.ssafvey.domain.shop.entity.Image;
import com.ssafy.ssafvey.domain.shop.entity.Item;
import com.ssafy.ssafvey.domain.shop.repository.ImageRepository;
import com.ssafy.ssafvey.domain.shop.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ImageService {

    private final ImageRepository imageRepository;
    private final ItemRepository itemRepository;

    @Transactional
    public void saveImage(ImageDto imageDto) {
        Image image = new Image();
        Item item = itemRepository.findOne(imageDto.getItemId());
        image.setItem(item);
        image.setImage_url(imageDto.getUrl());
        imageRepository.save(image);
    }
}
