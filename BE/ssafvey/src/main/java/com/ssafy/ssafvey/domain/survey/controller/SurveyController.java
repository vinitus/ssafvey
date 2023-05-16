package com.ssafy.ssafvey.domain.survey.controller;

import com.ssafy.ssafvey.domain.member.repository.MemberRepository;
import com.ssafy.ssafvey.domain.member.repository.MemberSurveyRepository;
import com.ssafy.ssafvey.domain.survey.dto.MQSendSurveyDto;
import com.ssafy.ssafvey.domain.survey.dto.StartSurveyDto;
import com.ssafy.ssafvey.domain.survey.dto.request.SurveyAnswersDto;
import com.ssafy.ssafvey.domain.survey.dto.request.SurveyDto;
import com.ssafy.ssafvey.domain.survey.dto.response.SurveyListDto;
import com.ssafy.ssafvey.domain.survey.entity.Survey;
import com.ssafy.ssafvey.domain.survey.repository.SurveyRepository;
import com.ssafy.ssafvey.domain.survey.service.SurveyService;
import com.ssafy.ssafvey.utils.Publisher;
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
    private final MemberSurveyRepository memberSurveyRepository;
    private final MemberRepository memberRepository;
    private final SurveyRepository surveyRepository;
    private final Publisher publisher;

    @GetMapping("/api/survey")
    public ResponseEntity<?> getSurveyList(HttpServletRequest request, @RequestParam(required = false) String search){

        List<Survey> surveyList;
        if (search == null) {
            surveyList = surveyService.getRecommendSurveyList((Long) request.getAttribute("memberId"));
        } else {
            surveyList = surveyService.getSearchSurveyList(search);
        }

        SurveyListDto surveyListDto = new SurveyListDto(surveyList);


        return new ResponseEntity<>(surveyListDto, HttpStatus.ACCEPTED);
    }

    @PostMapping("/api/survey")
    public ResponseEntity<?> createSurvey(HttpServletRequest request, @RequestBody SurveyDto surveyDto) {

        Survey survey = surveyService.createSurvey((Long) request.getAttribute("memberId"), surveyDto);

        return new ResponseEntity<>(survey, HttpStatus.CREATED);
    }
    @GetMapping("/api/survey/start/{survey_id}")
    public ResponseEntity<?> startSurvey(HttpServletRequest request, @PathVariable Long survey_id) {

        Object memberId = request.getAttribute("memberId");
        StartSurveyDto startSurveyDto = surveyService.getStartSurveyById(memberId,survey_id);
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
        return new ResponseEntity<>(new HashMap<>(), HttpStatus.CREATED);
    }


    @GetMapping("/ttest")
    public ResponseEntity<?> testtest(HttpServletRequest request) {
        MQSendSurveyDto mqSendSurveyDto = new MQSendSurveyDto();
        mqSendSurveyDto.setId(1L);
        publisher.send(mqSendSurveyDto);
        return new ResponseEntity<>(new HashMap<>(), HttpStatus.CREATED);
    }
}
