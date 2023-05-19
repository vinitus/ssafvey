package com.ssafy.ssafvey.domain.member.entity;

import com.ssafy.ssafvey.domain.survey.entity.Survey;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "member_survey")
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

    private LocalDateTime createdAt;

    @Column(name = "is_owner", columnDefinition = "BOOLEAN DEFAULT false")
    private Boolean isOwner;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey;


    @PrePersist
    public void setCreatedAt() {
        this.createdAt = LocalDateTime.now();
    }
}
