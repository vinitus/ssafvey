package com.ssafy.ssafvey.domain.survey.dto.request;

import com.ssafy.ssafvey.domain.survey.entity.SurveyQuestionChoice;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChoiceDto {
    private int order;
    private String choice;

    // getters and setters
    public static ChoiceDto fromEntity(SurveyQuestionChoice surveyQuestionChoice) {
        ChoiceDto choiceDto = new ChoiceDto();
        choiceDto.setOrder(surveyQuestionChoice.getOrderNum());
        choiceDto.setChoice(surveyQuestionChoice.getChoiceDescription());
        return choiceDto;
    }
}