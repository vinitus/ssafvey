package com.ssafy.ssafvey.domain.survey.dto.request;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import com.ssafy.ssafvey.domain.survey.entity.Survey;
import com.ssafy.ssafvey.domain.survey.entity.SurveyTargetJob;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
//TODO surveyDto말고 surveyDetailDto 만들어야 할 듯
public class SurveyDto {
    private String title;
    private int targetSurveyParticipants;
    private GenderType targetGender;
    private List<Long> targetJob;
    private List<TargetAgeDto> targetAge;
    private List<SurveyQuestionDto> surveyQuestions;
//    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime endDate;
    private String description;
    private String organization;



    public static SurveyDto fromEntity(Survey survey) {
        SurveyDto surveyDto = new SurveyDto();
        surveyDto.setTitle(survey.getTitle());
        surveyDto.setTargetSurveyParticipants(survey.getTargetSurveyParticipants());
        surveyDto.setTargetGender(survey.getTargetGender());
        surveyDto.setTargetJob(survey.getSurveyTargetJobs().stream()
                .map(SurveyTargetJob::getId)
                .collect(Collectors.toList()));
        surveyDto.setTargetAge(survey.getSurveyTargetAges().stream()
                .map(TargetAgeDto::fromEntity)
                .collect(Collectors.toList()));
        surveyDto.setSurveyQuestions(survey.getSurveyQuestions().stream()
                .map(SurveyQuestionDto::fromEntity)
                .sorted(Comparator.comparingInt(SurveyQuestionDto::getOrder))
                .collect(Collectors.toList()));
        surveyDto.setEndDate(survey.getEndDate());
        surveyDto.setDescription(survey.getDescription());
        surveyDto.setOrganization(survey.getOrganization());

        return surveyDto;
    }
}