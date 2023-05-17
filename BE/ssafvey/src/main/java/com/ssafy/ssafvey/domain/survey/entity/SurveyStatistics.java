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
public class SurveyStatistics {
    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    private Survey survey;

    @Column(columnDefinition = "text")
    private String statisticsJson;
}
