import { useEffect, useState, type ReactNode } from 'react'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import { career, education, profile, project, scope, skills, stats, workStyle } from './data/resume'

const nav = [
  ['career', '경력'],
  ['project', '프로젝트'],
  ['problems', '문제 해결'],
  ['skills', '기술'],
  ['education', '학력 · 자격'],
] as const

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const els = nav.map(([id]) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    const update = () => {
      // 화면 위쪽 1/3 선을 지난 마지막 섹션을 현재 섹션으로 봅니다.
      const line = window.innerHeight / 3
      const current = els.filter((el) => el.getBoundingClientRect().top <= line).pop()
      setActive(current?.id ?? '')
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return active
}

function Section({ id, title, note, children }: { id: string; title: string; note?: string; children: ReactNode }) {
  const index = nav.findIndex(([key]) => key === id)
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-side">
        {index >= 0 && <span className="section-no" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
        <h2 id={`${id}-title`} className="section-head">{title}</h2>
        {note && <p className="head-note">{note}</p>}
      </div>
      <div className="section-body">{children}</div>
    </section>
  )
}

function Points({ items }: { items: [string, string][] }) {
  return (
    <dl className="points">
      {items.map(([label, text]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{text}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function App() {
  const active = useActiveSection()

  return (
    <>
      <a href="#top" className="skip">본문으로 건너뛰기</a>
      <header className="topbar">
        <a href="#top" className="brand">{profile.name}</a>
        <nav aria-label="섹션">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>{label}</a>
          ))}
        </nav>
        <button type="button" className="btn btn-dark" onClick={() => window.print()}>PDF로 저장</button>
      </header>

      <main id="top">
        <section className="hero" aria-label="소개">
          <div className="hero-title">
            <p className="hello">
              <span className="hello-dot" aria-hidden="true" />
              안녕하세요, {profile.name}입니다.
            </p>
            <h1>
              {profile.headline[0]}
              <br />
              <span className="soft">{profile.headline[1]}</span>
            </h1>
          </div>
          <div className="hero-main">
            <p className="intro">{profile.intro.join(' ')}</p>
            <div className="actions">
              <a className="btn btn-dark" href={`mailto:${profile.email}`}>메일 보내기</a>
              <a className="btn btn-line" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-line" href={profile.blog} target="_blank" rel="noreferrer">Blog</a>
            </div>
          </div>

          <aside className="profile-card" aria-label="연락처">
            <p className="tag">{profile.role}</p>
            <p className="profile-stack">{profile.stack}</p>
            <dl>
              <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
              <div><dt>Updated</dt><dd>{profile.revision}</dd></div>
            </dl>
          </aside>
        </section>

        <ul className="bento" aria-label="주요 수치">
          {stats.map((s) => (
            <li key={s.label} className="tile">
              <span className="tile-value">{s.value}<small>{s.unit}</small></span>
              <span className="tile-label">{s.label}</span>
            </li>
          ))}
        </ul>

        <Section id="scope" title="맡는 범위" note="요구사항부터 운영까지">
          <ol className="scope">
            {scope.map(([step, proof], i) => (
              <li key={step}>
                <span className="scope-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
                <span>{proof}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="workstyle" title="일하는 방식">
          <ul className="principles">
            {workStyle.map(([claim, proof]) => (
              <li key={claim}>
                <strong>{claim}</strong>
                <span>{proof}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="career" title="경력">
          <div className="company">
            <h3>{career.company}</h3>
            <span className="meta">{career.title}</span>
            <span className="period">{career.period}</span>
          </div>
          <ol className="timeline">
            {career.items.map((item) => (
              <li key={item.title}>
                <div className="tl-head">
                  <h4>{item.title}</h4>
                  {(item.period || item.note) && (
                    <span className="tl-tags">
                      {item.note && <span className="pill pill-sm">{item.note}</span>}
                      {item.period && <span className="period">{item.period}</span>}
                    </span>
                  )}
                </div>
                <ul className="dots">
                  {item.lines.map((line) => <li key={line}>{line}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="project" title="대표 프로젝트">
          <div className="project-intro">
            <p className="tag">{project.title}</p>
            <p className="lead">{project.summary}</p>
          </div>
          <dl className="kv">
            {project.overview.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
            <div>
              <dt>서비스</dt>
              <dd><a href={project.serviceUrl} target="_blank" rel="noreferrer">{project.serviceUrl.replace('https://', '')}</a></dd>
            </div>
          </dl>

          <h3 className="sub">배경</h3>
          <p>{project.background.lead}</p>
          <Points items={project.background.points} />
          <p className="goal">{project.background.goal}</p>

          <h3 className="sub">구조</h3>
          <figure className="figure">
            <div className="figure-frame" role="region" tabIndex={0} aria-label="시스템 구성도 (좁은 화면에서는 가로로 스크롤)">
              <ArchitectureDiagram />
            </div>
            <figcaption>{project.architectureNote}</figcaption>
          </figure>

          <h3 className="sub">핵심 설계</h3>
          <div className="cards">
            {project.design.map((d, i) => (
              <article key={d.title} className="card">
                <span className="card-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h4>{d.title}</h4>
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
                <span className="card-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h4>{p.title}</h4>
                <dl className="psr">
                  <div><dt>문제</dt><dd>{p.problem}</dd></div>
                  <div><dt>해결</dt><dd>{p.solution}</dd></div>
                  <div className="result"><dt>결과</dt><dd>{p.result}</dd></div>
                </dl>
              </article>
            ))}
          </div>

          <h3 className="sub">기술 선택</h3>
          <table className="table">
            <thead><tr><th scope="col">기술</th><th scope="col">고른 이유</th></tr></thead>
            <tbody>
              {project.techChoices.map(([tech, instead, why]) => (
                <tr key={tech}>
                  <th scope="row">{tech}{instead && <span className="meta"> {instead}</span>}</th>
                  <td>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="sub">배포 · 서버</h3>
          <ul className="dots">{project.ops.map((t) => <li key={t}>{t}</li>)}</ul>

          <h3 className="sub">AI 에이전트 협업</h3>
          <p>{project.ai.lead}</p>
          <table className="table">
            <thead><tr><th scope="col">역할</th><th scope="col">하는 일</th></tr></thead>
            <tbody>
              {project.ai.roles.map(([role, work]) => (
                <tr key={role}><th scope="row">{role}</th><td>{work}</td></tr>
              ))}
            </tbody>
          </table>
          <ul className="dots">{project.ai.points.map((t) => <li key={t}>{t}</li>)}</ul>

        </Section>

        <Section id="skills" title="기술 스택">
          <dl className="skills">
            {skills.map(([area, list]) => (
              <div key={area}>
                <dt>{area}</dt>
                <dd>{list.map((s) => <span key={s} className="pill">{s}</span>)}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="학력 · 자격">
          <ul className="edu">
            {education.map((e) => (
              <li key={e.name}>
                <span className="pill pill-sm">{e.kind}</span>
                <span className="edu-name">
                  {e.name}
                  {e.org && <span className="meta"> · {e.org}</span>}
                </span>
                <span className="period">{e.date}</span>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <span>© {profile.name} · {profile.revision}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </>
  )
}
