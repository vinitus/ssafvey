package com.ssafy.ssafvey.domain.survey.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.ssafvey.domain.member.entity.Job;
import lombok.*;

import javax.persistence.*;

@Entity
@Table
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
@ToString(exclude = {"survey","job"})
public class SurveyTargetJob {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JsonIgnore
    private Survey survey;

    @ManyToOne
    @JsonIgnore
    private Job job;
}
