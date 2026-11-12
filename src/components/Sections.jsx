import { useEffect, useRef, useState } from 'react'
import Fold from './Fold.jsx'
import Reveal from './Reveal.jsx'
import { certifications, coursework, education, leadership, skills, timeline } from '../data/profile.js'

// Counts up to a number the first time it scrolls into view.
function CountUp({ to, decimals = 0 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setValue(to)
      return undefined
    }
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - start) / 1300)
        setValue(to * (1 - (1 - p) ** 3))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return (
    <span ref={ref} className="num">
      {value.toFixed(decimals)}
    </span>
  )
}

export function About() {
  return (
    <Fold id="about" cls="f1" index={0} tab="About" kicker="Who I am">
      <h2>
        About <span className="gt">Me</span>
      </h2>
      <div className="cols">
        <div>
          <p>
            I’m Jyothish Boyina, a Computer Science undergraduate at VIT-AP University, currently
            working as an Associate Technical Consultant in the AI Product Development team at
            Perficient India.
          </p>
          <p>
            I build full-stack, AI-powered and data-driven applications using React, Java, Spring Boot,
            Python, SQL, and modern GenAI workflows to deliver practical digital products that solve real business
            challenges.
          </p>
        </div>
        <div className="stats">
          <div>
            <b className="gt">
              <CountUp to={9.1} decimals={2} />
            </b>
            <span>CGPA</span>
          </div>
          <div>
            <b className="gt">AWS</b>
            <span>Certified</span>
          </div>
          <div>
            <b className="gt">
              <CountUp to={7} />
            </b>
            <span>Projects</span>
          </div>
        </div>
      </div>
    </Fold>
  )
}

// Small line icons for the skill cards.
const icons = {
  Languages: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
  Frontend: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  Backend: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  Databases: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  Security: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  'DevOps & Cloud': <path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7z" />,
  Testing: <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" />,
  Tools: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.3-.7-.7-2.3 2.7-2.7z" />,
  'AI/ML': <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />,
}

// Bento layout: the order and width (out of 12 columns) of each card. Backend is the highlighted one.
const bento = [
  ['Languages', 3],
  ['Frontend', 5],
  ['Backend', 4],
  ['AI/ML', 5],
  ['Security', 4],
  ['Databases', 3],
  ['DevOps & Cloud', 4],
  ['Tools', 5],
  ['Testing', 3],
]

export function Skills() {
  return (
    <Fold id="skills" cls="f2" index={1} tab="Skills" kicker="What I work with">
      <h2>Technical Skills</h2>
      <div className="bento">
        {bento.map(([name, width], i) => {
          const g = skills.find((x) => x.group === name)
          if (!g) return null
          return (
            <Reveal
              as="article"
              key={name}
              delay={(i % 3) * 70}
              className={`sk${name === 'Backend' ? ' hot' : ''}${name === 'Frontend' ? ' wide' : ''}`}
              style={{ '--w': width }}
            >
              <div className="sk-h">
                <span className="sk-ico">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {icons[name]}
                  </svg>
                </span>
                <h3>{g.group}</h3>
                <span className="sk-n">{String(g.items.length).padStart(2, '0')}</span>
              </div>
              <ul className="bubbles">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Fold>
  )
}

export function Timeline() {
  return (
    <Fold id="timeline" cls="f3" index={2} tab="Timeline" kicker="The journey">
      <h2>Timeline</h2>
      <ol className="tl">
        {timeline.map((t, i) => (
          <Reveal
            as="li"
            key={t.title}
            className={t.now ? 'now' : undefined}
            style={{ '--r': i + 1 }}
            delay={60}
          >
            <article className={t.now ? 'xp now' : 'xp'}>
              <small>{t.when}</small>
              <h3>{t.title}</h3>
              <p className="at">{t.place}</p>
              <p>{t.text}</p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Fold>
  )
}

export function Education() {
  return (
    <Fold id="education" cls="f6" index={4} tab="Education" kicker="Where I studied">
      <h2>Education</h2>
      <div className="cols3 edu">
        {education.map((e, i) => (
          <Reveal as="article" key={e.degree} className="ecard" delay={i * 90}>
            <small>{e.year}</small>
            <h3>{e.degree}</h3>
            <p>{e.school}</p>
            <div className="score">
              <b className="gt">{e.score}</b>
              <span>Score</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Fold>
  )
}

export function More() {
  return (
    <Fold id="more" cls="f5" index={5} tab="More" kicker="Credentials">
      <h2>Certifications &amp; more</h2>
      <div className="more">
        <div>
          <h3 className="t">Certifications</h3>
          <ul className="rows certs">
            {certifications.map((c) => (
              <li key={c.name} className="cert">
                {c.name}
                <span>
                  {c.issuer}
                  <em className={c.done ? 'st done' : 'st going'}>{c.done ? 'Completed' : 'In progress'}</em>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="t">Relevant Coursework</h3>
          <ul className="rows">
            {coursework.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="t">Leadership &amp; Activities</h3>
          <ul className="rows">
            {leadership.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fold>
  )
}
