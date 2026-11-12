import { useState } from 'react'
import Fold from './Fold.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data/projects.js'

const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
)

const filters = ['All', 'Full-stack', 'AI / ML', 'Java']

// A showcase: a list of projects on the left, the selected one in full on the right.
export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [picked, setPicked] = useState(projects[0].title)

  const shown = filter === 'All' ? projects : projects.filter((p) => p.cats.includes(filter))
  const active = shown.find((p) => p.title === picked) || shown[0]

  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    if (!(e.key in keys)) return
    e.preventDefault()
    const i = shown.indexOf(active)
    const next = shown[(i + keys[e.key] + shown.length) % shown.length]
    setPicked(next.title)
    requestAnimationFrame(() => document.getElementById(`ptab-${shown.indexOf(next)}`)?.focus())
  }

  return (
    <Fold id="projects" cls="f4" index={3} tab="Projects" kicker="Selected work">
      <div className="phead">
        <div>
          <h2>Featured Projects</h2>
          <p>
            A selection of things I've built — from AI assistants to forecasting tools and full-stack
            platforms.
          </p>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
              <span>{f === 'All' ? projects.length : projects.filter((p) => p.cats.includes(f)).length}</span>
            </button>
          ))}
        </div>
      </div>

      <Reveal className="pshow">
        <div className="plist" role="tablist" aria-label="Projects" aria-orientation="vertical" onKeyDown={onKeyDown}>
          {shown.map((p, i) => (
            <button
              key={p.title}
              id={`ptab-${i}`}
              type="button"
              role="tab"
              className="ptab"
              aria-selected={p === active}
              aria-controls="ppanel"
              tabIndex={p === active ? 0 : -1}
              onClick={() => setPicked(p.title)}
            >
              <span className="pthumb">
                {p.image ? <img src={p.image} alt="" loading="lazy" /> : p.title[0]}
              </span>
              <span className="ptxt">
                <b>{p.title}</b>
                <small>{p.kind}</small>
              </span>
              <span className="pidx">{String(i + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>

        <article key={active.title} id="ppanel" role="tabpanel" className="pdetail" aria-label={active.title}>
          <div className="pleft">
            <div className="pimg">
              {active.image ? (
                <img src={active.image} alt={`${active.title}: ${active.kind}`} />
              ) : (
                <div className="pcover" role="img" aria-label={`${active.title}: ${active.kind}`}>
                  <b>{active.title}</b>
                  <span>{active.kind}</span>
                </div>
              )}
              <span className="pkind">{active.kind}</span>
            </div>

            <div>
              <h4>Tech stack</h4>
              <ul className="chips">
                {active.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="plinks">
                {active.demo && (
                  <a href={active.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo ↗
                  </a>
                )}
                {active.repo && (
                  <a href={active.repo} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                    Source
                  </a>
                )}
                {!active.demo && !active.repo && (
                  <a href="https://github.com/Perficient-Academy" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="pright">
            {active.date && <small className="pdate">{active.date}</small>}
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            {active.points && (
              <>
                <h4>Highlights</h4>
                <ul className="ppoints">
                  {active.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </article>
      </Reveal>
    </Fold>
  )
}
