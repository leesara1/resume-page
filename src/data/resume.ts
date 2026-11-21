// 이력서 페이지의 모든 내용은 이 파일에서 고칩니다.
// 공개 페이지라 고객사 이름과 AI 도구 이름은 넣지 않았습니다.

export const profile = {
  name: '이사라',
  role: '풀스택 개발자',
  stack: 'Java · Spring Boot · React',
  email: 'lsr406010@gmail.com',
  phone: '010-8862-6647',
  github: 'https://github.com/leesara1',
  blog: 'https://sarai.tistory.com',
  intro: [
    'ERP 솔루션 회사에서 3년간 풀스택으로 일하며 Visual FoxPro 레거시 ERP를 Spring Boot · React 웹으로 혼자 전환했습니다.',
    '고객사 5곳이 함께 쓰는 코드베이스를 설계했고, Git 도입부터 Docker 배포 자동화와 서버 운영까지 맡았습니다.',
    '더 큰 규모의 서비스에서 팀과 함께 성장하고 싶습니다.',
  ],
}

export const stats = [
  { value: '741', unit: '개', label: 'REST API' },
  { value: '117', unit: '개', label: '웹 화면' },
  { value: '5', unit: '곳', label: '운영 고객사 (회사당 100여 명)' },
  { value: '10 → 2', unit: '분', label: '배포 시간' },
  { value: '3', unit: '분', label: '신규 고객사 세팅' },
  { value: '78', unit: '개', label: '백엔드 테스트 클래스' },
]

export const career = {
  company: '블루마린시스템(주)',
  title: '풀스택 개발',
  period: '2023.12 ~ 재직 중',
  items: [
    {
      title: 'VFP 레거시 ERP 웹 전환',
      period: '2025.02 ~',
      note: '단독',
      lines: [
        'Spring Boot · MyBatis + React로 재설계: API 741개, 웹 화면 117개',
        'VFP 고객사 20곳과 DB를 공유하며 단계적으로 전환, 현재 5곳 · 회사당 100여 명 사용',
        'config 테이블과 설정 플래그로 고객사별 화면 · 기능을 하나의 코드로 운영, 신규 고객사 세팅 3분',
        '부서별 KPI, 전자결재, 세금계산서, 엑셀 양식 PDF 출력, React PDA 앱, MQTT IoT 연동',
        'Spring Security + JWT, 백엔드 TDD(테스트 클래스 78개)',
        '고객사와 주 1회 미팅으로 요구사항 합의, 2026.11 신규 고객사 실운영',
      ],
    },
    {
      title: '개발 운영 환경',
      lines: ['Gitea · Gitea Actions · Docker로 CI/CD 도입(배포 10분 → 2분), 사내 Linux · AWS 서버 운영, Cloudflare SSL'],
    },
    {
      title: 'AI 에이전트 협업 개발',
      lines: ['총괄 · 구현 · 검토 에이전트를 나눠 협업시키는 개발 흐름과 공통 규칙 문서 운영'],
    },
    {
      title: '초기 업무',
      period: '2023.12 ~ 2025.02',
      lines: [
        '정부지원사업 데이터수집장치 API 개발',
        'ERP 연동 Android(Java) PDA 앱 개발 · 유지보수',
        'ERP 데이터 시각화 React 대시보드 개발 · 호스팅',
      ],
    },
  ],
}

export const project = {
  title: 'VFP 레거시 ERP 웹 전환',
  summary: 'Visual FoxPro로 만든 사내 ERP 전체를 혼자 웹 · 모바일로 전환해, 고객사 5곳이 하나의 코드베이스로 쓰고 있습니다.',
  overview: [
    ['기간', '2025.02 ~ 진행 중'],
    ['역할', '단독 개발: 설계, BE, 웹, 모바일, 인프라, 고객사 도입'],
    ['규모', 'API 741개, 웹 화면 117개, 백엔드 테스트 클래스 78개'],
    ['고객사', '5곳, 회사당 사용자 100여 명'],
    ['BE', 'Java 11, Spring Boot, MyBatis, Spring Security + JWT, Swagger'],
    ['FE', 'React, Ant Design (웹), React + antd-mobile (모바일)'],
    ['인프라', 'MySQL, Docker, Nginx, Gitea Actions, Linux, AWS, Cloudflare, MQTT'],
  ] as [string, string][],
  serviceUrl: 'https://app.bmsdb.net/bms-web/',
  background: {
    lead: '기존 ERP는 2015년에 Microsoft 지원이 끝난 Visual FoxPro 데스크톱 프로그램이었고, 버전 관리 없이 운영되고 있었습니다. 이 프로그램을 쓰는 고객사가 20곳이었습니다.',
    points: [
      ['데이터', '테이블마다 컬럼이 60개 이상인 레거시 구조를 그대로 옮겨야 했습니다.'],
      ['고객사별 차이', '회사마다 같은 항목을 다른 이름으로 부르고, 관리자가 원하는 화면 구성도 달랐습니다. 한 회사에 공장이 여러 개인 경우도 있었습니다.'],
      ['출력 양식', '처음 도입하는 기업은 발주서 · 거래명세서 같은 양식을 엑셀로 갖고 있었습니다.'],
      ['현장', 'PDA 앱(Android Java)과 설비 통신이 ERP와 따로 움직였습니다.'],
    ] as [string, string][],
    goal: '목표는 웹으로 어디서나 쓰고, 새 고객사를 코드 수정 없이 받을 수 있게 만드는 것이었습니다.',
  },
  architectureNote:
    '웹과 PDA는 Cloudflare와 Nginx를 거쳐, 현장 설비는 MQTT로 같은 Spring Boot 백엔드에 붙습니다. 백엔드는 표준 DB의 설정을 읽어 고객사마다 다르게 동작합니다.',
  design: [
    {
      title: '하나의 코드로 고객사 5곳 운영',
      points: [
        ['회사별 기능', '회사 설정 테이블의 플래그로 분기해, 한 고객사를 고쳐도 다른 고객사 동작은 바뀌지 않게 했습니다.'],
        ['공장 단위 분리', 'MyBatis 인터셉터가 조회 쿼리에 공장 조건과 삭제 제외 조건을 자동으로 붙여, 쿼리마다 조건을 빠뜨릴 위험을 없앴습니다.'],
        ['신규 고객사', '새 고객사 세팅은 셸 스크립트로 버튼 클릭 한 번, 3분이면 끝납니다.'],
      ] as [string, string][],
    },
    {
      title: 'config 테이블 기반 화면',
      text: '회사마다 다른 컬럼 이름과 화면 구성을 코드가 아닌 config 테이블로 관리합니다. 화면은 설정을 읽어 목록 · 검색 칸을 그리므로, 관리자 요청은 대부분 설정만 바꿔 반영합니다.',
    },
    {
      title: '엑셀 양식 그대로 출력',
      text: '처음 도입하는 기업이 쓰던 엑셀 양식을 넣으면 바로 PDF로 출력되게 했습니다. 발주서, 해외 소재 계약서, 거래명세서 등을 지원합니다.',
    },
    {
      title: '업무 기능',
      points: [
        ['전자결재', '결재선 그룹, 결재함 · 요청함 · 종결함'],
        ['세금계산서', '거래명세서와 연결해 발행, 부가세 오차(±2원) 보정'],
        ['KPI', '부서별 지표(납기준수율, 제조리드타임, 불량률, 설비 가동률 등)와 고객사 맞춤 분석'],
        ['현장 연동', 'React 모바일 앱(PDA), MQTT IoT 통신'],
      ] as [string, string][],
    },
    {
      title: '백엔드 TDD',
      text: '백엔드는 테스트를 먼저 쓰고 구현했습니다(테스트 클래스 78개). 화면은 바로 눈으로 확인할 수 있어 프론트엔드에는 적용하지 않았습니다.',
    },
  ],
  problems: [
    {
      title: 'VFP 고객사 20곳을 멈추지 않고 전환',
      problem: 'VFP를 쓰는 회사가 20곳이라 한 번에 바꿀 수 없었습니다.',
      solution:
        '웹이 VFP와 같은 DB를 공유하도록 설계해, 두 프로그램을 함께 쓰면서 회사별로 넘어오게 했습니다. 이관 중 나온 중복 데이터와 한글 인코딩 문제도 정리했습니다.',
      result: '기존 고객사 업무를 멈추지 않고 전환했고, 현재 5곳이 웹으로 운영 중입니다.',
    },
    {
      title: '공장 조건 누락 방지',
      problem: '모든 테이블에 공장 컬럼이 있어, 쿼리마다 조건을 직접 쓰면 빠뜨리는 순간 다른 공장 데이터가 보일 위험이 있었습니다.',
      solution:
        'MyBatis 인터셉터가 조회 쿼리에 공장 조건과 삭제 제외 조건을 자동으로 붙이게 했습니다. 여러 줄 쿼리와 ORDER BY가 있는 쿼리에서 조건이 잘못 붙는 버그도 고쳤습니다.',
      result: '개발자가 조건을 잊어도 다른 공장 데이터가 섞이지 않습니다.',
    },
    {
      title: '비정규화 테이블 수정',
      problem: '비정규화된 레거시 테이블은 컬럼이 많아, 테이블마다 UPDATE문을 다 쓸 수 없었습니다.',
      solution:
        '공통 동적 UPDATE 서비스를 만들었습니다. 일부 칸만 넘기면 숫자 칸이 0으로 덮어쓰이는 함정을 찾아, 부분 수정은 전용 UPDATE로 나누는 규칙을 정했습니다.',
      result: '반복 코드를 줄이면서 데이터가 덮어쓰이는 사고를 막았습니다.',
    },
    {
      title: '실운영을 앞두고 바뀐 요구사항',
      problem: '신규 고객사 실운영을 앞두고 사용자 요구사항이 계속 바뀌었습니다. 기능보다 쓰기 편한지가 더 중요하다는 걸 알게 됐습니다.',
      solution:
        '한 달 동안 주 1회 미팅하며 요구사항을 부서별로 정리하고 합의했습니다. 버튼 이름과 위치를 통일하고, 지금 할 수 없는 버튼은 회색으로 두었습니다. 화면마다 단계별 사용 안내를 넣어 VFP에 익숙한 사용자가 적응하도록 했습니다.',
      result: '2026.11.02 실운영을 시작했습니다.',
    },
  ],
  techChoices: [
    ['MyBatis', 'JPA 대신', '컬럼이 60개가 넘는 레거시 테이블을 엔티티 전체로 다루기보다, SQL로 필요한 컬럼만 가져오는 것이 성능에 유리하다고 판단'],
    ['React 모바일 앱', '네이티브 대신', '웹과 PDA를 한 언어 · 한 프레임워크로 맞춰 혼자서도 둘 다 유지보수할 수 있게 함'],
    ['Gitea', 'GitHub 대신', '사내 Git 서버가 Windows 서버여서, 그 위에 가볍게 설치하고 CI(Actions)까지 한 번에 쓸 수 있는 도구를 고름'],
    ['MQTT', '', '임베디드 담당과 함께 결정. 가벼운 발행/구독 방식이라 작은 장비와 불안정한 현장 네트워크에 맞고, QoS로 메시지 전달을 보장함'],
  ] as [string, string, string][],
  ops: [
    '버전 관리가 없던 팀에 사내 Windows 서버에 Gitea를 구축했습니다.',
    'BE · 웹 · 모바일 3개 저장소에 Gitea Actions를 붙여 push하면 Docker 이미지가 빌드되고 배포됩니다. 수동 10분 걸리던 배포가 버튼 클릭 한 번, 2분 남짓으로 줄었습니다.',
    '개발은 모노레포 하나에서 하고, git subtree로 사내 저장소 3개에 나눠 올리는 스크립트를 만들었습니다.',
    '사내 물리 서버와 AWS를 모두 운영해 봤고, Nginx 뒤에 Cloudflare로 SSL을 적용했습니다.',
  ],
  ai: {
    lead: '여러 AI 코딩 에이전트에 역할을 나눠 서로 대화하며 일하게 했습니다.',
    roles: [
      ['총괄', '지시문 작성, 결과 검토, DB 반영, 커밋'],
      ['구현', '코드 작성, 테스트, 화면 E2E 확인(Playwright)'],
      ['검토', '설계 · diff 검토 (읽기 전용)'],
    ] as [string, string][],
    points: [
      '에이전트 공통 규칙 문서에 코딩 규칙, UI 기준, 알려진 함정, 고객사 업무 문서를 모아 모든 에이전트가 같은 기준으로 작업합니다.',
      '작업마다 지시문과 결과(바꾼 파일, 테스트, 스크린샷)를 폴더로 남겨 추적할 수 있게 했습니다.',
      'DB 쓰기와 커밋은 총괄만 하도록 권한을 나눠 실제 고객 데이터를 보호했습니다.',
    ],
  },
  results: [
    '고객사 5곳, 회사당 사용자 100여 명이 같은 코드베이스를 씁니다. 신규 고객사는 미팅과 기초자료 이관을 거쳐 2026.11부터 실제 업무에 쓰고 있습니다.',
    '배포 시간: 수동 10분 → 버튼 클릭 2분 남짓',
    '새 고객사 세팅: 셸 스크립트로 버튼 클릭 3분. 화면 요청은 대부분 config 수정으로 끝납니다.',
    '버전 관리와 배포 자동화가 없던 팀에 Git · CI/CD를 처음 자리 잡았습니다.',
  ],
}

export const skills: [string, string[]][] = [
  ['Backend', ['Java', 'Kotlin', 'Spring Boot', 'MyBatis', 'PHP', 'Python']],
  ['Frontend', ['React', 'TypeScript', 'Ant Design']],
  ['Mobile', ['Android (Java)', 'Flutter (Dart)']],
  ['Database', ['MySQL', 'SQLD']],
  ['Infra', ['Linux', 'AWS', 'Cloudflare', 'Docker', 'Nginx', 'Git', 'Gitea Actions']],
  ['도메인', ['ERP', 'SCM', 'MES', 'WMS']],
]

export const education: { kind: string; name: string; org?: string; date: string }[] = [
  { kind: '자격', name: 'SQL개발자(SQLD)', org: '한국데이터베이스진흥센터', date: '2026.03' },
  { kind: '자격', name: '프로그래밍기능사', org: '한국산업인력공단', date: '2023.12' },
  { kind: '자격', name: '정보처리기사', date: '2027.02 필기 응시 예정' },
  { kind: '학력', name: '학점은행제 컴퓨터공학과', org: '95/140학점', date: '재학 중' },
  { kind: '학력', name: '대명여자고등학교 졸업', date: '2023.02' },
  { kind: '교육', name: 'Spring Boot & Flutter 앱개발 실무양성 심화과정', org: '그린컴퓨터아카데미', date: '2023.10 ~ 2023.12' },
  { kind: '교육', name: 'Java & Spring 프레임워크 개발자 양성과정', org: '그린컴퓨터아카데미', date: '2023.05 ~ 2023.09' },
  { kind: '수상', name: '정보보호 수업과정 고등학교부문 최우수상', org: '영남권 정보보호 영재교육원', date: '2022.11' },
]
