package com.ssafy.ssafvey.domain.survey.dto.request;

import com.ssafy.ssafvey.domain.survey.entity.SurveyTargetAge;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TargetAgeDto {
    private int minAge;
    private int maxAge;

    // getters and setters
    public static TargetAgeDto fromEntity(SurveyTargetAge surveyTargetAge) {
        TargetAgeDto targetAgeDto = new TargetAgeDto();
        targetAgeDto.setMinAge(surveyTargetAge.getMinAge());
        targetAgeDto.setMaxAge(surveyTargetAge.getMaxAge());
        return targetAgeDto;
    }
}