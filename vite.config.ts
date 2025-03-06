import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // 타입 선언 파일 자동 생성
    }),
    vanillaExtractPlugin(), // ✅ Vanilla Extract 스타일 적용
  ],
  build: {
    lib: {
      entry: "src/index.ts", // ✅ 엔트리 파일 (컴포넌트 라이브러리 시작점)
      name: "NHComp",
      formats: ["es", "cjs", "umd"], // ✅ CommonJS(cjs), ESM(es), UMD 번들 추가
      fileName: (format) => format === "cjs" ? "index.js" : `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"], // React는 번들에서 제외하여 가벼운 패키지 유지
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
