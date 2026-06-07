export type NowItemStatus = 'done' | 'in-progress' | 'todo'

export type NowItem = {
  text: string
  status: NowItemStatus
}

export const NOW_ITEMS: NowItem[] = [
  { text: 'Room moderation rules', status: 'done' },
  { text: 'Vote weights v2', status: 'done' },
  { text: 'Spectator UI (in progress)', status: 'in-progress' },
  { text: 'Notifications batching', status: 'todo' },
]

const STATUS_PREFIX: Record<NowItemStatus, string> = {
  done: '✓',
  'in-progress': '→',
  todo: '○',
}

export function getStatusPrefix(status: NowItemStatus): string {
  return STATUS_PREFIX[status]
}
