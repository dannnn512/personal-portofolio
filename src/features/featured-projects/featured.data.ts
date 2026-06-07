import type { FeaturedProject } from './featured.types'

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: 'DEBATEME',
    company: 'Debateme',
    role: 'Founding Engineer',
    year: '2026 — Now',
    pitch:
      'The founder had the vision and 8 months of failed no-code attempts. No tech team, no plan B. He needed someone to take the whole stack off his hands.',
    shipped:
      'I am the tech department. Web, mobile, backend, infra — every layer, solo, founder-direct. Live with real users.',
    tags: ['Founding Engineer', 'Solo across stack', '0 → 1 with users'],
    handNote: 'every layer = me',
    tapeColor: '#ff5a3c',
    cardRotation: -1.5,
    tapeRotation: -6,
  },
  {
    name: 'TALENTCLOUD.AI',
    company: 'Pinetop',
    role: 'Product Engineer',
    year: '2025 — 2026',
    pitch:
      'The client needed attendance that couldn’t be faked and HR rules that fit their reality. The CEO sent me to gather it directly — no PM filter.',
    shipped:
      'Admin web + employee self-service + face-verified mobile attendance (AWS Rekognition). I ran the client calls, wrote the BRD, owned mobile end-to-end.',
    tags: ['Client-facing solo', 'AWS Rekognition', 'BRD → Production'],
    handNote: 'I met the client myself',
    tapeColor: '#7df9c9',
    cardRotation: 0.8,
    tapeRotation: 4,
    liveUrl: 'https://talentcloud.ai/',
  },
  {
    name: 'BRIGHTSCHOOLS',
    company: 'PMM',
    role: 'Right-hand Engineer',
    year: '2024',
    pitch:
      'Parents wanted a window into school. Teachers wanted a CMS that didn’t get in the way. Built from scratch with my boss — who later brought me in to lead his next company.',
    shipped:
      'Three products in one: parent + teacher mobile app, school CMS, and the API. I owned mobile and the API end-to-end. Still running in real schools, plus a sister build (MAS) for Muhammadiyah.',
    tags: ['Mobile + API end-to-end', 'Three-product suite', 'Live in schools'],
    handNote: 'trust earned, then deepened',
    tapeColor: '#ffd84a',
    cardRotation: -0.5,
    tapeRotation: -3,
    liveUrl: 'https://brightschools.id/',
  },
]
