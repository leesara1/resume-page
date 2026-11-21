import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 상대 경로로 빌드해 GitHub Pages의 어떤 저장소 주소(/resume-page/ 등)에서도 동작하게 함
export default defineConfig({
  plugins: [react()],
  base: './',
})
