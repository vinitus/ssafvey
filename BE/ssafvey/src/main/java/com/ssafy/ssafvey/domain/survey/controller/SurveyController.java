package com.ssafy.ssafvey.domain.survey.controller;

import com.ssafy.ssafvey.domain.survey.dto.StartSurveyDto;
import com.ssafy.ssafvey.domain.survey.dto.request.SurveyAnswersDto;
import com.ssafy.ssafvey.domain.survey.dto.request.SurveyDto;
import com.ssafy.ssafvey.domain.survey.entity.Survey;
import com.ssafy.ssafvey.domain.survey.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class SurveyController {

    private final SurveyService surveyService;

    @GetMapping("/api/survey")
    public ResponseEntity<?> getSurveyList(HttpServletRequest request, @RequestParam String search){

        List<Survey> surveyList = surveyService.getSurveyList((Long) request.getAttribute("memberId"));
        for (Survey survey : surveyList) {
            System.out.println(survey.getId());
        }
        return new ResponseEntity<>(new HashMap<>(), HttpStatus.ACCEPTED);
    }

    @PostMapping("/api/survey")
    public ResponseEntity<?> createSurvey(HttpServletRequest request, @RequestBody SurveyDto surveyDto) {

        Survey survey = surveyService.createSurvey((Long) request.getAttribute("memberId"), surveyDto);

        return new ResponseEntity<>(survey, HttpStatus.CREATED);
    }
    @GetMapping("/api/survey/start/{survey_id}")
    public ResponseEntity<?> startSurvey(HttpServletRequest request, @PathVariable Long survey_id) {
        StartSurveyDto startSurveyDto = surveyService.getStartSurveyById((survey_id));
        return new ResponseEntity<>(startSurveyDto, HttpStatus.ACCEPTED);
    }
    @GetMapping("/api/survey/detail/{survey_id}")
    public ResponseEntity<?> surveyDetail(HttpServletRequest request, @PathVariable Long survey_id) {
        SurveyDto surveyDetail = surveyService.getSurveyDetail(survey_id);
        return new ResponseEntity<>(surveyDetail, HttpStatus.OK);
    }

    @PostMapping("/api/survey/answer")
    public ResponseEntity<?> answerSurvey(HttpServletRequest request, @RequestBody SurveyAnswersDto surveyAnswersDto) {
        surveyService.createSurveyAnswer((Long) request.getAttribute("memberId"),surveyAnswersDto);
        return new ResponseEntity<>(new SurveyDto(), HttpStatus.CREATED);
    }

}
