package com.ssafy.ssafvey.domain.survey.entity;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import com.ssafy.ssafvey.domain.member.entity.MemberSurvey;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
@ToString
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

    @OneToMany(mappedBy = "survey")
    private List<SurveyQuestion> surveyQuestions = new ArrayList<>();

    @OneToMany(mappedBy = "survey")
    private List<SurveyTargetAge> surveyTargetAges = new ArrayList<>();

    @OneToMany(mappedBy = "survey")
    private List<SurveyTargetJob> surveyTargetJobs = new ArrayList<>();

    @OneToMany(mappedBy = "survey")
    private List<MemberSurvey> memberSurveys = new ArrayList<>();


}
