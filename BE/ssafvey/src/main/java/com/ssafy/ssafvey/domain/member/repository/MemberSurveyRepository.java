package com.ssafy.ssafvey.domain.member.repository;

import com.ssafy.ssafvey.domain.member.entity.MemberSurvey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberSurveyRepository extends JpaRepository<MemberSurvey, Long> {
}
