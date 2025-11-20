import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Suspense } from 'react';

import "./i18n.ts";

createRoot(document.getElementById("root")!).render(
  // Suspense: 로딩이 지연될 경우의 대체 화면 설정(다국어 지원 기능 부분)
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);
