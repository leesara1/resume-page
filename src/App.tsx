import type { ReactNode } from 'react'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import { career, education, profile, project, skills, stats } from './data/resume'

const nav = [
  ['career', '경력'],
  ['project', '프로젝트'],
  ['problems', '문제 해결'],
  ['skills', '기술'],
  ['education', '학력 · 자격'],
]

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function Points({ items }: { items: [string, string][] }) {
  return (
    <ul className="points">
      {items.map(([label, text]) => (
        <li key={label}>
          <strong>{label}</strong> {text}
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <>
      <header className="topbar">
        <a href="#top" className="brand">{profile.name}</a>
        <nav>
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <button className="print" onClick={() => window.print()}>PDF로 저장</button>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">{profile.role} · {profile.stack}</p>
          <h1>{profile.name}</h1>
          <p className="intro">{profile.intro.join(' ')}</p>
          <ul className="contact">
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={`tel:${profile.phone.replaceAll('-', '')}`}>{profile.phone}</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={profile.blog} target="_blank" rel="noreferrer">Blog</a></li>
          </ul>
        </section>

        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <span className="stat-value">{s.value}<small>{s.unit}</small></span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>

        <Section id="career" title="경력">
          <div className="company">
            <h3>{career.company}</h3>
            <span className="muted">{career.title} · {career.period}</span>
          </div>
          <ol className="timeline">
            {career.items.map((item) => (
              <li key={item.title}>
                <h4>
                  {item.title}
                  {(item.period || item.note) && (
                    <span className="muted"> {[item.note, item.period].filter(Boolean).join(', ')}</span>
                  )}
                </h4>
                <ul>
                  {item.lines.map((line) => <li key={line}>{line}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="project" title={`대표 프로젝트 · ${project.title}`}>
          <p className="lead">{project.summary}</p>
          <dl className="overview">
            {project.overview.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
            <div>
              <dt>서비스</dt>
              <dd><a href={project.serviceUrl} target="_blank" rel="noreferrer">{project.serviceUrl.replace('https://', '')}</a></dd>
            </div>
          </dl>

          <h3>배경</h3>
          <p>{project.background.lead}</p>
          <Points items={project.background.points} />
          <p>{project.background.goal}</p>

          <h3>구조</h3>
          <figure className="figure">
            <ArchitectureDiagram />
            <figcaption>{project.architectureNote}</figcaption>
          </figure>

          <h3>핵심 설계</h3>
          <div className="design">
            {project.design.map((d, i) => (
              <article key={d.title} className="card">
                <h4><span className="num">{i + 1}</span>{d.title}</h4>
                {d.text && <p>{d.text}</p>}
                {d.points && <Points items={d.points} />}
              </article>
            ))}
          </div>
        </Section>

        <Section id="problems" title="문제 해결">
          <div className="problems">
            {project.problems.map((p, i) => (
              <article key={p.title} className="card problem">
                <h4><span className="num">{i + 1}</span>{p.title}</h4>
                <dl>
                  <dt>문제</dt><dd>{p.problem}</dd>
                  <dt>해결</dt><dd>{p.solution}</dd>
                  <dt>결과</dt><dd className="result">{p.result}</dd>
                </dl>
              </article>
            ))}
          </div>

          <h3>기술 선택</h3>
          <table className="table">
            <thead><tr><th>기술</th><th>고른 이유</th></tr></thead>
            <tbody>
              {project.techChoices.map(([tech, instead, why]) => (
                <tr key={tech}>
                  <td><strong>{tech}</strong>{instead && <span className="muted"> {instead}</span>}</td>
                  <td>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>배포 · 서버</h3>
          <ul className="plain">{project.ops.map((t) => <li key={t}>{t}</li>)}</ul>

          <h3>AI 에이전트 협업</h3>
          <p>{project.ai.lead}</p>
          <table className="table">
            <thead><tr><th>역할</th><th>하는 일</th></tr></thead>
            <tbody>
              {project.ai.roles.map(([role, work]) => (
                <tr key={role}><td><strong>{role}</strong></td><td>{work}</td></tr>
              ))}
            </tbody>
          </table>
          <ul className="plain">{project.ai.points.map((t) => <li key={t}>{t}</li>)}</ul>

          <h3>결과</h3>
          <ul className="plain results">{project.results.map((t) => <li key={t}>{t}</li>)}</ul>
        </Section>

        <Section id="skills" title="기술 스택">
          <dl className="skills">
            {skills.map(([area, list]) => (
              <div key={area}>
                <dt>{area}</dt>
                <dd>{list.map((s) => <span key={s} className="chip">{s}</span>)}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="학력 · 자격">
          <ul className="edu">
            {education.map((e) => (
              <li key={e.name}>
                <span className="kind">{e.kind}</span>
                <span className="edu-name">
                  {e.name}
                  {e.org && <span className="muted"> · {e.org}</span>}
                </span>
                <span className="date">{e.date}</span>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <span>© {profile.name}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </>
  )
}
