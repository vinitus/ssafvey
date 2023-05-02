package ssafvey.backend.service;

import ssafvey.backend.dto.LoginItem;
import ssafvey.backend.dto.SignUpRequestDto;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

public interface MemberService {
    LoginItem getKakaoAccessToken(String code);

    int getMemberId(HttpServletRequest request);
    void updateUser(int id,SignUpRequestDto signUpRequestDto);

    void logout(String accessToken);

    Map<String,Object> refreshAccessToken(String refreshToken);
}
