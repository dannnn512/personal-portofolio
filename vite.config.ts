import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Deployed origin, e.g. 'https://your-project.pages.dev' (no trailing slash).
// While this is still a [PLACEHOLDER], canonical + og:url are left out and og:image stays relative.
const SITE_URL = '[SITE_URL]'

function siteMeta(): Plugin {
  const hasSiteUrl = !/^\[.*\]$/.test(SITE_URL)
  const origin = SITE_URL.replace(/\/+$/, '')
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      const urlTags = hasSiteUrl
        ? `<link rel="canonical" href="${origin}/" />\n    <meta property="og:url" content="${origin}/" />`
        : ''
      return html
        .replace('<!-- SITE_URL_META -->', urlTags)
        .replaceAll('__OG_IMAGE__', hasSiteUrl ? `${origin}/og.png` : '/og.png')
    },
  }
}

export default defineConfig({
  plugins: [react(), siteMeta()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
