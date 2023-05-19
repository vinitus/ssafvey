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
public class MemberAnswerDescriptive {
    @Id
    @GeneratedValue
    private Long id;

    @Lob
    private String answer;

    @Column(name = "distinct_uuid")
    private String distinctUUID;

    //TODO Fetch
    @ManyToOne
    @JoinColumn(name = "survey_question_id")
    private SurveyQuestion surveyQuestion;

}
