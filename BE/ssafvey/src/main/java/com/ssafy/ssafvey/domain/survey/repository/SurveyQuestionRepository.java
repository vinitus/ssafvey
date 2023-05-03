package com.ssafy.ssafvey.domain.survey.repository;

import com.ssafy.ssafvey.domain.survey.dto.request.SurveyQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyQuestionRepository extends JpaRepository<SurveyQuestion, Long> {
}
