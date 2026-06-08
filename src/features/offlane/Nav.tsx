export default function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">
        OFF<span className="slash">/</span>LANE
      </a>
      <nav className="nav-links">
        <a href="#manifesto" className="hide-sm">manifesto</a>
        <a href="#experiments">experiments</a>
        <span className="nav-status">
          <span className="dot" />
          quiet&nbsp;mode
        </span>
      </nav>
    </header>
  )
}
