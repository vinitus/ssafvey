package com.ssafy.ssafvey.domain.member.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// 해당 예외가 발생하면 HTTP 응답 상태 코드로 CONFLICT(409)를 반환하도록 지정
@ResponseStatus(value = HttpStatus.CONFLICT)
public class DuplicateMemberException extends RuntimeException {
    public DuplicateMemberException() {
        super();
    }
    public DuplicateMemberException(String message, Throwable cause) {
        super(message, cause);
    }

    public DuplicateMemberException(String message) {
        super(message);
    }
    public DuplicateMemberException(Throwable cause) {
        super(cause);
    }
}
