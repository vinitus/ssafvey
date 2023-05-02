package ssafvey.backend.dto;

import lombok.*;

import java.util.Map;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginItem {
    private String name;
    private Boolean isRegistered;

    private Map<String, Object> token;
}
