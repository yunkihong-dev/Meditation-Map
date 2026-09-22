// vitest/config 의 defineConfig 는 vite 의 것을 그대로 재수출하면서 test 블록 타입만 더해 준다.
// plugins·server·resolve 설정은 아래 그대로다.
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "favicon.ico", "apple-touch-icon-180x180.png", "robots.txt"],
      manifest: {
        name: "명상 웰니스 지도",
        short_name: "명상 웰니스 지도",
        description: "전국 명상 및 수행 장소를 찾아보세요",
        theme_color: "#4B0082",
        background_color: "#FFFAF8",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
      },
    }),
  ],
  server: {
    host: "localhost",
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    // 테스트 파일만 수집한다. e2e·빌드 산출물까지 긁어 가면 실행 시간이 무의미하게 늘어난다.
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
});
