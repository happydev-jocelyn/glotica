# Glotica Frontend Code Style Guide

이 문서는 Glotica 프론트엔드(React + Next.js) 코드 작성 규칙을 정의합니다.  
AI 도구(Copilot, Claude 등)는 이 문서를 참고하여 **항상 일관된 코드 스타일**로 제안합니다.

---

## 1. 언어 및 기본 규칙
- 언어: **TypeScript** (모든 컴포넌트, 함수, API 타입 명시)
- 들여쓰기: 2 spaces
- 줄 길이: 최대 100자
- 세미콜론 `;` 항상 사용
- 문자열은 큰따옴표 `"` 사용
- 변수/함수명: **camelCase**
- 컴포넌트명/타입/클래스명: **PascalCase**
- 불필요한 `console.log` 금지 (`console.error`, `console.warn`만 허용)

---

## 2. 프로젝트 구조
```
src
  app            # Next.js App Router
  components     # UI 컴포넌트
  lib            # API, 유틸 함수
  styles         # Tailwind / CSS modules
```
- **공통 규칙**: 기능 단위로 모듈화, 재사용성 높은 컴포넌트는 `components`에 위치.

---

## 3. 컴포넌트 작성 규칙
- 함수형 컴포넌트만 사용 (React Hooks 기반).
- Props는 항상 타입 정의:
  ```tsx
  type ButtonProps = {
    label: string;
    onClick: () => void;
  };

  export function Button({ label, onClick }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {label}
      </button>
    );
  }
  ```
- `React.FC` 사용 금지.
- JSX는 **self-closing** 태그 권장 (`<img />`, `<input />`).

---

## 4. 상태 관리
- 간단한 상태: `useState`, `useReducer`
- 전역 상태: **Zustand** 사용
- 서버 상태: React Query (데이터 fetch & 캐싱)

---

## 5. API 호출 규칙
- 모든 API 함수는 `src/lib/api.ts`에 정의.
- 응답은 반드시 타입 명시:
  ```ts
  interface TranslationResponse {
    status: string;
    data: {
      text: string;
      translated: string;
    };
  }
  ```
- 에러는 `try/catch`로 처리하고 사용자 메시지 제공.

---

## 6. 스타일링 규칙
- 기본 스타일: **Tailwind CSS**
- className 순서: `layout → spacing → color → 기타`
  - 예: `flex items-center justify-between p-4 bg-gray-100`
- 커스텀 CSS는 `styles` 폴더에 모아 관리.

---

## 7. Import 순서
1. React/Next.js core (`react`, `next/*`)
2. 외부 라이브 라이브러리
3. 내부 lib
4. 컴포넌트
5. 스타일 파일

---

## 8. Git 규칙
- Commit 메시지: **Conventional Commits**
  - `feat: add translation input UI`
  - `fix: resolve hydration warning in Navbar`
  - `refactor: extract Button component`
  - `docs: update README with setup guide`

---

## 9. 기타
- 문서화는 **영문** 우선.
- 테스트 파일은 `__tests__` 디렉토리에 위치.
- AI가 코드 제안 시 이 규칙을 위반하면 거부하고 수정 요청할 것.
