package ssafvey.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import ssafvey.backend.domain.Member;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    Member findByEmail(String email);

}