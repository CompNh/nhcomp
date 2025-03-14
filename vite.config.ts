import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // 타입 선언 파일 자동 생성      
    }),
    
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    },    
    lib: {
      entry: "src/index.ts", // ✅ 엔트리 파일 (컴포넌트 라이브러리 시작점)
      name: "NHComp",
      formats: ["es", "cjs", "umd"], // ✅ CommonJS(cjs), ESM(es), UMD 번들 추가
      fileName: (format) => format === "cjs" ? "index.js" : `index.${format}.js`
      
    },
    rollupOptions: {
      external: [
        "react", 
        "react-dom", 
        "xlsx", 
        "jspdf", 
        "jspdf-autotable" // ✅ Excel, PDF 관련 라이브러리 번들 제외
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          xlsx: "XLSX",
          jspdf: "jsPDF",
          "jspdf-autotable": "jspdfAutoTable",
        },
      },
    },
  },
});
