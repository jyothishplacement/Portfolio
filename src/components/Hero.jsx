import { useEffect, useState } from 'react'
import profileImage from '../assets/Profile.jpg'
import { marquee, roles } from '../data/profile.js'

const resumeUrl = `${import.meta.env.BASE_URL}Jyothish_Boyina_Resume.pdf`

const GH_PATH =
  'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z'
const LI_PATH =
  'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z'

// Cycles through a short list of phrases; static when the visitor prefers reduced motion.
function Rotator({ words }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2800)
    return () => clearInterval(t)
  }, [words.length])

  return (
    <span key={i} className="rot-word gt">
      {words[i]}
    </span>
  )
}

export default function Hero() {
  // The soft glow in the background follows the pointer.
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section className="hero" id="home" onPointerMove={onMove}>
      <div className="mesh" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="spot" aria-hidden="true" />
      <div className="kin" aria-hidden="true">
        {marquee.map((line) => (
          <div key={line}>
            <span>{line}</span>
            <span>{line}</span>
          </div>
        ))}
      </div>

      <div className="in stage">
        <div>
          <span className="hi">
            <i />
            AWS Certified Cloud Practitioner
          </span>
          <h1>
            <span className="w">Hi,</span> <span className="w">I'm</span>
            <br />
            <span className="w gt">Jyothish</span> <span className="w gt">Boyina</span>
          </h1>
          <p className="role">Associate Technical Consultant @ Perficient India</p>
          <p className="building">
            Building <Rotator words={roles} />
          </p>
          <p className="lede">
            Working in the <strong>AI Product Development &amp; Delivery</strong> line — building
            AI-powered and data-driven applications with{' '}
            <strong>React, Java, Spring Boot &amp; AI</strong>.
          </p>
          <p className="lede sub">
            From full-stack platforms built with Spring Boot and React to intelligent chatbots,
            LLM-powered tools and forecasting systems, I build impactful digital products that turn
            ideas into scalable, real-world solutions.
          </p>
          <div className="cta">
            <a className="btn g" href="#projects">
              View Projects
            </a>
            <a className="btn w" href="mailto:jyothish.boyina@perficient.com">
              Contact Me
            </a>
            <a className="btn w" href={resumeUrl} download>
              Download Resume
            </a>
            <span className="cta-break" aria-hidden="true" />
            <a
              className="btn w"
              href="https://github.com/JyothishBoyina"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Personal GitHub profile"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d={GH_PATH} />
              </svg>
              <span>Personal</span>
            </a>
            <a
              className="btn w"
              href="https://github.com/jyothish-boyina_prft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Professional GitHub profile"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d={GH_PATH} />
              </svg>
              <span>Professional</span>
            </a>
            <a
              className="btn w"
              href="https://www.linkedin.com/in/boyina-jyothish/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={LI_PATH} />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="zone">
          <div className="float">
            <div className="id">
              <div className="topline">
                <span>Perficient India</span>
                <i />
              </div>
              <img className="face" src={profileImage} alt="Jyothish Boyina profile" />
              <div>
                <strong>Jyothish Boyina</strong>
                <span className="r">Associate Technical Consultant</span>
                <ul>
                  <li>9.10 CGPA</li>
                  <li>AWS Certified</li>
                  <li>7 Projects</li>
                </ul>
              </div>
            </div>
            <span className="orb o1">
              <i />
              Spring Boot
            </span>
            <span className="orb o2">
              <i />
              React
            </span>
            <span className="orb o3">
              <i />
              GenAI
            </span>
          </div>
        </div>
      </div>

      <a className="cue" href="#about" aria-label="Scroll to the About section">
        <span />
      </a>
    </section>
  )
}
