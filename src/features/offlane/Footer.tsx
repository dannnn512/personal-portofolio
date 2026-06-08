import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <span>OFFLANE · off-hours lab · 2026</span>
      <Link className="backlink" to="/">
        ↩&nbsp;&nbsp;ziddan<span className="slash">/</span>workshop
      </Link>
    </footer>
  )
}
