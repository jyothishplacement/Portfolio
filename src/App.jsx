import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import { About, Skills, Timeline, Education, More } from './components/Sections.jsx'

const GH = 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z'
const LI = 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z'
const MAIL = 'M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.1-.4 6.9 5.2 6.9-5.2H5.1ZM19 8.2l-6.4 4.8a1 1 0 0 1-1.2 0L5 8.2v9.3a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V8.2Z'
const PHONE = 'M6.6 3h2.8c.4 0 .8.3.9.7l.9 3.4c.1.4 0 .8-.3 1.1L9.4 9.5a13 13 0 0 0 5.1 5.1l1.3-1.5c.3-.3.7-.4 1.1-.3l3.4.9c.4.1.7.5.7.9v2.8c0 .6-.5 1.1-1.1 1.1C10.6 18.5 5.5 13.4 5.5 4.1 5.5 3.5 6 3 6.6 3Z'

const contacts = [
  { label: 'Email', value: 'jyothish.boyina@perficient.com', href: 'mailto:jyothish.boyina@perficient.com', box: '0 0 24 24', path: MAIL },
  { label: 'Phone', value: '+91 6303549360', href: 'tel:+916303549360', box: '0 0 24 24', path: PHONE },
  { label: 'LinkedIn', value: 'in/boyina-jyothish', href: 'https://www.linkedin.com/in/boyina-jyothish/', box: '0 0 24 24', path: LI, external: true },
  { label: 'GitHub · Personal', value: 'JyothishBoyina', href: 'https://github.com/JyothishBoyina', box: '0 0 16 16', path: GH, external: true },
  { label: 'GitHub · Professional', value: 'jyothish-boyina_prft', href: 'https://github.com/jyothish-boyina_prft', box: '0 0 16 16', path: GH, external: true },
]

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      <main className="in deck">
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Education />
        <More />
      </main>

      <footer className="end" id="contact">
        <div className="in end-grid">
          <div>
            <p className="eyebrow">Let’s build something meaningful</p>
            <h2>Available for AI product and full-stack development work.</h2>
            <small>
              Jyothish Boyina · Computer Science Undergraduate · VIT-AP University · Perficient India
            </small>
          </div>

          <ul className="reach">
            {contacts.map((c) => (
              <li key={c.label}>
                <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  <span className="ico">
                    <svg viewBox={c.box} aria-hidden="true">
                      <path d={c.path} />
                    </svg>
                  </span>
                  <span className="tx">
                    <em>{c.label}</em>
                    <b>{c.value}</b>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  )
}
