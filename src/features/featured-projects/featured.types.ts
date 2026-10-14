export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  name: string
  company: string
  role?: string
  year?: string
  status?: string
  description: string
  tags: string[]
  links: ProjectLink[]
  handNote?: string
}
