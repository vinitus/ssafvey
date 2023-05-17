package com.ssafy.ssafvey.domain.survey.repository;

import com.ssafy.ssafvey.domain.survey.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface SurveyRepository extends JpaRepository<Survey, Long> {

    @Query("select distinct s from Survey s join s.surveyTargetJobs stj Join stj.job j " +
            "join j.memberJobs mj join mj.member m join s.surveyTargetAges sta " +
            "where m.id = :memberId and m.age between  sta.minAge and  sta.maxAge " +
            "and m.id = mj.member.id and mj.job.id = j.id and s.isDone = false " +
            "order by s.createDate desc "
    )
    List<Survey> findSurveyByMemberJobAndAge(@Param("memberId") Long memberId);

    List<Survey> findByTitleContaining(String keyword);

    @Query("SELECT s FROM Survey s JOIN FETCH s.surveyQuestions WHERE s.id = :id")
    Optional<Survey> findByIdWithSurveyQuestions(@Param("id") Long id);
}
