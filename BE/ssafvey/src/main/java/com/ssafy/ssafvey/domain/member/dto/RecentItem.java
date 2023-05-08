package com.ssafy.ssafvey.domain.member.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
//@AllArgsConstructor
@NoArgsConstructor
public class RecentItem {
    private Long id;

    private String title;

    private String name;

    private String endDate;

    public RecentItem(Long id,String title, String name,String endDate){
        this.id = id;
        this.title = title;
        this.name = name;
        this.endDate=endDate;
    }
}
