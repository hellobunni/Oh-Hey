# Repo Split Migration Guide

This document covers everything you do manually after the `split/oh-hey` branch
is merged. The code split is done — this is the Vercel, DNS, and env-var work.

---

## What changed in the split

| | Before | After |
|---|---|---|
| **Oh Hey** | `/` + `/consulting/*` in one project | This repo, Oh Hey only |
| **Kodara** | `/consulting/*` routes in this repo | Separate repo at `/Users/breegardner/Desktop/Bunni/Kodara` |
| **Route logic** | `AppChrome` switched nav/footer by path | Each app has its own fixed chrome |

---

## Step 1 — Push the Kodara repo to GitHub

```bash
cd /Users/breegardner/Desktop/Bunni/Kodara
# Create a new repo on GitHub (hellobunni/Kodara or similar), then:
git remote add origin git@github.com:hellobunni/Kodara.git
git push -u origin main
```

---

## Step 2 — Create the Kodara Vercel project

1. Go to vercel.com → **Add New Project** → import `hellobunni/Kodara`
2. **Framework preset**: Next.js (auto-detected)
3. **Root directory**: leave as `/` (it's a standalone repo, not a monorepo)
4. **Team**: kodara-advisory

---

## Step 3 — Set environment variables

### Kodara Vercel project
Add these in Vercel → Settings → Environment Variables (Production + Preview + Development):

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | same key as Oh Hey — copy from the existing oh-hey project |

### Oh Hey Vercel project (existing)
No new variables needed. `RESEND_API_KEY` is already set and is used by
the newsletter subscribe action (`src/app/actions.ts`).

**Future Oh Hey vars** (when newsletter is properly implemented):
- `RESEND_API_KEY` — already present
- `RESEND_AUDIENCE_ID` — add this when you wire up audience-based subscriptions
  in `src/app/actions.ts`

---

## Step 4 — Attach domains

### Kodara project
In the new Kodara Vercel project → Settings → Domains:
- Add `kodaraadvisory.com`
- Add `kodaraadvisory.co`
- Add `staging.kodaraadvisory.co` (point to the staging/preview deployment)

Remove `kodaraadvisory.com` and `kodaraadvisory.co` from the old oh-hey project
once the new project is live.

### Oh Hey project (existing)
- Add `oheythere.com`
- The existing Vercel preview URL (`oh-hey-one.vercel.app`) can stay as-is

---

## Step 5 — Merge and deploy Oh Hey

```bash
# In hellobunni/Oh-Hey
git checkout main
git merge split/oh-hey
git push origin main
```

Vercel will auto-deploy. Verify all Oh Hey routes work:
- `/` → home
- `/about`, `/archive`, `/[domain]/[slug]`
- Footer "↗ kodara/" link → `https://kodaraadvisory.com` (external, opens new tab)

---

## Known TODOs

### Newsletter action sender address
`src/app/actions.ts:8` — the newsletter subscribe action currently sends from:
```
from: 'Oh Hey <hi@mail.kodaraadvisory.co>'
```
Once `oheythere.com` is set up as a verified domain in Resend, update this to:
```
from: 'Oh Hey <hi@mail.oheythere.com>'
```

### `/work-with-me` contact form is fake
`src/app/(main)/work-with-me/page.tsx:17` — the form calls `setSubmitted(true)`
on submit without sending anything. This is a placeholder. Wire it up to a
Server Action (similar to `src/app/actions.ts`) when ready.

### Kodara footer link
`src/components/layout/OhHeyFooter.tsx:66` — currently links to
`https://kodaraadvisory.com`. Update if the final domain changes.

### Kodara URL paths (optional cleanup)
The Kodara app still serves content at `/consulting/*` internally. Once it's
on its own domain, you may want to restructure routes to `/`, `/about`, etc.
instead of `/consulting/about`. This is cosmetic — not required for launch.

### `pnpm-workspace.yaml` in Oh Hey root
This file exists but Oh Hey is not a monorepo. It's a leftover. Safe to delete.
