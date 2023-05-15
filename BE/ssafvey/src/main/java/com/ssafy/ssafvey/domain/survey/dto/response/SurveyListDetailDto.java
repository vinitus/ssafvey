package com.ssafy.ssafvey.domain.survey.dto.response;

import com.ssafy.ssafvey.domain.survey.entity.Survey;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class SurveyListDetailDto {

    private Long id;
    private String title;
    private String organization;
    private LocalDateTime createDate;

    private LocalDateTime endDate;

    private int targetSurveyParticipants;


    public SurveyListDetailDto(Survey survey) {
        this.id = survey.getId();
        this.title = survey.getTitle();
        this.organization = survey.getOrganization();
        this.createDate = survey.getCreateDate();
        this.endDate = survey.getEndDate();
        this.targetSurveyParticipants = survey.getTargetSurveyParticipants();
    }
}
