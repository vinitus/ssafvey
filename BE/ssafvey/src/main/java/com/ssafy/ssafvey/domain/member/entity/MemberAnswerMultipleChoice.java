package com.ssafy.ssafvey.domain.member.entity;

import com.ssafy.ssafvey.domain.survey.entity.SurveyQuestion;
import lombok.*;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
@ToString
public class MemberAnswerMultipleChoice {
    @Id
    @GeneratedValue
    private Long id;

    private int orderNum;

    private String distinctUUID;

    @ManyToOne
    @JoinColumn(name = "survey_question_id")
    private SurveyQuestion surveyQuestion;
}
