package com.ssafy.ssafvey.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.UiConfiguration;
import springfox.documentation.swagger.web.UiConfigurationBuilder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

/**
 * API 문서 관련 swagger2 설정 정의.
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).useDefaultResponseMessages(false)
                .select()
                // Swagger가 문서화 할 대상 API 컨트롤러를 지정 여기서는 com.ssafy.ssafvey 패키지의 컨트롤러를 대상으로 설정
                .apis(RequestHandlerSelectors.basePackage("com.ssafy.ssafvey"))
                // 모든 API 엔드포인트를 문서화하도록 지정합니다.
                .paths(PathSelectors.any())
                .build()
                // 보안 컨텍스트를 추가
                .securityContexts(newArrayList(securityContext()))
                // API 키 인증 방식을 사용
                .securitySchemes(newArrayList(apiKey()));
    }
    // 첫번째 인자는 스키마의 이름  두번째 인자는 토큰 값을 헤더에 실어 보낼 때 사용할 이름 세번째 인자는 헤더의 이름
    private ApiKey apiKey() {
        return new ApiKey(SECURITY_SCHEMA_NAME, "accessToken", "header");
    }

//    private ApiKey apiKeySocial() {
//        return new ApiKey(SECURITY_SCHEMA_NAME+" SOCIAL", "access_token", "header");
//    }
//
//    private ApiKey apiKeyRefresh() {
//        return new ApiKey(SECURITY_SCHEMA_NAME+" REFRESH", "refreshToken", "header");
//    }

    private SecurityContext securityContext() {
        return SecurityContext.builder()
                // 안 스키마를 참조하도록 지정, defaultAuth() 메서드는 API 문서에 표시할 보안 요구사항
                .securityReferences(defaultAuth())
                .build();
    }

    public static final String SECURITY_SCHEMA_NAME = "JWT";
    public static final String AUTHORIZATION_SCOPE_GLOBAL = "global";
    public static final String AUTHORIZATION_SCOPE_GLOBAL_DESC = "accessEverything";

    //  API 인증정보 설정
    private List<SecurityReference> defaultAuth() {
        // SECURITY_SCHEMA_NAME과 authorizationScopes 값을 사용하여 인증 정보를 생성하여 반환
        AuthorizationScope authorizationScope = new AuthorizationScope(AUTHORIZATION_SCOPE_GLOBAL, AUTHORIZATION_SCOPE_GLOBAL_DESC);
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return newArrayList(new SecurityReference(SECURITY_SCHEMA_NAME, authorizationScopes));
    }

    //  Swagger-UI에서 사용되는 UI Configuration을 정의
    @Bean
    UiConfiguration uiConfig() {
        return UiConfigurationBuilder.builder()
//                .supportedSubmitMethods(newArrayList("get").toArray(new String[0])) // try it 기능 활성화 범위
//                .operationsSorter(METHOD)
                .build();
    }
}