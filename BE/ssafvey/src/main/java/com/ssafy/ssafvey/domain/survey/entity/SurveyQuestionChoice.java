package com.ssafy.ssafvey.domain.survey.entity;

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
public class SurveyQuestionChoice {
    @Id
    @GeneratedValue
    private Long id;

    private int order;

    @Lob
    private String choiceDescription;

    private int count;

    @ManyToOne
    private SurveyQuestion surveyQuestion;

}
