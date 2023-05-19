package com.ssafy.ssafvey.domain.member.service;

import com.ssafy.ssafvey.domain.member.entity.MemberAnswerDescriptive;
import com.ssafy.ssafvey.domain.member.entity.MemberAnswerMultipleChoice;
import com.ssafy.ssafvey.domain.member.repository.MemberAnswerDescriptiveRepository;
import com.ssafy.ssafvey.domain.member.repository.MemberAnswerMultipleChoiceRepository;
import com.ssafy.ssafvey.domain.survey.dto.request.SurveyAnswerDto;
import com.ssafy.ssafvey.domain.survey.entity.SurveyQuestion;
import org.springframework.stereotype.Service;

@Service
public class MemberAnswerServiceImpl implements MemberAnswerService {

    private final MemberAnswerDescriptiveRepository memberAnswerDescriptiveRepository;
    private final MemberAnswerMultipleChoiceRepository memberAnswerMultipleChoiceRepository;

    public MemberAnswerServiceImpl(MemberAnswerDescriptiveRepository memberAnswerDescriptiveRepository, MemberAnswerMultipleChoiceRepository memberAnswerMultipleChoiceRepository) {
        this.memberAnswerDescriptiveRepository = memberAnswerDescriptiveRepository;
        this.memberAnswerMultipleChoiceRepository = memberAnswerMultipleChoiceRepository;
    }

    @Override
    public MemberAnswerMultipleChoice createMemberAnswerMultipleChoice(SurveyAnswerDto surveyAnswerDto, SurveyQuestion surveyQuestion, String uuid) {
        MemberAnswerMultipleChoice memberAnswerMultipleChoice = MemberAnswerMultipleChoice.builder()
                .orderNum(surveyAnswerDto.getChosenOrder())
                .surveyQuestion(surveyQuestion)
                .distinctUUID(uuid)
                .build();
        memberAnswerMultipleChoiceRepository.save(memberAnswerMultipleChoice);
        return memberAnswerMultipleChoice;
    }

    @Override
    public MemberAnswerDescriptive createMemberAnswerDescriptive(SurveyAnswerDto surveyAnswerDto, SurveyQuestion surveyQuestion, String uuid) {
        MemberAnswerDescriptive memberAnswerDescriptive = MemberAnswerDescriptive.builder()
                .surveyQuestion(surveyQuestion)
                .answer(surveyAnswerDto.getAnswer())
                .distinctUUID(uuid)
                .build();
        memberAnswerDescriptiveRepository.save(memberAnswerDescriptive);
        return memberAnswerDescriptive;
    }
}
