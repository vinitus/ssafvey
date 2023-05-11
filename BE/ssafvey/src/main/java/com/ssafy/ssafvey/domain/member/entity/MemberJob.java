package com.ssafy.ssafvey.domain.member.entity;

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
public class MemberJob {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "JOB_ID")
    private Job job;
}

