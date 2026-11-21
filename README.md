# resume-page

이사라 이력서 웹페이지 (Vite + React + TypeScript, GitHub Pages 배포).

## 내용 고치기

모든 문구는 `src/data/resume.ts` 한 파일에 있습니다. 구성도는 `src/components/ArchitectureDiagram.tsx`, 스타일은 `src/index.css`입니다.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 생성
```

PDF가 필요하면 페이지 오른쪽 위 [PDF로 저장] 버튼(브라우저 인쇄 → PDF로 저장)을 쓰면 됩니다. 인쇄용 A4 스타일이 따로 들어 있습니다.

## GitHub Pages 배포

1. GitHub에 새 저장소를 만듭니다 (예: `resume-page`, Public).
2. 이 폴더를 올립니다.
   ```bash
   git init && git add . && git commit -m "init resume page"
   git branch -M main
   git remote add origin https://github.com/leesara1/resume-page.git
   git push -u origin main
   ```
3. 저장소 Settings → Pages → Source를 **GitHub Actions**로 바꿉니다.
4. `main`에 push할 때마다 `.github/workflows/deploy.yml`이 빌드해서 배포합니다.
   주소: `https://leesara1.github.io/resume-page/`

저장소 이름을 `leesara1.github.io`로 만들면 `https://leesara1.github.io/`에 바로 뜹니다. `vite.config.ts`의 `base: './'` 덕분에 어느 쪽이든 설정을 바꿀 필요가 없습니다.
