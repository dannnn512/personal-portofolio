import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        OFF/LOUD · after-hours label · 2026
        <span className="foot-note">&nbsp;&nbsp;turn it up.</span>
      </span>
      <Link className="backlink" to="/">
        ↩&nbsp;&nbsp;ziddan<span className="slash">/</span>workshop
      </Link>
    </footer>
  )
}
