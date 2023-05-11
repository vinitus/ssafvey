
package com.ssafy.ssafvey.domain.survey.dto.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class SurveyAnswersDto {
    private Long surveyId;
    private List<SurveyAnswerDto> answers;
}
