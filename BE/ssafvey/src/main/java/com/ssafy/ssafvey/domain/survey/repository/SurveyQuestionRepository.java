package com.ssafy.ssafvey.domain.survey.repository;

import com.ssafy.ssafvey.domain.survey.entity.SurveyQuestion;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SurveyQuestionRepository extends JpaRepository<SurveyQuestion, Long> {

    @EntityGraph(attributePaths = {"memberAnswerMultipleChoices", "memberAnswerDescriptives","surveyQuestionChoices"})
    List<SurveyQuestion> findBySurveyId(Long surveyId);

    @Query("SELECT sq FROM SurveyQuestion sq JOIN FETCH sq.memberAnswerMultipleChoices WHERE sq.id IN :ids")
    List<SurveyQuestion> findByIdsWithMemberAnswerMultipleChoices(@Param("ids") List<Long> ids);

    @Query("SELECT sq FROM SurveyQuestion sq JOIN FETCH sq.memberAnswerDescriptives WHERE sq.id IN :ids")
    List<SurveyQuestion> findByIdsWithMemberAnswerDescriptives(@Param("ids") List<Long> ids);
}
