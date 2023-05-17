package com.ssafy.ssafvey.domain.member.dto;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.member.entity.MemberJob;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {

    private String name;

    private String email;

    private GenderType gender;

    private Integer age;

    private List<Long> jobs;

    public static MemberResponseDto memberResponseDto(Member member){
        List<Long> tmpJobs = new ArrayList<>();
        for(MemberJob memberJob : member.getMemberJobs()){
            tmpJobs.add(memberJob.getJob().getId());
        }

        // 빌더 방식으로 DB에 저장
        return  MemberResponseDto.builder()
                .name(member.getName())
                .email(member.getEmail())
                .gender(member.getGenderType())
                .age(member.getAge())
                .jobs(tmpJobs)
                .build();
    }


}
