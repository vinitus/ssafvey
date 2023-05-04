package com.ssafy.ssafvey.domain.member.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 인증 엔티티
 * ROLE_USER, ROLE_ADMIN, ROLE_AUTH
 */
@Entity
@Table(name = "authority")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Authority {
    // 권한 설정
    @Id
    @Column(name = "authority_name", length = 50)
    private String authorityName;
    //  "ROLE_USER" 권한 이름을 가진 Authority 객체를 생성하여 반환
    public static Authority user(){
        return Authority.builder()
                .authorityName("ROLE_USER")
                .build();
    }
    //  //  "ROLE_AUTH" 권한 이름을 가진 Authority 객체를 생성하여 반환
    public static Authority auth(){
        return Authority.builder()
                .authorityName("ROLE_AUTH")
                .build();
    }
}