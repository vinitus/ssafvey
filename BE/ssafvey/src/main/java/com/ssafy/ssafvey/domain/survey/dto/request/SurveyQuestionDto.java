package com.ssafy.ssafvey.domain.survey.dto.request;

import lombok.Getter;

import java.util.List;

@Getter
public class SurveyQuestionDto {
    private int order;
    private String question;
    private boolean isMultipleChoice;
    private List<ChoiceDto> choices;

    // getters and setters
}
