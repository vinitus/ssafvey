# 📝 설문조사 중개 플랫폼, SSAFVEY

![SSAFVEY_LOGO](https://github.com/vinitus/ssafvey/assets/97886013/57faf5d1-82e7-405f-8ea8-2d6af2bce5b4)

## ⌛️ 프로젝트 진행 기간

2023.04.10(월) ~ 2023.05.19(금) (40일간 진행)<br>

## 🌞 팀원 소개

### 6B

비전공자 여섯이 모인 새로움에 관심 많은 6B

- 이정범 - 팀장, BackEnd, 배포
- 강신욱 - FrontEnd
- 김성수 - FrontEnd
- 김수빈 - FrontEnd
- 이유영 - BackEnd, 배포
- 최성빈 - BackEnd

## ✔️ 아키텍처 구성도

![architecture](https://github.com/vinitus/ssafvey/assets/97886013/7387ee80-d3ec-4786-b489-16c1c2252ae9)

## ✔️ 주요 기능

### 1) 손쉬운 설문조사 생성

- 지정된 템플릿을 기반으로 엑셀을 작성하고 업로드를 하면 설문조사 생성이 가능
- 직접 설문조사 만들기 탭을 통해서 생성 가능

### 2) 설문조사 참여

- 한페이지에 하나씩 질문이 있고, 진행도를 상단의 ProgressBar로 확인할 수 있음

### 3) 설문조사 보상으로 받는 복권

- 설문조사가 종료되면 복권을 받을 수 있음

### 4) 포인트로 상품 교환

- 복권을 사용하면 포인트가 지급되고, 지급된 포인트를 사용할 수 

## ✔️ 주요 기술

### 1) PWA

- Progressive Web App으로 웹과 네이티브 앱의 기능 모두의 이점을 갖도록 수 많은 특정 기술과 표준 패턴을 사용해 개발된 웹 앱
- AOS, IOS 모두 링크/설치를 통한 사용, 데스크탑을 이용한 사용 모두 가능

## ✔️ 프로젝트 파일 구조

```
Repository
 │
 ├── BE
 │     │
 │     ├── build
 │     │     ├── ...
 │     │
 │     ├── out
 │     │     ├── ...
 │     │
 │     ├── ssafvey
 │     │     ├── gradle
 |     |     |     ├── ...
 │     │     ├── src
 |     |     |     ├── main
 |     |     |     |     ├── ...
 |     |     |     ├── test
 │     │
 │     ├── build.gradle
 │     ├── gradlew
 │
 │
 ├── FE
 │     │
 │     ├── public
 │     │      ├── fonts
 │     │      │    ├── ...
 │     │      │
 │     │      ├── banner
 │     │      │    ├── ...
 │     │      │
 │     │      ├── excel
 │     │      │    ├── ...
 │     │      │
 │     │      ├── icons
 │     │      │    ├── ...
 │     │      │
 │     │      ├── navbar
 │     │      │    ├── ...
 │     │      │
 │     │      ├── survey
 │     │      │    ├── ...
 │     │      │
 │     │      ├── ...
 │     │
 │     ├── src
 │     │       ├── Api
 │     │       │       ├── ...
 │     │       │
 │     │       ├── Components
 │     │       │       ├── Create
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── Exchange
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── Home
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── Modal
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── MyPage
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── Search
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── SignIn
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── Survey
 │     │       │       │      ├── ...
 │     │       │
 │     │       ├── hooks
 │     │       │       ├── ...
 │     │       │
 │     │       ├── module
 │     │       │       ├── ...
 │     │       │
 │     │       ├── Pages
 │     │       │       ├── ...
 │     │       │
 │     │       ├── Store
 │     │       │       ├── ...
 │     │       │
 │     │       ├── types
 │     │       │       ├── ...
 │     │       │
 │     │       ├── UI
 │     │       │       ├── ...
 │     │       │
 │     │       ├── Util
 │     │       │       ├── ...
 │     │       │
 │     │       ├── App.module.css
 │     │       ├── App.tsx
 │     │       ├── index.css
 │     │       ├── main.tsx
 │     │       ├── router.tsx
 │     │       ├── vite-env.d.ts
 │     │
 │     ├── README.md
 │     ├── ...
 │
 │
 ├── jenkins
 │     │
 │     ├── backjenkinsfile
 │     ├── frontjenkinsfile
 │
 │
 ├── docs
 │     │
 │     ├── img
 │     │    ├── ...
 │     │
 │     ├── ...
 │
 │
 ├── exec
 │     │
 │     ├── SSAFVEY_포팅_매뉴얼.pdf
 │
 ├── README.md
 ├── ...
```

## ✔️ 협업 툴

- GitLab
- Notion
- Figma
- JIRA
- MatterMost
- Webex

## ✔️ 협업 환경

- GitLab
  - 코드의 버전 관리
  - 개발 이슈 관리 및 해결을 위한 회의
  - MR과 팀원의 코드리뷰
- Notion
  - 기획 단계에서 도출된 아이디어 정리
  - 회의록과 팀미팅을 기록하여 의견과 해결사항을 정리
  - 팀 그라운드 룰을 정리
  - Jira 일정 계획 수립
  - Git Commit 컨벤션 정리
  - 참고자료 정리
  - Back-end, Front-end 별 개발 이슈 정리
  - API 상태 코드 정리
- Figma
  - UI/UX에 초점을 둔 실시간 협업
  - SSAFVEY 만의 메인 컬러 지정
  - 목업과 와이어프레임 정리
- Jira
  - 일주일 단위로 프로젝트 일정 관리
  - 2023.04.10 ~ 2023.05.19 기간의 일정 관리
  - 기획, 설계, 개발, 정기 회의, 내부 행사, 개인 공부, 발표

## ✔️ 프로젝트 산출물

- [기능 명세서](https://chipped-cart-851.notion.site/3af3b36b0dcf41b2a16622d5b459edfd?v=1b071cec2e7f4afdbfc087d9dcd0939c)
- [API 명세서](https://chipped-cart-851.notion.site/8c6085ecf0884dba9fadcbb47c576b34?v=7d87f6d9b8e74d2e91888e05f74e39ba)
- ![erd](https://github.com/vinitus/ssafvey/assets/97886013/143ae27b-6433-4a2c-9738-172acc12bf81)

## ✔️ 프로젝트 결과물

- [포팅 메뉴얼](https://chipped-cart-851.notion.site/SSAFVEY-895b4f7e839c4e87a54aabb1c600d5db)

## 📝 Next Novel 서비스 화면

### 홈 및 로그인/회원가입

![kakaologin](https://github.com/vinitus/ssafvey/assets/97886013/05e64dde-fc40-460d-a8f0-cc59fd21bd15)

### 설문조사 참여하기

![dosurvey](https://github.com/vinitus/ssafvey/assets/97886013/1fc5797a-50a7-4a86-bbc8-6500af48e95a)

### 설문조사 공유하기

![sharesurvey](https://github.com/vinitus/ssafvey/assets/97886013/4f09b61d-68cf-48eb-81c0-cf80d53b6123)

### 설문조사 만들기

![makesurvey](https://github.com/vinitus/ssafvey/assets/97886013/1be3612b-75e1-4d12-afd8-26278316eea0)

### 설문조사 결과보기

![resultsurvey](https://github.com/vinitus/ssafvey/assets/97886013/1a0de10e-a16c-4389-8937-de46ef72814b)

### 내정보보기

![mypage](https://github.com/vinitus/ssafvey/assets/97886013/0c2e4baf-4d20-40c1-9569-0229aa762a28)

### 기프티콘 사용하기

![usecoupon](https://github.com/vinitus/ssafvey/assets/97886013/1dcafa52-74fa-4847-bd6e-11d9c6abfe1d)

### 로또 열기

![opencoupon](https://github.com/vinitus/ssafvey/assets/97886013/4cd79c5b-9492-4e59-8948-e27c95618082)

