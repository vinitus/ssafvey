package com.ssafy.ssafvey.domain.member.repository;

import com.ssafy.ssafvey.domain.member.entity.MemberAnswerDescriptive;
import com.ssafy.ssafvey.domain.survey.entity.SurveyQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberAnswerDescriptiveRepository extends JpaRepository<MemberAnswerDescriptive, Long> {
    List<MemberAnswerDescriptive> findBySurveyQuestion(SurveyQuestion surveyQuestion);
}
