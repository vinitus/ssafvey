package com.ssafy.ssafvey.domain.member.dto;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {

    private String name;

    private String email;

    private GenderType genderType;

    private Boolean isRegistered;

    public static LoginResponseDto toLoginResponse(LoginItem loginItem){
        // 빌더 방식으로 DB에 저장
        return  LoginResponseDto.builder()
                .name(loginItem.getName())
                .email(loginItem.getEmail())
                .genderType(loginItem.getGenderType())
                .isRegistered(loginItem.getIsRegistered())
                .build();
    }

}
