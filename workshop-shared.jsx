// Shared data + small atoms used by all Workshop variants
// (featured projects, archive projects, experience timeline, decorative bits)

window.WS_FEATURED = [
  {
    name: 'DEBATEME',
    company: 'Debateme',
    role: 'Founding Engineer',
    year: '2026 — Now',
    pitch: 'Owner had the vision: a social platform for structured debate. Needed someone to translate it into product.',
    shipped: 'I am the tech department. Web, mobile, backend, infra — every layer, solo. Live with users.',
    tags: ['Solo on tech', 'FE · BE · Mobile · Infra', '0 → 1'],
    handNote: 'every layer = me',
  },
  {
    name: 'TALENTCLOUD.AI',
    company: 'Pinetop',
    role: 'Product Engineer',
    year: '2025 — 2026',
    pitch: 'Companies wanted attendance that could not be cheated. Their HR rules were specific.',
    shipped: 'HRMC system: admin web + employee self-service + mobile app. AWS Rekognition for face-verified attendance, hardened to real business rules. Fullstack web with the team. Mobile alone.',
    tags: ['AWS Rekognition', 'Fullstack', 'Mobile solo'],
    handNote: 'mobile = me alone',
  },
  {
    name: 'BRIGHTSCHOOLS',
    company: 'PMM',
    role: 'Right-hand Engineer',
    year: '2024',
    pitch: 'Parents wanted a window into school. Teachers needed a CMS that did not get in the way.',
    shipped: 'Built from scratch with my boss. Mobile app for teachers + parents, school CMS, and the API. I owned mobile and the API end-to-end.',
    tags: ['Mobile + API', 'CMS', 'From scratch'],
    handNote: 'shipped to real schools',
  },
];

// Archive — 5 more projects, tape-card grid (smaller)
window.WS_ARCHIVE = [
  { name: 'STOREHUB WAREHOUSE', company: 'PMM', role: 'Lead FE Engineer', year: '2024', body: 'Boss handed every frontend decision to me — from stack selection to execution. Solo, from scratch.', stack: 'Lead · Solo FE' },
  { name: 'MPOS ECOSYSTEM', company: 'PMM', role: 'Mobile + Fullstack', year: '2024', body: 'Cashier web, dashboard, legacy refactor, plus a mobile loyalty point app. Mobile alone; rest with one BE engineer and my boss.', stack: 'Mobile solo · Web team' },
  { name: 'LANGITHUB', company: 'PMM', role: 'Mobile + BE Support', year: '2024', body: 'Mobile app end-to-end. Backed up the lead BE friend on technical decisions and execution.', stack: 'Mobile · BE assist' },
  { name: 'IAI CHATBOT', company: 'Core Initiative', role: 'Mobile Dev — Solo', year: '2023', body: 'Chatbot application from scratch. Mobile, solo from kickoff to ship.', stack: 'Mobile solo' },
  { name: 'BPRU MOBILE', company: 'Core Initiative', role: 'Mobile Dev', year: '2022 — 2023', body: 'My first mobile build at scale, under a senior engineer. Where I learned to ship.', stack: 'Mobile · Junior' },
];

window.WS_EXPERIENCE = [
  { co: 'Core Initiative Studio', role: 'Mobile Dev → Senior', span: '2022 — 2025 FT · 2025 — 2026 PT', dot: 0 },
  { co: 'PMM', role: 'Lead FE / Mobile / Fullstack', span: '2024 — Present (PT)', dot: 1 },
  { co: 'Pinetop', role: 'Product Engineer', span: '2025 — 2026', dot: 2 },
  { co: 'Debateme', role: 'Founding Engineer', span: '2026 — Present', dot: 3 },
];

window.WS_STAT = { years: 4, projects: '10+', companies: 4, solo: 6 };

// Atoms

window.WSTape = ({ width = 80, top = -10, left = '50%', rotate = -8, color = '#ffd84a', z = 6 }) => (
  <div style={{
    position: 'absolute', top, left, width, height: 24,
    transform: `translateX(-50%) rotate(${rotate}deg)`,
    background: color, opacity: 0.88,
    boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.06) 4px, rgba(0,0,0,0.06) 5px)',
    zIndex: z,
  }} />
);

window.WSCircle = ({ size = 220, top, left, right, color = '#ff5a3c', sw = 3, z = 4 }) => (
  <svg style={{ position: 'absolute', top, left, right, pointerEvents: 'none', zIndex: z }} width={size} height={size * 0.6} viewBox="0 0 200 120">
    <ellipse cx="100" cy="60" rx="92" ry="50" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeDasharray="200 30" />
  </svg>
);

window.WSScribbleArrow = ({ width = 120, top, left, right, rotate = 0, color = '#7df9c9', z = 4 }) => (
  <svg style={{ position: 'absolute', top, left, right, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', zIndex: z }} width={width} height={width * 0.6} viewBox="0 0 120 70">
    <path d="M 5 35 C 30 10, 60 55, 90 30" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M 80 22 L 95 28 L 85 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

window.WSStarBurst = ({ size = 80, top, left, right, color = '#ff5a3c', z = 4 }) => (
  <svg style={{ position: 'absolute', top, left, right, pointerEvents: 'none', zIndex: z }} width={size} height={size} viewBox="0 0 80 80">
    <g stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none">
      <line x1="40" y1="6" x2="40" y2="22" />
      <line x1="40" y1="58" x2="40" y2="74" />
      <line x1="6" y1="40" x2="22" y2="40" />
      <line x1="58" y1="40" x2="74" y2="40" />
      <line x1="14" y1="14" x2="26" y2="26" />
      <line x1="54" y1="54" x2="66" y2="66" />
      <line x1="66" y1="14" x2="54" y2="26" />
      <line x1="26" y1="54" x2="14" y2="66" />
    </g>
  </svg>
);
