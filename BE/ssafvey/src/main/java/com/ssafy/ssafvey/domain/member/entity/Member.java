package com.ssafy.ssafvey.domain.member.entity;

import com.ssafy.ssafvey.domain.shop.entity.Order;
import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
@ToString
public class Member {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    private int age;

    @Nullable
    private String password;

    @NotNull
    private String email;

    @Nullable
    @Enumerated(EnumType.STRING)
    private GenderType genderType;

    @OneToMany(mappedBy = "member")
    private List<MemberJob> memberJobs = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<MemberSurvey> memberSurveys = new ArrayList<>();

    @Nullable
    @Column(columnDefinition = "int default 0")
    private int couponCount;

    @Nullable
    private String refreshToken;

    @Nullable
    private Boolean isActive;
    @NotNull
    private Boolean isRegistered;

    @OneToMany(mappedBy = "member")
    private List<Order> orders = new ArrayList<>();



    @ManyToMany
    @JoinTable(
            name = "user_authority_join",
            joinColumns = {@JoinColumn(name = "member_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;
}