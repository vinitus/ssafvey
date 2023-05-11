package com.ssafy.ssafvey.domain.member.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JobItem {

    private Integer id;

    private String name;

    public JobItem(int id, String name){
        this.id = id;
        this.name = name;
    }
}
