import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

/**
 * 이 설정의 목적은 코드 스타일 통일이 아니라 "빌드가 못 잡는 런타임 버그"를 막는 것입니다.
 *
 * 훅 순서 위반(React #310)이 tsc 와 vite build 를 그대로 통과해 운영에 나간 적이 있습니다.
 * 훅 규칙은 타입이 아니라 호출 순서에 관한 규칙이라 타입 검사 대상이 아닙니다.
 *
 * 그래서 rules-of-hooks 만 error 로 두고, 나머지는 기존 코드를 무더기로 빨갛게 만들지 않도록
 * 경고 수준으로 둡니다. 규칙을 늘리는 건 언제든 할 수 있지만, 처음부터 수백 개가 뜨면
 * 아무도 안 보게 됩니다.
 */
export default tseslint.config(
  { ignores: ["dist", "dev-dist", "node_modules", "*.config.js", "*.config.ts"] },
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      // 이 두 개가 이 설정을 넣은 이유입니다.
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // 기존 코드에 이미 깔려 있는 것들 — 새로 짜는 코드에서만 눈에 띄게 경고로 둡니다.
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "no-empty": ["warn", { allowEmptyCatch: true }],
    },
  }
);
