package com.ssafy.ssafvey.domain.member.repository;

import com.ssafy.ssafvey.domain.member.entity.Job;
import com.ssafy.ssafvey.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}