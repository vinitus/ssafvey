package com.ssafy.ssafvey.domain.member.entity;

import com.ssafy.ssafvey.domain.survey.entity.SurveyTargetJob;
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
public class Job {
    @Id
    @GeneratedValue
    private Long id;


    private String name;


    @OneToMany(mappedBy = "job")
    private List<MemberJob> memberJobs = new ArrayList<>();

    @OneToMany
    private List<SurveyTargetJob> surveyTargetJobs = new ArrayList<>();
}
