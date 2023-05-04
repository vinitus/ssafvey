package com.ssafy.ssafvey.domain.survey.entity;

import com.ssafy.ssafvey.domain.member.entity.Job;
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
public class SurveyTargetJob {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Survey survey;

    @ManyToOne
    private Job job;
}
