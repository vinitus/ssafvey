package com.ssafy.ssafvey.domain.member.service;


import com.ssafy.ssafvey.domain.member.dto.LoginItem;
import com.ssafy.ssafvey.domain.member.dto.SignUpRequestDto;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

public interface MemberService {
    LoginItem getKakaoAccessToken(String code);

    Long getMemberId(HttpServletRequest request);
    void updateUser(Long id, SignUpRequestDto signUpRequestDto);

    void logout(String accessToken);

    Map<String,Object> refreshAccessToken(String refreshToken);
}
