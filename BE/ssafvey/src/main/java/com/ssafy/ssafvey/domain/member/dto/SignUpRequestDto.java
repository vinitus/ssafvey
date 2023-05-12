package com.ssafy.ssafvey.domain.member.dto;

import com.ssafy.ssafvey.domain.member.entity.Job;
import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.member.entity.MemberJob;
import com.sun.istack.NotNull;
import lombok.*;
import com.ssafy.ssafvey.domain.member.entity.Authority;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignUpRequestDto {

    @NotNull
    private Integer age;

    @NotNull
    private List<Long> jobs;

    @SneakyThrows
    public Member tomember(Member member, Long id, SignUpRequestDto signUpRequestDto,List<MemberJob> jobList){
        Authority userAuthority = Authority.user();
        // 빌더 방식으로 DB에 저장
        return  Member.builder()
                .id(id)
                .name(member.getName())
                .email(member.getEmail())
                .memberJobs(jobList)
                .authorities(Set.of(userAuthority))
                .age(signUpRequestDto.getAge())
                .genderType(member.getGenderType())
                .refreshToken(member.getRefreshToken())
                .isRegistered(true)
                .build();
    }
}
