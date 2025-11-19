# EVENTree 프로젝트

React 19 + TypeScript + Vite + Tailwind CSS 4 기반의 프로젝트입니다.

## 🛠️ 기술 스택

- **프레임워크**: React 19 (함수형 컴포넌트 + Hooks)
- **빌드 도구**: Vite
- **언어**: TypeScript
- **스타일링**: Tailwind CSS 4 (반응형 디자인)
- **라우팅**: React Router DOM
- **백엔드**: Firebase (Firestore, Authentication)
- **API**: Axios (공공데이터 API 연동)
- **다국어**: react-i18next (한국어 + 영어)
- **UI 상태**: react-hot-toast (로딩/성공/오류 알림)

## 📋 요구사항 체크리스트

- ✅ Node.js 22 이상
- ✅ React 19 (함수형 컴포넌트 + Hooks)
- ✅ Vite로 생성한 TypeScript 프로젝트
- ✅ Tailwind CSS 4 (반응형 브레이크포인트: sm, md, lg 등)
- ✅ React Router (3페이지 이상 구현 준비)
- ✅ Firebase 설정 (CRUD 기능 구현 준비)
- ✅ 공공데이터 API 연동 준비 (axios)
- ✅ 다국어 지원 (한국어 + 영어)
- ✅ UI 스타일 가이드 작성 (readme.txt)
- ✅ 로딩/성공/오류 상태 처리 (react-hot-toast)

## 📁 프로젝트 구조

```
EVENTree/
├── public/                 # 정적 파일
├── src/
│   ├── components/        # 재사용 가능한 컴포넌트
│   ├── pages/            # 페이지 컴포넌트 (3페이지 이상)
│   ├── hooks/            # 커스텀 React 훅
│   ├── utils/            # 유틸리티 함수
│   ├── services/         # API 서비스 (공공데이터 API)
│   ├── i18n/             # 다국어 설정
│   ├── config/           # 설정 파일 (Firebase 등)
│   ├── types/            # TypeScript 타입 정의
│   ├── App.tsx           # 메인 앱 컴포넌트
│   ├── main.tsx          # 엔트리 포인트
│   └── index.css         # Tailwind CSS import
├── .env                  # 환경 변수 (Git에 커밋하지 않음)
├── .env.example          # 환경 변수 예시
├── readme.txt            # UI 스타일 가이드
├── package.json          # 프로젝트 의존성
├── tsconfig.json         # TypeScript 설정
├── vite.config.ts        # Vite 설정
└── README.md             # 프로젝트 문서
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env` 파일을 열고 다음 값들을 설정하세요:

```env
# Firebase 설정 (Firebase 콘솔에서 확인)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# 공공데이터 API 키 (https://www.data.go.kr/)
VITE_PUBLIC_DATA_API_KEY=your_api_key
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 빌드

```bash
npm run build
```

## 📦 설치된 주요 패키지

### Dependencies
- `react` ^19.2.0 - React 라이브러리
- `react-dom` ^19.2.0 - React DOM
- `react-router-dom` ^7.9.6 - 라우팅
- `firebase` ^12.6.0 - Firebase SDK
- `axios` ^1.13.2 - HTTP 클라이언트
- `react-i18next` ^16.3.4 - 다국어 지원
- `i18next` ^25.6.3 - 다국어 코어
- `react-hot-toast` ^2.6.0 - 알림 메시지

### Dev Dependencies
- `typescript` ~5.9.3 - TypeScript
- `vite` 7.2.2 - 빌드 도구
- `tailwindcss` ^4.0.0 - Tailwind CSS
- `@tailwindcss/vite` ^4.0.0 - Tailwind Vite 플러그인
- `@vitejs/plugin-react` ^5.1.0 - React Vite 플러그인

## 🎨 UI 스타일 가이드

UI 스타일 가이드는 `readme.txt` 파일에 상세히 작성되어 있습니다.
컴포넌트 개발 시 반드시 참고하세요.

주요 내용:
- 컬러 팔렛트
- 폰트 시스템
- 버튼 스타일
- 입력 필드 스타일
- 반응형 브레이크포인트 (sm, md, lg, xl, 2xl)
- 로딩/성공/오류 상태 표시

## 🌐 다국어 지원

- 기본 언어: 한국어 (ko)
- 추가 언어: 영어 (en)
- 설정 파일: `src/i18n/config.ts`
- 데이터베이스 데이터는 번역하지 않음

## 🔥 Firebase 설정

1. Firebase 콘솔(https://console.firebase.google.com/)에서 프로젝트 생성
2. Firestore Database 활성화
3. Authentication 설정
4. 프로젝트 설정에서 웹 앱 추가
5. 설정 값을 `.env` 파일에 입력

## 📊 공공데이터 API

1. 공공데이터포털(https://www.data.go.kr/) 회원가입
2. 원하는 API 선택 및 활용신청
3. 발급받은 인증키를 `.env` 파일에 입력
4. `src/services/api.ts`에서 API 엔드포인트 설정

## 📱 반응형 디자인

Tailwind CSS 브레이크포인트를 사용한 반응형 디자인:
- `sm:` - 640px 이상
- `md:` - 768px 이상
- `lg:` - 1024px 이상
- `xl:` - 1280px 이상
- `2xl:` - 1536px 이상

## 🔄 CRUD 기능

Firebase Firestore를 사용한 CRUD 기능 구현 예정:
- Create (생성)
- Read (조회)
- Update (수정)
- Delete (삭제)

각 기능은 `src/services/` 폴더에 구현됩니다.

## ✅ 상태 관리

모든 UI에서 다음 상태를 적절히 표시:
- 로딩 상태 (Loading spinner/skeleton)
- 성공 상태 (Success toast)
- 오류 상태 (Error toast/message)

react-hot-toast를 사용하여 사용자에게 피드백 제공.

## 📝 개발 가이드라인

1. **컴포넌트**: 함수형 컴포넌트 사용
2. **Hooks**: React 19 훅 활용
3. **타입**: TypeScript 타입 정의 필수
4. **스타일**: Tailwind CSS 유틸리티 클래스 사용
5. **반응형**: Tailwind 브레이크포인트만 사용
6. **라우팅**: React Router로 3페이지 이상 구현
7. **백엔드**: Firebase로 CRUD 각 1개 이상
8. **다국어**: 모든 UI 텍스트 번역 (데이터 제외)
9. **상태**: 로딩/성공/오류 피드백 필수

## 🎯 다음 단계

1. Firebase 프로젝트 생성 및 설정
2. 공공데이터 API 선택 및 인증키 발급
3. 페이지 컴포넌트 3개 이상 구성
4. 라우팅 설정
5. CRUD 기능 구현
6. 반응형 디자인 적용
7. 다국어 텍스트 추가
8. 로딩/에러 처리 구현

## 📄 라이선스

이 프로젝트는 학습 목적으로 만들어졌습니다.

