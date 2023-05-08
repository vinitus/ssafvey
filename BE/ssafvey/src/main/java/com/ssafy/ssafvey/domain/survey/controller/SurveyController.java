package com.ssafy.ssafvey.domain.survey.controller;

import com.ssafy.ssafvey.domain.survey.dto.request.SurveyDto;
import com.ssafy.ssafvey.domain.survey.dto.request.SurveyQuestionDto;
import com.ssafy.ssafvey.domain.survey.entity.Survey;
import com.ssafy.ssafvey.domain.survey.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
public class SurveyController {

    private final SurveyService surveyService;


    @PostMapping("/survey")
    public ResponseEntity<?> createSurvey(HttpServletRequest request, @RequestBody SurveyDto surveyDto) {
        System.out.println(surveyDto);
        for (SurveyQuestionDto surveyQuestion : surveyDto.getSurveyQuestions()) {
            System.out.println("surveyQuestion = " + surveyQuestion);
        }
        Survey survey = surveyService.createSurvey(surveyDto);
        return new ResponseEntity<>(survey, HttpStatus.CREATED);
    }

}
