package com.ssafy.ssafvey.domain.survey.dto.request;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
public class SurveyDto {
    private String title;
    private int targetSurveyParticipants;
    private GenderType targetGender;
    private List<Long> targetJob;
    private List<TargetAgeDto> targetAge;
    private List<SurveyQuestionDto> surveyQuestions;
    private boolean test;
}