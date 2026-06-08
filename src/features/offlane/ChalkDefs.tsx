type ChalkDefsProps = { intensity?: number }

export default function ChalkDefs({ intensity = 35 }: ChalkDefsProps) {
  const edge = (1.3 + intensity * 0.045).toFixed(2)
  const rough = (1.6 + intensity * 0.06).toFixed(2)
  const erode = 3.4 - intensity * 0.012
  const erodeBias = (erode * 0.86).toFixed(2)

  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="chalk-edge" x="-12%" y="-12%" width="124%" height="124%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves={2} seed={7} result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale={Number(edge)} xChannelSelector="R" yChannelSelector="G" />
        </filter>

        <filter id="chalk-edge-soft" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.013" numOctaves={2} seed={2} result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale={Number((Number(edge) * 1.3).toFixed(2))} xChannelSelector="R" yChannelSelector="G" />
        </filter>

        <filter id="chalk-rough" x="-18%" y="-18%" width="136%" height="136%">
          <feTurbulence type="fractalNoise" baseFrequency="0.013 0.02" numOctaves={2} seed={4} result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale={Number(rough)} xChannelSelector="R" yChannelSelector="G" result="r" />
          <feTurbulence type="fractalNoise" baseFrequency="0.07 0.09" numOctaves={3} seed={11} result="g" />
          <feColorMatrix in="g" type="matrix" values={`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -${erode.toFixed(2)} ${erodeBias}`} result="gm" />
          <feComposite in="r" in2="gm" operator="in" />
        </filter>

        <filter id="chalk-bold" x="-28%" y="-28%" width="156%" height="156%">
          <feTurbulence type="fractalNoise" baseFrequency="0.014 0.019" numOctaves={2} seed={6} result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale={5.2} xChannelSelector="R" yChannelSelector="G" result="rough" />
          <feTurbulence type="fractalNoise" baseFrequency="0.12 0.16" numOctaves={3} seed={9} result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.5 1.6" result="gm" />
          <feComposite in="rough" in2="gm" operator="in" />
        </filter>
      </defs>
    </svg>
  )
}
