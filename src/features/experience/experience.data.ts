export type ExperienceItem = {
  company: string
  fullName?: string
  role: string
  span: string
  dotColor: string
  note: string
}

// Newest first.
export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'DebateMe',
    role: 'Product Engineer (sole engineer)',
    span: 'MAY 2026 — NOW',
    dotColor: '#ff5a3c',
    note: 'Own the entire technical side for a non-technical founder: architecture, Go backend, Elixir real-time service, React web app, Flutter mobile app (iOS and Android). Core product shipped in about 2 months.',
  },
  {
    company: 'TalentCloud',
    fullName: 'TalentCloud Sdn Bhd / Pinetop Technology Venture',
    role: 'Full-stack Engineer',
    span: 'NOV 2025 — MAY 2026',
    dotColor: '#7df9c9',
    note: 'Multi-tenant HRMS used by 20+ companies in Malaysia. Proposed to the CEO and built the move to AWS Rekognition face recognition with liveness detection, end to end. Also built KHK Management System.',
  },
  {
    company: 'Emobo Technology',
    role: 'Mobile Engineer (contract)',
    span: 'SEP — NOV 2025',
    dotColor: '#ffd84a',
    note: 'Brought in directly by the CTO as the sole mobile engineer for an on-demand home-service startup. Decided the mobile architecture and defined the API contract; built the MVP booking and technician-matching flow in Flutter.',
  },
  {
    company: 'PMM Tech',
    role: 'Engineer (part-time)',
    span: 'JAN 2024 — NOW',
    dotColor: '#ff5a3c',
    note: 'Built BrightSchools from zero as mobile engineer and technical partner; works on MPOS.',
  },
  {
    company: 'Core Initiative Studio',
    role: 'Frontend → Mobile Engineer',
    span: 'JUN 2022 — JUN 2025',
    dotColor: '#7df9c9',
    note: 'Started as a frontend web developer, moved to mobile; owned mobile architecture end to end on most projects.',
  },
]
