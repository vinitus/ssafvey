package com.ssafy.ssafvey.domain.survey.repository;

import com.ssafy.ssafvey.domain.survey.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SurveyRepository extends JpaRepository<Survey, Long> {
}
