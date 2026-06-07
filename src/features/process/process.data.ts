export type ProcessStep = {
  number: string
  title: string
  body: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'WE TALK',
    body: 'Plain words, no jargon. You tell me the idea. I tell you what it really takes — including the parts you don’t want to hear.',
  },
  {
    number: '02',
    title: 'WE SCOPE',
    body: 'What ships first. What waits. What we cut. You see every tradeoff, with prices.',
  },
  {
    number: '03',
    title: 'I BUILD',
    body: 'Weekly demos. Real product in your hands every Friday. If it feels off, we change it before it ossifies.',
  },
  {
    number: '04',
    title: 'TEAM JOINS',
    body: 'Only when scope demands. FE, BE, design — people I’ve already shipped with. Lean by default.',
  },
]
