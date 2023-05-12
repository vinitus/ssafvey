package com.ssafy.ssafvey.domain.member.service;

import com.ssafy.ssafvey.domain.member.entity.MemberAnswerDescriptive;
import com.ssafy.ssafvey.domain.member.entity.MemberAnswerMultipleChoice;
import com.ssafy.ssafvey.domain.survey.dto.request.SurveyAnswerDto;
import com.ssafy.ssafvey.domain.survey.entity.SurveyQuestion;

public interface MemberAnswerService {
    MemberAnswerMultipleChoice createMemberAnswerMultipleChoice(SurveyAnswerDto surveyAnswerDto, SurveyQuestion surveyQuestion, String uuid);

    MemberAnswerDescriptive createMemberAnswerDescriptive(SurveyAnswerDto surveyAnswerDto, SurveyQuestion surveyQuestion, String uuid);
}
