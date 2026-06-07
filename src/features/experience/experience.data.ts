export type ExperienceItem = {
  company: string
  fullName?: string
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
    fullName: 'Putra Muda Mandiri',
    role: 'Lead FE / Mobile / Fullstack',
    span: '2024 — Now (PT)',
    dotColor: '#ffd84a',
    note: 'Brought in as Lead Frontend because I already knew the products inside-out. Still here.',
  },
  {
    company: 'Pinetop',
    fullName: 'Pinetop Technology Venture',
    role: 'Product Engineer',
    span: '2025 — 2026',
    dotColor: '#7df9c9',
    note: 'Came in as Pinetop pivoted to fully back the TalentCloud.ai acquisition. Owned client requirements end-to-end — met clients, wrote the BRDs, shipped the product.',
  },
  {
    company: 'Debateme',
    fullName: 'Debateme Limited',
    role: 'Founding Engineer',
    span: '2026 — Now',
    dotColor: '#ff5a3c',
    note: 'Founding tech department. Every layer, founder-direct.',
  },
]
