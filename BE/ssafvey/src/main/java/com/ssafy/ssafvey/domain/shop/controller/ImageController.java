package com.ssafy.ssafvey.domain.shop.controller;

import com.ssafy.ssafvey.domain.shop.dto.ImageDto;
import com.ssafy.ssafvey.domain.shop.entity.Image;
import com.ssafy.ssafvey.domain.shop.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "api/images" )
public class ImageController {

    private final ImageService imageService;

    @PostMapping(value = "/new")
    public ResponseEntity<Image> createImage(@RequestBody ImageDto imageDto) {
        imageService.saveImage(imageDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
