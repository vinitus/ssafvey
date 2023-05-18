package com.ssafy.ssafvey.domain.survey.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.ssafvey.domain.survey.entity.SurveyQuestion;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@ToString
public class SurveyQuestionDto {
    private int order;
    private String question;

    private Boolean isMultipleChoice;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<ChoiceDto> choices;

    public static SurveyQuestionDto fromEntity(SurveyQuestion surveyQuestion) {
        SurveyQuestionDto surveyQuestionDto = new SurveyQuestionDto();
        surveyQuestionDto.setOrder(surveyQuestion.getOrderNum());
        surveyQuestionDto.setQuestion(surveyQuestion.getQuestion());
        surveyQuestionDto.setIsMultipleChoice(surveyQuestion.getIsMultipleChoice());

        if (surveyQuestion.getIsMultipleChoice()) {
            List<ChoiceDto> choiceDtos = surveyQuestion.getSurveyQuestionChoices().stream()
                    .map(ChoiceDto::fromEntity)
                    .sorted(Comparator.comparingInt(ChoiceDto::getOrder))
                    .collect(Collectors.toList());
            surveyQuestionDto.setChoices(choiceDtos);
        }
        return surveyQuestionDto;
    }
}
