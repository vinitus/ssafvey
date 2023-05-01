package com.ssafy.ssafvey.domain.survey.entity;

import com.ssafy.ssafvey.domain.member.entity.MemberAnswerDescriptive;
import com.ssafy.ssafvey.domain.member.entity.MemberAnswerMultipleChoice;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
@ToString
public class SurveyQuestion {
    @Id
    @GeneratedValue
    private Long id;

    private int order;

    @Lob
    private String question;

    private Boolean isMultipleChoice;

    @ManyToOne
    private SurveyQuestion surveyQuestion;

    @OneToMany
    private List<MemberAnswerMultipleChoice> memberAnswerMultipleChoices = new ArrayList<>();

    @OneToMany
    private List<MemberAnswerDescriptive> memberAnswerDescriptiveList = new ArrayList<>();

    @OneToMany
    private List<SurveyQuestionChoice> surveyQuestionChoices = new ArrayList<>();
}
