export type Domain = "tech" | "fitness" | "creative" | "nerd";

export const DOMAIN_META: Record<
  Domain,
  { label: string; var: string; chip: string }
> = {
  tech: { label: "Tech", var: "var(--color-mint)", chip: "bg-primary" },
  fitness: { label: "Fitness", var: "var(--color-pink)", chip: "bg-accent" },
  creative: { label: "Creative", var: "var(--color-peri)", chip: "bg-link" },
  nerd: { label: "Nerd Stuff", var: "var(--color-gold)", chip: "bg-gold" },
};
