package ssafvey.backend.dto;

import lombok.*;
import ssafvey.backend.domain.Member;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {

    private String name;

    private Boolean isRegistered;

    public static LoginResponseDto toLoginResponse(LoginItem loginItem){
        // 빌더 방식으로 DB에 저장
        return  LoginResponseDto.builder()
                .name(loginItem.getName())
                .isRegistered(loginItem.getIsRegistered())
                .build();
    }

}
