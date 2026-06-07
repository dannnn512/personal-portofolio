export type ExperienceItem = {
  company: string
  role: string
  span: string
  dotColor: string
  note: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Core Initiative Studio',
    role: 'Mobile Dev → Senior',
    span: '2022 — 2025 FT · 2025 — 2026 PT',
    dotColor: '#ff5a3c',
    note: 'Where I learned to ship. Started junior. Ended up solo on 12+ products.',
  },
  {
    company: 'PMM',
    role: 'Lead FE / Mobile / Fullstack',
    span: '2024 — Now (PT)',
    dotColor: '#ffd84a',
    note: 'Pur ran Core. He stepped back, started PMM, called me first. Still here.',
  },
  {
    company: 'Pinetop',
    role: 'Product Engineer',
    span: '2025 — 2026',
    dotColor: '#7df9c9',
    note: 'Michael sent me to meet clients alone. Requirements → PRD → shipped.',
  },
  {
    company: 'Debateme',
    role: 'Founding Engineer',
    span: '2026 — Now',
    dotColor: '#ff5a3c',
    note: 'Scott had the vision. I am the tech department.',
  },
]
