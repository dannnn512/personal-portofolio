import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { PERSON_JSON_LD, ROUTES, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from './src/site'

// Fills the SEO placeholders in index.html and emits robots.txt + sitemap.xml.
// Edit values in src/site.ts.
function siteMeta(): Plugin {
  const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      return html
        .replaceAll('__SITE_TITLE__', escape(SITE_TITLE))
        .replaceAll('__SITE_DESCRIPTION__', escape(SITE_DESCRIPTION))
        .replaceAll('__SITE_URL__', SITE_URL)
        .replace(
          '<!-- JSON_LD -->',
          `<script type="application/ld+json">${JSON.stringify(PERSON_JSON_LD).replace(/</g, '\\u003c')}</script>`
        )
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      })
      const urls = ROUTES.map((r) => `  <url><loc>${SITE_URL}${r.path}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
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
