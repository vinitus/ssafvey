package com.ssafy.ssafvey.domain.survey.dto.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SurveyAnswerDto {
    private int order;
    private Boolean isMultipleChoice;
    private Integer chosenOrder;
    private String answer;
}
