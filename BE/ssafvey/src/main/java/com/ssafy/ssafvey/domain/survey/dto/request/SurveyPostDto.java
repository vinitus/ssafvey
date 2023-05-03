package com.ssafy.ssafvey.domain.survey.dto.request;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import lombok.Data;

import java.util.List;

@Data
public class SurveyPostDto {
    private String title;
    private int targetNoPeople;
    private GenderType targetGender;
    private List<Integer> targetJob;
    private List<AgeRange> targetAge;
    private List<SurveyQuestion> surveyQuestions;
}