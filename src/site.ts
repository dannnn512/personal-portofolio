// Single source for SEO metadata — read by vite.config.ts (HTML head, sitemap,
// robots.txt, JSON-LD) and by the app (per-route title + canonical).
export const SITE_URL = 'https://aryaziddan.pages.dev' // no trailing slash
export const SITE_NAME = 'Ziddan Aryasatya Nugraha'
export const SITE_TITLE = 'Ziddan Aryasatya Nugraha · Forward Deployed & Product Engineer'
export const SITE_DESCRIPTION =
  "Software engineer (forward deployed & product). I build web, mobile, and backend end to end as the technical partner founders don't have yet. Remote from Indonesia."

// Indexable routes for sitemap.xml; per-route <title> prefixes (home uses SITE_TITLE).
export const ROUTES: { path: string; title?: string }[] = [
  { path: '/' },
  { path: '/hire', title: 'Work with me' },
  { path: '/offlane', title: 'OFF/LANE' },
  { path: '/offloud', title: 'OFF/LOUD' },
]

export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  jobTitle: ['Forward Deployed Engineer', 'Product Engineer', 'Software Engineer'],
  description: SITE_DESCRIPTION,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og.png`,
  email: 'mailto:arya.ziddan7@gmail.com',
  address: { '@type': 'PostalAddress', addressCountry: 'ID' },
  sameAs: ['https://github.com/dannnn512', 'https://www.linkedin.com/in/aryaziddan/'],
  knowsAbout: [
    'Product engineering',
    'Forward deployed engineering',
    'Technical partnership for founders',
    'Mobile app development',
    'Web development',
    'Backend development',
    'React Native',
    'Flutter',
    'React',
    'Next.js',
    'Vue',
    'Nuxt',
    'TypeScript',
    'Go',
    'Elixir',
    'PHP',
    'PostgreSQL',
    'AWS',
  ],
}
