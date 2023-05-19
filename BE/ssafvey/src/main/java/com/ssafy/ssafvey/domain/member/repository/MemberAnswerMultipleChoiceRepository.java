package com.ssafy.ssafvey.domain.member.repository;

import com.ssafy.ssafvey.domain.member.entity.MemberAnswerMultipleChoice;
import com.ssafy.ssafvey.domain.survey.entity.SurveyQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberAnswerMultipleChoiceRepository extends JpaRepository<MemberAnswerMultipleChoice,Long> {
    List<MemberAnswerMultipleChoice> findBySurveyQuestion(SurveyQuestion surveyQuestion);
}
