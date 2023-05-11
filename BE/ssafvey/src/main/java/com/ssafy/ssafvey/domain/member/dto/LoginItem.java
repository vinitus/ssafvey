package com.ssafy.ssafvey.domain.member.dto;

import com.ssafy.ssafvey.domain.member.entity.GenderType;
import lombok.*;

import java.util.Map;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginItem {
    private String name;

    private String email;

    private GenderType genderType;
    private Boolean isRegistered;

    private Map<String, Object> token;
}
