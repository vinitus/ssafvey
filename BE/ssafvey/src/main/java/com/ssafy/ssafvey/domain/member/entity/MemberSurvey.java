package com.ssafy.ssafvey.domain.member.entity;

import com.ssafy.ssafvey.domain.survey.entity.Survey;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
@ToString
public class MemberSurvey {
    @Id
    @GeneratedValue
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    private Boolean isOwner;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey;
}
