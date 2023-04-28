package com.ssafy.ssafvey.domain.survey.entity;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import com.ssafy.ssafvey.domain.member.entity.MemberSurvey;

import javax.persistence.*;
import java.util.Date;

public class Survey {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

    private int targetSurveyParticipants;

    private GenderType genderType;

    private int surveyParticipants;

    private boolean isDone;

    @OneToMany
    private SurveyQuestion surveyQuestion;

    @OneToMany
    private SurveyTargetAge surveyTargetAge;

    @OneToMany
    private SurveyTargetJob surveyTargetJob;

    @OneToMany
    private MemberSurvey memberSurvey;


}
