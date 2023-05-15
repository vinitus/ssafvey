package com.ssafy.ssafvey.domain.survey.service;

import com.ssafy.ssafvey.domain.member.entity.*;
import com.ssafy.ssafvey.domain.member.repository.MemberRepository;
import com.ssafy.ssafvey.domain.member.repository.MemberSurveyRepository;
import com.ssafy.ssafvey.domain.member.service.MemberAnswerServiceImpl;
import com.ssafy.ssafvey.domain.member.service.MemberSurveyService;
import com.ssafy.ssafvey.domain.survey.dto.StartSurveyDto;
import com.ssafy.ssafvey.domain.survey.dto.request.*;
import com.ssafy.ssafvey.domain.survey.entity.Survey;
import com.ssafy.ssafvey.domain.survey.entity.SurveyQuestion;
import com.ssafy.ssafvey.domain.survey.entity.SurveyTargetAge;
import com.ssafy.ssafvey.domain.survey.entity.SurveyTargetJob;
import com.ssafy.ssafvey.domain.survey.repository.JobRepository;
import com.ssafy.ssafvey.domain.survey.repository.SurveyRepository;
import com.ssafy.ssafvey.domain.survey.repository.SurveyTargetAgeRepository;
import com.ssafy.ssafvey.domain.survey.repository.SurveyTargetJobRepository;
import com.ssafy.ssafvey.utils.UUIDGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SurveyService {
    private final SurveyRepository surveyRepository;
    private final SurveyQuestionService surveyQuestionService;
    private final SurveyTargetAgeRepository surveyTargetAgeRepository;
    private final SurveyTargetJobRepository surveyTargetJobRepository;

    private final JobRepository jobRepository;
    private final MemberAnswerServiceImpl memberAnswerServiceImpl;
    private final MemberSurveyService memberSurveyService;
    private final MemberRepository memberRepository;
    private final MemberSurveyRepository memberSurveyRepository;

    @Autowired
    public SurveyService(SurveyRepository surveyRepository, SurveyQuestionService surveyQuestionService, SurveyTargetAgeRepository surveyTargetAgeRepository, SurveyTargetJobRepository surveyTargetJobRepository, JobRepository jobRepository, MemberAnswerServiceImpl memberAnswerServiceImpl, MemberSurveyService memberSurveyService, MemberRepository memberRepository, MemberSurveyRepository memberSurveyRepository) {
        this.surveyRepository = surveyRepository;
        this.surveyQuestionService = surveyQuestionService;
        this.surveyTargetAgeRepository = surveyTargetAgeRepository;
        this.surveyTargetJobRepository = surveyTargetJobRepository;
        this.jobRepository = jobRepository;
        this.memberAnswerServiceImpl = memberAnswerServiceImpl;
        this.memberSurveyService = memberSurveyService;
        this.memberRepository = memberRepository;
        this.memberSurveyRepository = memberSurveyRepository;
    }

    private SurveyTargetAge createTargetAge(TargetAgeDto targetAgeDto, Survey survey) {
        SurveyTargetAge surveyTargetAge = SurveyTargetAge.builder()
                .minAge(targetAgeDto.getMinAge())
                .maxAge(targetAgeDto.getMaxAge())
                .survey(survey)
                .build();
        return surveyTargetAgeRepository.save(surveyTargetAge);
    }
    private List<SurveyTargetJob> createSurveyTargetJobs(List<Long> targetJobIds, Survey survey) {
        List<SurveyTargetJob> surveyTargetJobs = new ArrayList<>();

        List<Job> jobs = jobRepository.findAllById(targetJobIds);
        System.out.println(jobs);
        for (Job job : jobs) {
            SurveyTargetJob surveyTargetJob = SurveyTargetJob.builder()
                    .survey(survey)
                    .job(job)
                    .build();
            surveyTargetJobs.add(surveyTargetJob);
        }
        return surveyTargetJobs;
    }
    private List<SurveyTargetAge> createSurveyTargetAgeList(List<TargetAgeDto> targetAgeDtoList, Survey survey) {
        List<SurveyTargetAge> surveyTargetAges = new ArrayList<>();

        for (TargetAgeDto targetAgeDto : targetAgeDtoList) {
            SurveyTargetAge surveyTargetAge = createTargetAge(targetAgeDto, survey);
            surveyTargetAges.add(surveyTargetAge);
        }
        return surveyTargetAges;
    }

    @Transactional
    public Survey createSurvey(Long memberId, SurveyDto surveyDto) {
        //TODO member_survey에 created at 값 넣어야함
        Survey survey = Survey.builder()
                .isDone(false)
                .title(surveyDto.getTitle())
                .targetSurveyParticipants(surveyDto.getTargetSurveyParticipants())
                .targetGender(surveyDto.getTargetGender())
                .endDate(surveyDto.getEndDate())
                .organization(surveyDto.getOrganization())
                .description(surveyDto.getDescription())
                .build();
        List<SurveyTargetJob> surveyTargetJobs = createSurveyTargetJobs(surveyDto.getTargetJob(), survey);
        List<SurveyTargetAge> surveyTargetAges = createSurveyTargetAgeList(surveyDto.getTargetAge(), survey);
        List<SurveyQuestion> surveyQuestions = new ArrayList<>();
        List<MemberSurvey> memberSurveys = new ArrayList<>();

        MemberSurvey memberSurvey = memberSurveyService.createMemberSurvey(memberId,survey,true);
        memberSurveys.add(memberSurvey);
        for (SurveyQuestionDto surveyQuestionDto : surveyDto.getSurveyQuestions()) {
            System.out.println(surveyQuestionDto);
            SurveyQuestion surveyQuestion = surveyQuestionService.createSurveyQuestion(surveyQuestionDto, survey);
            surveyQuestions.add(surveyQuestion);
        }

        survey.setSurveyTargetJobs(surveyTargetJobs);
        survey.setSurveyTargetAges(surveyTargetAges);
        survey.setSurveyQuestions(surveyQuestions);
        survey.setMemberSurveys(memberSurveys);

        return surveyRepository.save(survey);
    }

    public StartSurveyDto getStartSurveyById(Object memberId, Long surveyId) {
        Optional<Survey> optionalSurvey = surveyRepository.findById(surveyId);
        if (optionalSurvey.isPresent()) {


            Survey survey = optionalSurvey.get();
            StartSurveyDto startSurveyDto = StartSurveyDto.builder()
                    .id(survey.getId())
                    .surveyParticipants(survey.getSurveyParticipants())
                    .title(survey.getTitle())
                    .isDone(survey.getIsDone())
                    .description(survey.getDescription())
                    .organization(survey.getOrganization())
                    .endDate(survey.getEndDate())
                    .targetSurveyParticipants(survey.getTargetSurveyParticipants())
                    .build();
            if (memberId != null) {
                Member member = memberRepository.findById((Long) memberId).get();
                startSurveyDto.setHaveDone(memberSurveyRepository.findByMemberAndSurvey(member, survey).isPresent());
            } else {
                startSurveyDto.setHaveDone(false);
            }
            return startSurveyDto;
        }

        else {
            //TODO Survey없는 에러 띄우기
            return StartSurveyDto.builder().build();
        }

    }

    public SurveyDto getSurveyDetail(Long surveyId) {
        Optional<Survey> optionalSurvey = surveyRepository.findById(surveyId);
        //TODO request member 에 대해 처리해줘야함
        if (optionalSurvey.isPresent()) {
            Survey survey = optionalSurvey.get();

            return SurveyDto.fromEntity(survey);
        } else {
            return new SurveyDto();
        }
    }

    @Transactional
    public void createSurveyAnswer(Long memberId, SurveyAnswersDto surveyAnswersDto) {
        //TODO user request Json에 대한 Validation을 해야함
        Optional<Survey> optionalSurvey = surveyRepository.findById(surveyAnswersDto.getSurveyId());
        Member findMember = memberRepository.findById(memberId).get();
        if (optionalSurvey.isPresent()) {
            Survey survey = optionalSurvey.get();
            String UUID = UUIDGenerator.generateUUID();
            List<SurveyQuestion> sortedSurveyQuestionList = getSortedSurveyQuestionListFromSurvey(survey);
            List<SurveyAnswerDto> sortedSurveyAnswerDto = getSortedSurveyAnswerDtos(surveyAnswersDto);

            survey.surveyParticipate();
            MemberSurvey memberSurvey=memberSurveyService.createMemberSurvey(memberId, survey, false);
            memberSurveyRepository.save(memberSurvey);
            findMember.setCouponCount(findMember.getCouponCount()+1);

            for (int index = 0; index < sortedSurveyQuestionList.size(); index++) {
                SurveyAnswerDto surveyAnswerDto = sortedSurveyAnswerDto.get(index);
                SurveyQuestion surveyQuestion = sortedSurveyQuestionList.get(index);
                if (surveyAnswerDto.getIsMultipleChoice()) {
                    MemberAnswerMultipleChoice memberAnswerMultipleChoice = memberAnswerServiceImpl.createMemberAnswerMultipleChoice(surveyAnswerDto, surveyQuestion, UUID);

                } else {
                    MemberAnswerDescriptive memberAnswerDescriptive = memberAnswerServiceImpl.createMemberAnswerDescriptive(surveyAnswerDto, surveyQuestion, UUID);
                }
            }
        }
    }

    private static List<SurveyAnswerDto> getSortedSurveyAnswerDtos(SurveyAnswersDto surveyAnswersDto) {
        return surveyAnswersDto.getAnswers().stream()
                .sorted(Comparator.comparingInt(SurveyAnswerDto::getOrder))
                .collect(Collectors.toList());
    }

    private static List<SurveyQuestion> getSortedSurveyQuestionListFromSurvey(Survey survey) {
        return survey.getSurveyQuestions().stream()
                .sorted(Comparator.comparingInt(SurveyQuestion::getOrderNum))
                .collect(Collectors.toList());
    }

    public List<Survey> getRecommendSurveyList(Long memberId) {
        return surveyRepository.findSurveyByMemberJobAndAge(memberId);
    }

    public List<Survey> getSearchSurveyList(String search) {
        return surveyRepository.findByTitleContaining(search);
    }
}
