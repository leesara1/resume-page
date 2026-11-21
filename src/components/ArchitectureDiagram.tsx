type BoxProps = { x: number; y: number; w: number; h: number; main?: boolean }

const Box = ({ x, y, w, h, main }: BoxProps) => (
  <rect x={x} y={y} width={w} height={h} rx={8} className={main ? 'dg-box dg-main' : 'dg-box'} />
)

export default function ArchitectureDiagram() {
  return (
    <svg
      className="diagram"
      viewBox="0 0 760 464"
      role="img"
      aria-label="웹 · 모바일 · 현장 설비가 하나의 백엔드로 고객사 5곳을 처리하는 시스템 구성"
    >
      <defs>
        <marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" className="dg-arrow" />
        </marker>
      </defs>

      <g className="dg-line">
        <path d="M140 88V120" markerEnd="url(#arch-arrow)" />
        <path d="M380 88V120" markerEnd="url(#arch-arrow)" />
        <path d="M250 160V192" markerEnd="url(#arch-arrow)" />
        <path d="M620 88V192" markerEnd="url(#arch-arrow)" />
        <path d="M205 264V296" markerEnd="url(#arch-arrow)" />
        <path d="M555 264V296" markerEnd="url(#arch-arrow)" />
      </g>

      <Box x={40} y={32} w={200} h={56} />
      <text x={140} y={56} className="dg-name">웹</text>
      <text x={140} y={74} className="dg-sub">React · Ant Design</text>

      <Box x={280} y={32} w={200} h={56} />
      <text x={380} y={56} className="dg-name">모바일 (PDA)</text>
      <text x={380} y={74} className="dg-sub">React · antd-mobile</text>

      <Box x={520} y={32} w={200} h={56} />
      <text x={620} y={56} className="dg-name">현장 설비 (IoT)</text>
      <text x={620} y={74} className="dg-sub">설비 데이터 수집</text>

      <text x={630} y={146} className="dg-sub dg-left">MQTT</text>

      <Box x={40} y={120} w={420} h={40} />
      <text x={250} y={144} className="dg-text">Cloudflare (SSL) → Nginx</text>

      <Box x={40} y={192} w={680} h={72} main />
      <text x={380} y={220} className="dg-name">Spring Boot API · Java 11 · MyBatis</text>
      <text x={380} y={242} className="dg-detail">JWT 인증 · 공장 조건 자동 적용 · config 기반 화면 · 엑셀 양식 PDF 출력</text>

      <Box x={40} y={296} w={330} h={56} />
      <text x={205} y={320} className="dg-name">표준 DB (MySQL)</text>
      <text x={205} y={338} className="dg-sub">공통 코드 · 회사 설정 플래그 · 화면 config</text>

      <Box x={390} y={296} w={330} h={56} />
      <text x={555} y={320} className="dg-name">고객사 DB (MySQL)</text>
      <text x={555} y={338} className="dg-sub">고객사 업무 데이터</text>

      <rect x={40} y={384} width={680} height={56} rx={8} className="dg-band" />
      <text x={380} y={408} className="dg-name">배포: Gitea push → Gitea Actions → Docker 이미지 → 서버</text>
      <text x={380} y={426} className="dg-sub">BE · 웹 · 모바일 3개 저장소 모두 같은 흐름 · 사내 Linux 서버와 AWS</text>
    </svg>
  )
}
