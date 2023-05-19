package com.ssafy.ssafvey.domain.member.dto;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import com.ssafy.ssafvey.domain.member.service.MemberServiceImpl;
import lombok.*;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JobListResponseDto {

    private List<JobItem> jobs;



}
