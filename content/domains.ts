/**
 * Single source of truth for the site's domains.
 *
 * Adding a domain = adding one entry to DOMAIN_META and one slug to DOMAINS.
 * Route params, static params, archive filters, and label↔slug mapping all
 * derive from here — no per-page copies.
 */

export const DOMAINS = ["tech", "fitness", "creative", "nerd"] as const;

export type Domain = (typeof DOMAINS)[number];

export type DomainMeta = {
  /** Display name. Also the value stored in post frontmatter `domain`. */
  label: string;
  var: string;
  chip: string;
  /** Sub-head on the domain landing page. */
  desc: string;
};

export const DOMAIN_META: Record<Domain, DomainMeta> = {
  tech: {
    label: "Tech",
    var: "var(--color-mint)",
    chip: "bg-primary",
    desc: "Frontend craft, dev tools, building in public.",
  },
  fitness: {
    label: "Fitness",
    var: "var(--color-pink)",
    chip: "bg-accent",
    desc: "Strength training, running, the boring middle.",
  },
  creative: {
    label: "Creative",
    var: "var(--color-peri)",
    chip: "bg-link",
    desc: "Prints, process, gouache vs procreate.",
  },
  nerd: {
    label: "Nerd Stuff",
    var: "var(--color-gold)",
    chip: "bg-gold",
    desc: "Comics, cards, gaming, the Lego shelf.",
  },
};

const DOMAIN_BY_LABEL = new Map<string, Domain>(
  DOMAINS.map((domain) => [DOMAIN_META[domain].label, domain]),
);

/** Narrows an untrusted route param / search param to a Domain. */
export function isDomain(value: string | undefined): value is Domain {
  return value != null && (DOMAINS as readonly string[]).includes(value);
}

/** Post frontmatter stores the label ("Nerd Stuff") — map it back to the slug. */
export function domainFromLabel(label: string): Domain | undefined {
  return DOMAIN_BY_LABEL.get(label);
}
