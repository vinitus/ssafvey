package com.ssafy.ssafvey.domain.survey.service;

import com.ssafy.ssafvey.domain.survey.repository.SurveyQuestionChoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SurveyQuestionChoiceService {

    private final SurveyQuestionChoiceRepository surveyQuestionChoiceRepository;

    @Autowired
    public SurveyQuestionChoiceService(SurveyQuestionChoiceRepository surveyQuestionChoiceRepository) {
        this.surveyQuestionChoiceRepository = surveyQuestionChoiceRepository;
    }

//    public SurveyQuestionChoice create(int orderNum,) {
//
//    }
}
