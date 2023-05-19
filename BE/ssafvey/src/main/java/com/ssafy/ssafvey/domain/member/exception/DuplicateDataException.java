package com.ssafy.ssafvey.domain.member.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// 예외가 발생할 때 HTTP 응답 코드가 409 (Conflict)로 설정됨을 의미
@ResponseStatus(value = HttpStatus.CONFLICT)
public class DuplicateDataException extends RuntimeException {
    public DuplicateDataException() {
        super();
    }
    public DuplicateDataException(String message, Throwable cause) {
        super(message, cause);
    }

    public DuplicateDataException(String message) {
        super(message);
    }
    public DuplicateDataException(Throwable cause) {
        super(cause);
    }
}
