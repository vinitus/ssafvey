package com.ssafy.ssafvey.domain.survey.dto.response;

import com.ssafy.ssafvey.domain.survey.entity.Survey;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class SurveyListDto {

    private List<SurveyListDetailDto> surveylist;

    public SurveyListDto(List<Survey> surveyList) {
        List<SurveyListDetailDto> surveylistdto = new ArrayList<>();

        for (Survey survey : surveyList) {
            SurveyListDetailDto surveyListDetailDto = new SurveyListDetailDto(survey);
            surveylistdto.add(surveyListDetailDto);
        }

        this.surveylist = surveylistdto;
    }
}
