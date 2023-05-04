package com.ssafy.ssafvey.domain.member.controller;



import com.ssafy.ssafvey.domain.member.dto.LoginItem;
import com.ssafy.ssafvey.domain.member.dto.LoginResponseDto;
import com.ssafy.ssafvey.domain.member.dto.SignUpRequestDto;
import com.ssafy.ssafvey.domain.member.service.MemberService;
import com.ssafy.ssafvey.global.config.jwt.JwtFilter;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@Api(tags = "사용자 관련 기능 API")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @ApiOperation(value="카카오로그인", notes = "카카오 로그인을 합니다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK(회원 가입 성공)"),
            @ApiResponse(code = 400, message = "BAD REQUEST(요청 실패)"),
            @ApiResponse(code = 500, message = "서버에러")
    })
    @GetMapping("/api/member/login")
    public ResponseEntity kakaoLogin(@RequestParam String code) {
        LoginItem loginItem = memberService.getKakaoAccessToken(code);
        LoginResponseDto loginResponseDto = LoginResponseDto.toLoginResponse(loginItem);
        return ResponseEntity.status(HttpStatus.OK)
                .headers(returnTokenHeader(loginItem.getToken()))
                .body(loginResponseDto);
    }

    @ApiOperation(value="로그아웃", notes = "헤더의 access 토큰 정보를 통해 refreshToken을 삭제 시킨다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK(로그아웃 성공)"),
            @ApiResponse(code = 400, message = "BAD REQUEST(요청 실패)"),
            @ApiResponse(code = 500, message = "서버에러")
    })
    @GetMapping(path="/api/auth/member/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        // jwt토큰값을 받습니다.
        String accessToken = request.getHeader(JwtFilter.ACCESS_HEADER);
        // logout(토큰값 제거)
        memberService.logout(accessToken.substring(7));

        return ResponseEntity.status(HttpStatus.OK).body("로그아웃 완료");
    }

    @ApiOperation(value="유저 업데이트", notes = "유저 정보를 업데이트 합니다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK(회원 가입 성공)"),
            @ApiResponse(code = 400, message = "BAD REQUEST(요청 실패)"),
            @ApiResponse(code = 500, message = "서버에러")
    })
    @PutMapping("/api/auth/member/changeProfil")
    public ResponseEntity updateUser(HttpServletRequest request, @RequestBody SignUpRequestDto signUpRequestDto ) {
        memberService.updateUser(memberService.getMemberId(request),signUpRequestDto);

        return ResponseEntity.status(HttpStatus.OK).body("저장 완료");
    }



    @ApiOperation(value = "Access 토큰 재발급", notes = "헤더의 refresh 토큰 정보를 통해 access 토큰을 재발급한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Access Token 재발급 성공"),
            @ApiResponse(code = 400, message = "기타 오류"),
            @ApiResponse(code = 401, message = "UNAUTHORIZED(재발급 실패, 로그아웃)"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    @GetMapping("/api/member/refresh")
    public ResponseEntity<?> refreshAccessToken(HttpServletRequest request) {
        // refreshAccessToken을 조회해서 재생성
        String refreshToken = request.getHeader(JwtFilter.REFRESH_HEADER);
        Map<String, Object> result = memberService.refreshAccessToken(refreshToken.substring(7));
        HttpHeaders headers = returnTokenHeader(result);

        return ResponseEntity.status(200).headers(headers).build();
    }

    public HttpHeaders returnTokenHeader(Map<String, Object> result) {
        //  HTTP 요청 헤더에 액세스 토큰과 리프레시 토큰을 추가하여 인증에 필요한 정보를 제공
        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtFilter.ACCESS_HEADER, (String) result.get("accessToken"));
        headers.add(JwtFilter.REFRESH_HEADER, (String) result.get("refreshToken"));

        return headers;
    }

}
