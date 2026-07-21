export type Domain = 'tech' | 'fitness' | 'creative' | 'nerd'

export const DOMAIN_META: Record<Domain, { label: string; var: string }> = {
  tech: { label: 'Tech', var: 'var(--color-tech)' },
  fitness: { label: 'Fitness', var: 'var(--color-fitness)' },
  creative: { label: 'Creative', var: 'var(--color-creative)' },
  nerd: { label: 'Nerd Stuff', var: 'var(--color-nerd)' },
}