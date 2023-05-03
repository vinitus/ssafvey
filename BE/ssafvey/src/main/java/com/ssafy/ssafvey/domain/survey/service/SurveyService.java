package com.ssafy.ssafvey.domain.survey.service;

import com.ssafy.ssafvey.domain.survey.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SurveyService {
    private final SurveyRepository surveyRepository;


    @Autowired
    public SurveyService(SurveyRepository surveyRepository) {
        this.surveyRepository = surveyRepository;
    }
}
