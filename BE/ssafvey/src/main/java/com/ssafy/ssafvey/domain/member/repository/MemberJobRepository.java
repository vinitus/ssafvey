package com.ssafy.ssafvey.domain.member.repository;

import com.ssafy.ssafvey.domain.member.entity.Job;
import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.member.entity.MemberJob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberJobRepository extends JpaRepository<MemberJob, Long> {
}