package com.ssafy.ssafvey.domain.survey.controller;

import com.ssafy.ssafvey.domain.survey.dto.request.SurveyDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SurveyController {

    @PostMapping("/survey")
    public ResponseEntity<?> createSurvey(@RequestBody SurveyDto surveyDto) {
        System.out.println(surveyDto);
        return ResponseEntity.ok().build();
    }
}
