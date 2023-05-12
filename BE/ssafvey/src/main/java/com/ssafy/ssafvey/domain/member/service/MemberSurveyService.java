package com.ssafy.ssafvey.domain.member.service;

import com.ssafy.ssafvey.domain.member.entity.Member;
import com.ssafy.ssafvey.domain.member.entity.MemberSurvey;
import com.ssafy.ssafvey.domain.member.repository.MemberRepository;
import com.ssafy.ssafvey.domain.survey.entity.Survey;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberSurveyService {

    private final MemberRepository memberRepository;

    public MemberSurveyService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public MemberSurvey createMemberSurvey(Long memberId, Survey survey, boolean isOwner) {
        Optional<Member> member = memberRepository.findById(memberId);
        MemberSurvey memberSurvey = new MemberSurvey();

        if (member.isPresent()) {
            memberSurvey.setSurvey(survey);
            memberSurvey.setMember(member.get());
            memberSurvey.setIsOwner(isOwner);
        }
        return memberSurvey;

    }
}
