package com.ssafy.ssafvey.domain.survey.dto.request;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import lombok.Getter;

import java.util.List;

@Getter
public class SurveyDto {
    private String title;
    private int targetSurveyParticipants;
    private GenderType targetGender;
    private List<Long> targetJobIds;
    private List<TargetAgeDto> targetAgeDto;
    private List<SurveyQuestionDto> surveyQuestionDtos;
}