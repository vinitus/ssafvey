package com.ssafy.ssafvey.domain.member.repository;

import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.member.entity.MemberSurvey;
import com.ssafy.ssafvey.domain.survey.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberSurveyRepository extends JpaRepository<MemberSurvey, Long> {
    Optional<MemberSurvey> findByMemberAndSurvey(Member member, Survey survey);
}
