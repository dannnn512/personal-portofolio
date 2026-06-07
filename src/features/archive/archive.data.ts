export type ArchiveProject = {
  name: string
  company: string
  role: string
  year: string
  body: string
  stack: string
  tapeColor: string
  cardRotation: number
  tapeRotation: number
}

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    name: 'STOREHUB WAREHOUSE',
    company: 'PMM',
    role: 'Lead FE Engineer',
    year: '2026 — Now',
    body: 'Every frontend decision handed to me — from stack selection to execution. Solo, from scratch.',
    stack: 'Lead · Solo FE',
    tapeColor: '#ff5a3c',
    cardRotation: -1,
    tapeRotation: -5,
  },
  {
    name: 'MPOS ECOSYSTEM',
    company: 'PMM',
    role: 'Mobile + Fullstack',
    year: '2022 — Now',
    body: 'Cashier web, dashboard, legacy refactor, plus a mobile loyalty point app. Mobile, FE, BE, and product calls — the whole stack.',
    stack: 'Mobile · FE · BE · product',
    tapeColor: '#7df9c9',
    cardRotation: 1.2,
    tapeRotation: 4,
  },
  {
    name: 'LANGITHUB',
    company: 'PMM',
    role: 'Mobile + BE Support',
    year: '2025 — Now',
    body: 'Mobile app end-to-end. Backed up the lead BE friend on technical decisions and execution.',
    stack: 'Mobile · BE assist',
    tapeColor: '#ffd84a',
    cardRotation: -0.8,
    tapeRotation: -3,
  },
  {
    name: 'IAI CHATBOT',
    company: 'Core Initiative',
    role: 'Mobile Dev — Solo',
    year: '2024',
    body: 'Chatbot application from scratch. Mobile, solo from kickoff to ship.',
    stack: 'Mobile solo',
    tapeColor: '#ff5a3c',
    cardRotation: 0.6,
    tapeRotation: 6,
  },
  {
    name: 'BPRU MOBILE',
    company: 'Core Initiative',
    role: 'Mobile Dev',
    year: '2024 — 2026',
    body: 'My first mobile build at scale, under a senior engineer. Where I learned to ship.',
    stack: 'Mobile · Junior',
    tapeColor: '#7df9c9',
    cardRotation: -1.5,
    tapeRotation: -2,
  },
]
