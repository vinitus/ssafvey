package com.ssafy.ssafvey.domain.member.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @Column(columnDefinition = "VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci")
    private String name;

    @JsonManagedReference
    @OneToMany(mappedBy = "job")
    @ToString.Exclude
    private List<MemberJob> memberJobs = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "job")
    @ToString.Exclude
    private List<SurveyTargetJob> surveyTargetJobs = new ArrayList<>();
}
