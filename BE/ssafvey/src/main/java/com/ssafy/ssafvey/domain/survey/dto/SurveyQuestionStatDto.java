package com.ssafy.ssafvey.domain.survey.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SurveyQuestionStatDto {
    private int order;
    private String question;
    private Boolean isMultipleChoice;
    private List<MultipleChoiceStatDto> multipleChoices;
    private List<DescriptiveChoiceStatDto> descriptiveChoices;

}
