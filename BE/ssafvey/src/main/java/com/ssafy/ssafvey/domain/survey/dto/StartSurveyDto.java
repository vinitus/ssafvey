package com.ssafy.ssafvey.domain.survey.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
public class StartSurveyDto {
    private Long id;
    private Boolean isDone;
    private String title;
    private String description;
    private String organization;
    private LocalDateTime endDate;
    private Integer targetSurveyParticipants;
    private Integer surveyParticipants;
    private Boolean haveDone;
    private Boolean isAuthor;

    public void setHaveDone(Boolean haveDone) {
        this.haveDone = haveDone;
    }

    public void setIsAuthor(Boolean author) {
        isAuthor = author;
    }
//TODO 성빈쓰와 merge하고 lotto 넣고 service단에도 넣어야함
    //TODO 서비스단에 넣었는지 체크
//    private Integer lotto;
}
