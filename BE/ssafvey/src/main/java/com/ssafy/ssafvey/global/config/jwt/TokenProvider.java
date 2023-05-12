package com.ssafy.ssafvey.global.config.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;
import com.ssafy.ssafvey.domain.member.entity.Member;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class TokenProvider implements InitializingBean {

   private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);
   private static final String AUTHORITIES_KEY = "auth";
   private final String secret;
   private final long tokenValidityInMilliseconds;
   private Key key;

   //  JWT 토큰 발급 시 사용될 secret key와 토큰의 유효시간을 설정
   public TokenProvider(
      @Value("${jwt.secret}") String secret,
      @Value("${jwt.token-validity-in-minutes}") long tokenValidityInMinutes) {
      // secret key는 토큰을 암호화하고, 이를 통해 유효한 토큰인지 인증
      this.secret = secret;
      // tokenValidityInMilliseconds 변수는 발급된 토큰이 유효한 시간을 밀리초 단위로 저장
      this.tokenValidityInMilliseconds = tokenValidityInMinutes * 60 * 1000;
   }

   // TokenProvider 빈이 생성된 후에 자동으로 호출  비밀키를 초기화하는 역할
   @Override
   public void afterPropertiesSet() { // secret 값을 decode 하여 key 값에 저장
      byte[] keyBytes = Decoders.BASE64.decode(secret);
      // JWT의 서명 검증 시 사용되는 비밀키
      this.key = Keys.hmacShaKeyFor(keyBytes);
   }

   public String createToken(Member member, long times) {
      // 현재 시간(now)을 구하고, 유효기간(times)을 곱한 후 만료 일자(validity)를 계산
      long now = (new Date()).getTime();
      Date validity = new Date(now + this.tokenValidityInMilliseconds * times); // 만료 일자를 계산한다.
      // 회원 객체에서 권한 정보(authorities)를 추출하여, 토큰의 claim으로 설정
      String authorities = member.getAuthorities().stream().map(authority -> authority.getAuthorityName()).collect(Collectors.joining(","));
      return Jwts.builder()
              //  토큰 주체(subject)를 설정
              .setSubject(String.valueOf(member.getId()))
              .claim(AUTHORITIES_KEY, authorities)
              // 서명 추가 서명 키(key)는 Base64 디코딩된 시크릿(secret) 값으로 생성합니다.
              .signWith(key, SignatureAlgorithm.HS512)
              //  토큰의 만료 시간(expiration)을 설정
              .setExpiration(validity)
              // JWT 문자열을 생성하고 반환
              .compact();
   }

   public Authentication getAuthentication(String token) { // 토큰을 입력받아 권한 정보를 리턴한다.
      // 코드를 통해 토큰을 파싱하고, Claims 객체를 얻음 이 Claims 객체는 JWT 토큰의 payload 정보를 담고 있음
      Claims claims = Jwts
              .parserBuilder()
              .setSigningKey(key)
              .build()
              .parseClaimsJws(token)
              .getBody();
      //  AUTHORITIES_KEY 값을 추출한 후, 이 값을 쉼표(,)를 기준으로 나누어 GrantedAuthority 객체들의 리스트
      Collection<? extends GrantedAuthority> authorities =
         Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
            .map(SimpleGrantedAuthority::new)
            .collect(Collectors.toList());
      // 토큰에 저장된 사용자 아이디를 얻어 User 객체를 생성하고, 이를 UsernamePasswordAuthenticationToken 객체에 담아 Authentication 객체를 반환
      User principal = new User(claims.getSubject(), "", authorities);
      return new UsernamePasswordAuthenticationToken(principal, token, authorities); //
   }

   public boolean validateToken(String token) { // 토큰을 받아 유효성 검사를 실행
      try {
         // key 값을 사용하여 파싱을 수행
         Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
         return true;
      } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
         logger.info("잘못된 JWT 서명입니다.");
      } catch (ExpiredJwtException e) {
         logger.info("만료된 JWT 토큰입니다.");
      } catch (UnsupportedJwtException e) {
         logger.info("지원되지 않는 JWT 토큰입니다.");
      } catch (IllegalArgumentException e) {
         logger.info("JWT 토큰이 잘못되었습니다.");
      }
      return false;
   }
   //  Member 객체를 전달하고, 인자로 1을 전달하여 만료 시간을 1배로 설정한 후, 생성된 JWT Access Token을 반환하는 메소드
   public String createAccessToken(Member member) {
      return createToken(member, 30);
   }
   // refresh token을 생성하는 역할 createToken 메소드를 호출하여 member 정보와 14일 간의 유효기간을 가진 토큰을 생성
   public String createRefreshToken(Member member) {
      return createToken(member, 14*24*60);
   }
}
