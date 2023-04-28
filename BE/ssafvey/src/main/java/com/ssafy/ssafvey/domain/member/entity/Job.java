package com.ssafy.ssafvey.domain.member.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.List;

public class Job {
    @Id
    @GeneratedValue
    private Long id;


    private String name;


    private List<MemberJob> memberJobs;
}
