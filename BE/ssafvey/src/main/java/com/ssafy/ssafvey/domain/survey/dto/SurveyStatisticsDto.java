package com.ssafy.ssafvey.domain.survey.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SurveyStatisticsDto {
    private List<SurveyQuestionStatDto> surveyQuestionStats;
}
