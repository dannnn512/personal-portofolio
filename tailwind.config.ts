import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        'bg-alt': '#1a1a1a',
        paper: '#ede5d3',
        'paper-dark': '#2a2620',
        ink: '#1a1614',
        'ink-dim': '#5a504a',
        cream: '#f5f1e8',
        muted: '#9a948a',
        hot: '#ff5a3c',
        electric: '#7df9c9',
        yellow: '#ffd84a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
        mono: ['var(--font-mono)', 'monospace'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        editorial: ['var(--font-editorial)', 'serif'],
      },
      fontSize: {
        'stat': ['88px', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'monumental': ['200px', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
        'huge': ['180px', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
        'section-xl': ['120px', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'section-lg': ['88px', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'section-md': ['64px', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.04em',
        tight: '-0.03em',
        snug: '-0.02em',
        normal: '0em',
        wide: '0.06em',
        wider: '0.08em',
        widest: '0.2em',
        mono: '0.14em',
        label: '0.18em',
      },
      boxShadow: {
        card: '0 20px 50px rgba(0,0,0,0.4)',
        'card-sm': '0 12px 30px rgba(0,0,0,0.35)',
        'now': '0 12px 30px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
