package com.ssafy.ssafvey.domain.survey.entity;

import com.ssafy.ssafvey.domain.member.entity.MemberAnswerDescriptive;
import com.ssafy.ssafvey.domain.member.entity.MemberAnswerMultipleChoice;
import lombok.*;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "survey_question")
@Getter
@Builder
@Setter
@AllArgsConstructor
@NoArgsConstructor(force = true)
@ToString(exclude = {"survey","memberAnswerMultipleChoices"})
public class SurveyQuestion {
    @Id
    @GeneratedValue
    private Long id;

    private int orderNum;

    @Lob
    private String question;

    private Boolean isMultipleChoice;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey;

    @OneToMany(mappedBy = "surveyQuestion")
    private Set<MemberAnswerMultipleChoice> memberAnswerMultipleChoices = new LinkedHashSet<>();

    @OneToMany(mappedBy = "surveyQuestion")
    private Set<MemberAnswerDescriptive> memberAnswerDescriptives = new LinkedHashSet<>();


    @Override
    public String toString() {
        return "SurveyQuestion{" +
                "id=" + id +
                ", orderNum=" + orderNum +
                ", question='" + question + '\'' +
                '}';
    }

    @OneToMany(mappedBy = "surveyQuestion")
    private Set<SurveyQuestionChoice> surveyQuestionChoices = new LinkedHashSet<>();


}
