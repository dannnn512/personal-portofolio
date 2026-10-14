export default function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">
        OFF<span className="slash">/</span>LOUD
      </a>
      <nav className="nav-links">
        <a href="#manifesto" className="hide-sm">manifesto</a>
        <a href="#roster">roster</a>
        <span className="nav-status">
          <span className="dot" />
          loud&nbsp;mode
        </span>
      </nav>
    </header>
  )
}
