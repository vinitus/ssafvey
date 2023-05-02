package ssafvey.backend.dto;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.istack.NotNull;
import lombok.*;
import ssafvey.backend.domain.Authority;
import ssafvey.backend.domain.Member;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignUpRequestDto {

    @NotNull
    private Integer age;

    @NotNull
    private List<String> jobs;

    @SneakyThrows
    public Member tomember(Member member,int id, SignUpRequestDto signUpRequestDto){
        System.out.println(signUpRequestDto.getJobs());
        Authority userAuthority = Authority.user();
        // 빌더 방식으로 DB에 저장
        return  Member.builder()
                .id(id)
                .name(member.getName())
                .email(member.getEmail())
                .jobs(signUpRequestDto.getJobs())
                .authorities(Set.of(userAuthority))
                .age(signUpRequestDto.getAge())
                .gender(member.getGender())
                .refreshToken(member.getRefreshToken())
                .isRegistered(true)
                .build();
    }
}
