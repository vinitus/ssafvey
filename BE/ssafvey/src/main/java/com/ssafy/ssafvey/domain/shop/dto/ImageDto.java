package com.ssafy.ssafvey.domain.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ImageDto {
    private Long itemId;
    private String url;
    public ImageDto(Long itemId, String url) {
        this.itemId = itemId;
        this.url = url;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
}