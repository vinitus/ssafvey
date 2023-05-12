package com.ssafy.ssafvey.domain.member.repository;

import com.ssafy.ssafvey.domain.member.entity.MemberAnswerDescriptive;
import com.ssafy.ssafvey.domain.member.entity.PointHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PointHistoryRepository extends JpaRepository<PointHistory, Long> {

}
