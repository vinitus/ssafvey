package com.ssafy.ssafvey.domain.member.dto;

import com.ssafy.ssafvey.domain.member.entity.Member;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SurveysResponseDto {
    private List<RecentItem> surveys;

    public static SurveysResponseDto getSurveyParticipated(Member member){
        List<RecentItem> recentActivity = new ArrayList<>();

        RecentItem item1 = new RecentItem(1L,"가오갤은 명작인가","이정범", "2023.05.07");
        RecentItem item2 = new RecentItem(2L,"이유영은 짱짱인가","이유영", "2023-05-06");

        recentActivity.add(item1);
        recentActivity.add(item2);


        // 빌더 방식으로 DB에 저장
        return  SurveysResponseDto.builder()
                .surveys(recentActivity)
                .build();
    }

    public static SurveysResponseDto getSurveyCreated(Member member){
        List<RecentItem> recentActivity = new ArrayList<>();

        RecentItem item1 = new RecentItem(3L,"CA 잘한걸까?","김수빈", "2023-05-05");
        recentActivity.add(item1);



        // 빌더 방식으로 DB에 저장
        return  SurveysResponseDto.builder()
                .surveys(recentActivity)
                .build();
    }
}
