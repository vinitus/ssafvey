package com.ssafy.ssafvey.domain.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
//@AllArgsConstructor
@NoArgsConstructor
public class PointResponseDto {



    private int point;


    private String pointUsageHistory;


    private Boolean plusMinus;

    private String Date;

}
