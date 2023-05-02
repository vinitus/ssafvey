package ssafvey.backend.domain;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.annotation.Nullable;
import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", columnDefinition = "VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci")
    @NotNull
    private String name;
    @Nullable
    private int age;

    @Nullable
    private String password;

    @NotNull
    private String email;

    @Nullable
    private String gender;

    @Nullable
    @ElementCollection
    @CollectionTable(name = "member_jobs", joinColumns = @JoinColumn(name = "member_id"))
    @Column(name = "jobs", columnDefinition = "VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci")
    private List<String> jobs;

    @Nullable
    @Column(columnDefinition = "int default 0")
    private int couponCount;

    @Nullable
    private String refreshToken;

    @Nullable
    private Boolean isActive;
    @NotNull
    private Boolean isRegistered;

//    @ManyToMany
//    @JoinTable(
//            name = "member_survey",
//            joinColumns = @JoinColumn(name = "member_id"),
//            inverseJoinColumns = @JoinColumn(name = "survey_id")
//    )
//    private List<Survey> surveys;

    @ManyToMany
    @JoinTable(
            name = "user_authority_join",
            joinColumns = {@JoinColumn(name = "member_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;

//    public Member(int id){
//        this.id = id;
//    }
}
