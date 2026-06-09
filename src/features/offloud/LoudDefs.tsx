export default function LoudDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="loud-edge" x="-12%" y="-12%" width="124%" height="124%">
          <feTurbulence type="fractalNoise" baseFrequency="0.013 0.02" numOctaves={2} seed={7} result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale={2.8} xChannelSelector="R" yChannelSelector="G" />
        </filter>

        <filter id="loud-rough" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.015 0.022" numOctaves={2} seed={4} result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale={3.4} xChannelSelector="R" yChannelSelector="G" result="r" />
          <feTurbulence type="fractalNoise" baseFrequency="0.08 0.1" numOctaves={3} seed={11} result="g" />
          <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.4 1.9" result="gm" />
          <feComposite in="r" in2="gm" operator="in" />
        </filter>

        <filter id="loud-bold" x="-28%" y="-28%" width="156%" height="156%">
          <feTurbulence type="fractalNoise" baseFrequency="0.014 0.019" numOctaves={2} seed={6} result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale={5.4} xChannelSelector="R" yChannelSelector="G" result="rough" />
          <feTurbulence type="fractalNoise" baseFrequency="0.12 0.16" numOctaves={3} seed={9} result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.5 1.6" result="gm" />
          <feComposite in="rough" in2="gm" operator="in" />
        </filter>
      </defs>
    </svg>
  )
}
