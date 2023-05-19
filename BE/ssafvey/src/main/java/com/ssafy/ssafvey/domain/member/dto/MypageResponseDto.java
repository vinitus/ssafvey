package com.ssafy.ssafvey.domain.member.dto;

import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.member.entity.MemberSurvey;
import com.ssafy.ssafvey.domain.shop.entity.Order;
import lombok.*;

import java.time.format.DateTimeFormatter;
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

    private Integer numOrder;

    private Long numSurveyParticipated;

    private Long numSurveyCreated;

    private List<RecentItem> recentActivity;

    private Integer couponCount;

    public static MypageResponseDto mypageResponseDto(Member member, Long numCreated, Long numParticipated, List<MemberSurvey> latest3Surveys){
        List<RecentItem> recentActivity = new ArrayList<>();

        List<Order> orders = member.getOrders();
        int orderCount = orders.size();

        for(MemberSurvey memberSurvey:latest3Surveys){
            // member에서 membersurvey 가져오기 for문 돌려서 recentItem에 넣기 service에서 해야할듯?
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");
                String formattedDate = memberSurvey.getSurvey().getCreateDate().format(formatter);
                RecentItem tmpItem = new RecentItem(memberSurvey.getSurvey().getId(),memberSurvey.getSurvey().getTitle(),memberSurvey.getSurvey().getOrganization(),formattedDate);
                recentActivity.add(tmpItem);
            }



        // 빌더 방식으로 DB에 저장
        return  MypageResponseDto.builder()
                .name(member.getName())
                .point(member.getPoint())
                .numSurveyParticipated(numParticipated)
                .numOrder(orderCount)
                .numSurveyCreated(numCreated)
                .recentActivity(recentActivity)
                .couponCount(member.getCouponCount())
                .build();
    }
}
