import Reveal from './Reveal.jsx'

// One "file folder" section: a tab on top, a numbered label, then the content.
export default function Fold({ id, cls, index, tab, kicker, children }) {
  return (
    <Reveal as="section" className={`fold ${cls}`} id={id} style={{ '--i': index }}>
      <span className="tab">{tab}</span>
      {kicker && (
        <p className="kicker">
          <b>{String(index + 1).padStart(2, '0')}</b>
          <i />
          {kicker}
        </p>
      )}
      {children}
    </Reveal>
  )
}
