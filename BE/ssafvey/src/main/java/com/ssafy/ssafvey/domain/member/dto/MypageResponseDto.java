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
public class MypageResponseDto {

    private String name;

    private Integer point;

    private Integer numSurveyParticipated;

    private Integer numSurveyCreated;

    private List<RecentItem> recentActivity;

    private Integer couponCount;

    public static MypageResponseDto mypageResponseDto(Member member){
        List<RecentItem> recentActivity = new ArrayList<>();

        RecentItem item1 = new RecentItem("가오갤은 명작인가","이정범", "2023.05.07");
        RecentItem item2 = new RecentItem("이유영은 짱짱인가","이유영", "2023-05-06");
        RecentItem item3 = new RecentItem("CA 잘한걸까?","김수빈", "2023-05-05");

        recentActivity.add(item1);
        recentActivity.add(item2);
        recentActivity.add(item3);



        // 빌더 방식으로 DB에 저장
        return  MypageResponseDto.builder()
                .name(member.getName())
                .point(500)
                .numSurveyParticipated(2)
                .numSurveyCreated(1)
                .recentActivity(recentActivity)
                .couponCount(5)
                .build();
    }
}
