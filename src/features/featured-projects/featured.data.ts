import type { Project } from './featured.types'

// First 3 render as featured cards; the rest render in the Archive section.
// Screenshots load from /public/projects/<slug>.png when the file exists.
export const PROJECTS: Project[] = [
  {
    slug: 'debateme',
    name: 'DEBATEME',
    company: 'DebateMe',
    role: 'Product Engineer · Sole engineer',
    year: '2026 — Now',
    status: 'Live with real users',
    description:
      'Debate platform with text, voice, and video debates, AI judging (Gemini), and ELO ranking. Sole engineer, working with a non-technical founder.',
    tags: ['Go', 'Elixir', 'React', 'Flutter', 'Supabase'],
    links: [{ label: 'Live', href: 'https://debateme.io' }],
    handNote: 'every layer = me',
  },
  {
    slug: 'talentcloud',
    name: 'TALENTCLOUD',
    company: 'TalentCloud Sdn Bhd / Pinetop Technology Venture',
    role: 'Full-stack Engineer',
    year: '2025 — 2026',
    description:
      'Multi-tenant HRMS used by 20+ companies in Malaysia. I proposed and built face-recognition attendance on AWS Rekognition with liveness detection that blocks photo, video, and screen spoofing, end to end (frontend, backend, database). Published on iOS and Android.',
    tags: ['React Native', 'Go', 'AWS Rekognition'],
    links: [
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=ai.talentcloud.ess.mobile',
      },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/talentcloud/id1482887671' },
    ],
    handNote: 'proposed it, then built it',
  },
  {
    slug: 'brightschools',
    name: 'BRIGHTSCHOOLS',
    company: 'PMM Tech',
    role: 'Mobile Engineer · Technical Partner',
    description:
      'Parent companion app for a school-management platform, used by ~300 students’ families across 2 elementary schools, with a related product running in 5 schools. Built from zero as mobile engineer and technical partner.',
    tags: ['Flutter'],
    links: [{ label: 'Live', href: 'https://brightschools.id/' }],
    handNote: 'built from zero',
  },
  {
    slug: 'emobo',
    name: 'EMOBO',
    company: 'Emobo Technology',
    role: 'Sole Mobile Engineer',
    year: '2025',
    description:
      'On-demand home-service MVP: booking and technician matching. Sole mobile engineer; defined the mobile architecture and API contract.',
    tags: ['Flutter'],
    links: [],
  },
  {
    slug: 'mpos',
    name: 'MPOS',
    company: 'PMM Tech',
    role: 'Mobile + Fullstack',
    year: '2022 — Now',
    description:
      'Multi-tenant POS across 18 outlets: cashier, POS, and mobile apps. Developed during the Core Initiative period.',
    tags: [],
    links: [],
  },
  {
    slug: 'khk-management-system',
    name: 'KHK MANAGEMENT SYSTEM',
    company: 'Pinetop',
    status: 'Internal · not public',
    description:
      'HQ web portal plus an offline-first field app for durian-farm workers to scan tags, syncing when back online.',
    tags: ['React', 'React Native'],
    links: [],
  },
  {
    slug: 'fuzevalo',
    name: 'FUZEVALO',
    company: 'Client project',
    description:
      'Valorant game catalog built end to end for a client: frontend, backend, deployment, and hosting.',
    tags: ['Next.js'],
    links: [{ label: 'Live', href: 'https://fuzevalo.com' }],
  },
]

export const FEATURED_PROJECTS = PROJECTS.slice(0, 3)
export const ARCHIVE_PROJECTS = PROJECTS.slice(3)
