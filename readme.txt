EVENTree 프로젝트 UI 스타일 가이드
===========================================

1. 컬러 팔렛트
--------------
주요 색상:
- Primary: #3B82F6 (파란색)
- Secondary: #10B981 (초록색)
- Accent: #F59E0B (주황색)
- Error: #EF4444 (빨간색)
- Warning: #F59E0B (노란색)
- Success: #10B981 (초록색)
- Info: #3B82F6 (파란색)

배경 색상:
- Background Primary: #FFFFFF (흰색)
- Background Secondary: #F3F4F6 (연한 회색)
- Background Dark: #1F2937 (어두운 회색)

텍스트 색상:
- Text Primary: #111827 (검정에 가까운 회색)
- Text Secondary: #6B7280 (중간 회색)
- Text Disabled: #9CA3AF (연한 회색)
- Text Light: #FFFFFF (흰색)

2. 폰트
-------
기본 폰트: system-ui, -apple-system, sans-serif
폰트 크기:
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)

폰트 굵기:
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

3. 버튼 스타일
--------------
Primary Button:
- 배경: bg-blue-600
- 텍스트: text-white
- 호버: hover:bg-blue-700
- 패딩: px-4 py-2
- 둥근 모서리: rounded-lg
- 전환 효과: transition-colors duration-200

Secondary Button:
- 배경: bg-gray-200
- 텍스트: text-gray-800
- 호버: hover:bg-gray-300
- 패딩: px-4 py-2
- 둥근 모서리: rounded-lg
- 전환 효과: transition-colors duration-200

Outline Button:
- 배경: bg-transparent
- 테두리: border-2 border-blue-600
- 텍스트: text-blue-600
- 호버: hover:bg-blue-50
- 패딩: px-4 py-2
- 둥근 모서리: rounded-lg
- 전환 효과: transition-colors duration-200

Disabled Button:
- 배경: bg-gray-300
- 텍스트: text-gray-500
- 커서: cursor-not-allowed
- 투명도: opacity-60

4. 입력 필드 스타일
-------------------
기본 Input:
- 테두리: border border-gray-300
- 포커스 테두리: focus:border-blue-500 focus:ring-2 focus:ring-blue-200
- 패딩: px-3 py-2
- 둥근 모서리: rounded-md
- 배경: bg-white
- 전환 효과: transition-colors duration-200

Error Input:
- 테두리: border-red-500
- 포커스 테두리: focus:border-red-600 focus:ring-2 focus:ring-red-200

Label:
- 텍스트: text-sm font-medium text-gray-700
- 여백: mb-1

Helper Text:
- 텍스트: text-sm text-gray-500
- 여백: mt-1

Error Message:
- 텍스트: text-sm text-red-600
- 여백: mt-1

5. 카드 스타일
--------------
- 배경: bg-white
- 테두리: border border-gray-200
- 그림자: shadow-md
- 둥근 모서리: rounded-lg
- 패딩: p-6
- 호버 효과: hover:shadow-lg transition-shadow duration-200

6. 로딩 상태
------------
Spinner:
- 색상: border-blue-600
- 크기: w-8 h-8 (기본), w-4 h-4 (작은 크기)
- 애니메이션: animate-spin

Skeleton:
- 배경: bg-gray-200
- 애니메이션: animate-pulse

7. 알림 메시지 (Toast)
----------------------
Success Toast:
- 배경: bg-green-100
- 텍스트: text-green-800
- 아이콘: 체크 마크 (초록색)

Error Toast:
- 배경: bg-red-100
- 텍스트: text-red-800
- 아이콘: X 마크 (빨간색)

Warning Toast:
- 배경: bg-yellow-100
- 텍스트: text-yellow-800
- 아이콘: 느낌표 (노란색)

Info Toast:
- 배경: bg-blue-100
- 텍스트: text-blue-800
- 아이콘: 정보 (파란색)

8. 반응형 브레이크포인트 (Tailwind CSS)
---------------------------------------
- sm: 640px 이상
- md: 768px 이상
- lg: 1024px 이상
- xl: 1280px 이상
- 2xl: 1536px 이상

반응형 디자인 적용 예시:
- 모바일 우선 설계
- sm 이상: 2열 그리드
- md 이상: 3열 그리드
- lg 이상: 4열 그리드

9. 간격 (Spacing)
------------------
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)

10. 애니메이션
--------------
- 전환 시간: duration-200 (기본), duration-300 (부드러움)
- 이징: ease-in-out
- 페이드인: fade-in
- 슬라이드: slide-in

11. 그림자
----------
- sm: shadow-sm (작은 그림자)
- md: shadow-md (중간 그림자)
- lg: shadow-lg (큰 그림자)
- xl: shadow-xl (매우 큰 그림자)

12. 아이콘
----------
- 크기: w-5 h-5 (기본), w-6 h-6 (중간), w-8 h-8 (큰 크기)
- 색상: 텍스트 색상과 동일하게 유지
- 정렬: inline-block align-middle

13. 접근성 (Accessibility)
--------------------------
- 포커스 표시: focus:outline-none focus:ring-2 focus:ring-offset-2
- 색상 대비: WCAG 2.1 AA 기준 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환성

14. 다크 모드 (선택 사항)
-------------------------
- 다크 모드 적용 시 dark: 접두사 사용
- 배경: dark:bg-gray-900
- 텍스트: dark:text-gray-100
- 카드: dark:bg-gray-800

15. 레이아웃
------------
Container:
- 최대 너비: max-w-7xl
- 중앙 정렬: mx-auto
- 패딩: px-4 sm:px-6 lg:px-8

Grid:
- 기본: grid gap-4
- 반응형: grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4

Flex:
- 중앙 정렬: flex items-center justify-center
- 양 끝 정렬: flex items-center justify-between

이 스타일 가이드는 프로젝트 전체에 일관된 UI/UX를 제공하기 위한 것입니다.
모든 컴포넌트 개발 시 이 가이드를 참고하여 구현해주세요.
