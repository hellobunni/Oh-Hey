import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Field } from '@/components/ui/field'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Form Fields',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Story layout helpers ─────────────────────────────────────────────────────

const mono11: React.CSSProperties = {
  fontFamily: 'font-mono',
  fontSize: '11px',
}

function SectionLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-1.5 font-medium" style={style}>
      {children}
    </div>
  )
}

function Grid({ cols, children }: { cols: 1 | 2 | 3; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {children}
    </div>
  )
}

function Card({
  name, arg, children, style,
}: { name: string; arg?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="border border-line flex flex-col" style={style}>
      <div className="font-mono text-xs tracking-wide uppercase text-ink-soft flex justify-between items-center p-1.5 border-b border-line bg-paper-2">
        <span className="font-medium">{name}</span>
        {arg && <span className="text-accent opacity-80">{arg}</span>}
      </div>
      <div className="p-4" style={style}>
        {children}
      </div>
    </div>
  )
}

// ─── Interactive sub-components ───────────────────────────────────────────────

function TextareaWithCounter({ maxLength = 240 }: { maxLength?: number }) {
  const defaultVal = "We're rebuilding our admin app and need a design system that'll outlast the next two redesigns."
  const [val, setVal] = React.useState(defaultVal)
  return (
    <Field label="Tell me about your project" maxLength={maxLength} currentLength={val.length}>
      <textarea
        maxLength={maxLength}
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder="A few sentences is plenty."
      />
    </Field>
  )
}

function PasswordField() {
  const [show, setShow] = React.useState(false)
  return (
    <Field
      label="Password"
      suffix={show ? 'hide' : 'show'}
      suffixAction
      onSuffixClick={() => setShow(s => !s)}
    >
      <input type={show ? 'text' : 'password'} defaultValue="••••••••••" />
    </Field>
  )
}

function SwitchGroup() {
  const [vals, setVals] = React.useState([true, false, false])
  const labels = ['Auto-save drafts', 'Send weekly summary', 'Public profile']
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {labels.map((lbl, i) => (
        <label key={lbl} className="tk-switch">
          <input type="checkbox" checked={vals[i]} onChange={() => setVals(v => v.map((x, j) => j === i ? !x : x))} />
          <span className="track" />
          {lbl}
        </label>
      ))}
    </div>
  )
}

function CheckboxGroup() {
  const [vals, setVals] = React.useState([true, false])
  const labels = ['Subscribe to the newsletter', 'Send me the weekly digest']
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {labels.map((lbl, i) => (
        <label key={lbl} className="tk-check">
          <input type="checkbox" checked={vals[i]} onChange={() => setVals(v => v.map((x, j) => j === i ? !x : x))} />
          <span className="box" />
          {lbl}
        </label>
      ))}
      <label className="tk-check">
        <input type="checkbox" disabled />
        <span className="box" />
        <span style={{ opacity: 0.5 }}>Beta features (locked)</span>
      </label>
    </div>
  )
}

function RadioGroup() {
  const [val, setVal] = React.useState('The Build')
  const opts = ['The Blueprint', 'The Build', 'The Partner']
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {opts.map(opt => (
        <label key={opt} className="tk-radio">
          <input type="radio" name="plan" checked={val === opt} onChange={() => setVal(opt)} />
          <span className="dot" />
          {opt}
        </label>
      ))}
    </div>
  )
}

function ChoiceCards() {
  const [selected, setSelected] = React.useState('Frontend development')
  const cards = [
    { key: 'OPT A', name: 'Design system',       sub: 'Tokens, components, documentation.' },
    { key: 'OPT B', name: 'Frontend development', sub: 'Production builds in React, Next, TanStack.' },
    { key: 'OPT C', name: 'UI/UX consulting',     sub: 'Audit, strategy, flows, frameworks.' },
    { key: 'OPT D', name: 'Brand & visual design', sub: 'Identity, type, colour, motion.' },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
      {cards.map(c => (
        <button
          key={c.name}
          className={`tk-choice-card${selected === c.name ? ' selected' : ''}`}
          type="button"
          onClick={() => setSelected(c.name)}
        >
          <div className="top"><span className="key">{c.key}</span><span className="check" /></div>
          <div className="name">{c.name}</div>
          <div className="sub">{c.sub}</div>
        </button>
      ))}
    </div>
  )
}

// ─── Contact form with Zod ─────────────────────────────────────────────────────

const contactSchema = z.object({
  email:   z.email('Enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
})
type ContactForm = z.infer<typeof contactSchema>

function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } =
    useForm<ContactForm>({ resolver: zodResolver(contactSchema) })

  if (isSubmitSuccessful) return (
    <div className="font-mono text-sm text-ink-soft flex flex-col gap-3">
      <span>Message sent.</span>
      <button onClick={() => reset()} style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', fontSize: 'inherit', color: 'var(--color-accent)', textAlign: 'left', padding: 0 }}>
        Send another →
      </button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(d => console.log(d))} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} noValidate>
      <Field label="Email" required error={errors.email?.message}>
        <input type="email" placeholder="your@email.com" {...register('email')} />
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea rows={4} placeholder="Tell me about your project..." {...register('message')} />
      </Field>
      <Button type="submit" style={{ alignSelf: 'start' }}>Send →</Button>
    </form>
  )
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const FieldTypes: Story = {
  name: 'Form Fields — types',
  render: () => (
    <div>
      <div style={{ ...mono11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-soft)', marginBottom: '8px' }}>
        10 · Components — Form fields
      </div>
      <h2 className="font-serif text-4xl font-bold tracking-tight leading-tight mb-2">
        Single border. Monospace label. <em>Many states.</em>
      </h2>
      <p className="font-mono text-sm text-ink-soft mb-8 max-w-2xl leading-relaxed">
        Every field composes from one wrapper (<code className="text-accent">.tk-field</code>) with a label, control, and optional helper/error/counter rows. Size, state, and layout are independent modifier classes — combine freely.
      </p>

      <SectionLabel>Field types · 6 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Text Input" arg="type=text">
          <Field label="First name" required>
            <input placeholder="Lynae" />
          </Field>
        </Card>

        <Card name="Email + Prefix" arg="prefix=@">
          <Field label="Email" prefix="@">
            <input placeholder="your@email.com" />
          </Field>
        </Card>

        <Card name="Password + Suffix" arg="type=password">
          <PasswordField />
        </Card>

        <Card name="Number + Unit" arg="suffix=USD">
          <Field label="Budget range" prefix="$" suffix="USD">
            <input type="number" placeholder="10,000" />
          </Field>
        </Card>

        <Card name="Select" arg="native">
          <Field label="Project type">
            <select>
              <option>Design system</option>
              <option>Frontend development</option>
              <option>UI/UX consulting</option>
              <option>Brand &amp; visual design</option>
            </select>
          </Field>
        </Card>

        <Card name="Textarea + Counter" arg="maxLength=240">
          <TextareaWithCounter maxLength={240} />
        </Card>
      </Grid>
    </div>
  ),
}

export const FieldSizes: Story = {
  name: 'Form Fields — sizes',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>Sizes · 3 stories</SectionLabel>
      <Grid cols={3}>
        <Card name="Small" arg=".size-sm">
          <Field label="Compact" size="sm">
            <input placeholder="size-sm" />
          </Field>
        </Card>
        <Card name="Medium" arg=".size-md (default)">
          <Field label="Default">
            <input placeholder="size-md" />
          </Field>
        </Card>
        <Card name="Large" arg=".size-lg">
          <Field label="Hero CTA" size="lg">
            <input placeholder="your@email.com" />
          </Field>
        </Card>
      </Grid>
    </div>
  ),
}

export const FieldStates: Story = {
  name: 'Form Fields — states',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>States · 6 stories</SectionLabel>
      <Grid cols={3}>
        <Card name="Default" arg="resting">
          <Field label="Email">
            <input placeholder="your@email.com" />
          </Field>
        </Card>
        <Card name="Focused" arg=".state-focus">
          <Field label="Email" state="focus" helper="— we'll never share this">
            <input defaultValue="lynae@" />
          </Field>
        </Card>
        <Card name="Filled" arg="has value">
          <Field label="Email">
            <input defaultValue="lynae@oh-hey-lynae.com" />
          </Field>
        </Card>
        <Card name="Error" arg=".state-error">
          <Field label="Email" error="Please enter a valid email address">
            <input defaultValue="not-an-email" />
          </Field>
        </Card>
        <Card name="Success" arg=".state-success">
          <Field label="Email" state="success" success="Verified">
            <input defaultValue="lynae@oh-hey-lynae.com" />
          </Field>
        </Card>
        <Card name="Disabled / Readonly" arg=".state-disabled">
          <Field label="Plan" state="disabled" helper="— locked while engagement is active">
            <input defaultValue="The Partner (retainer)" readOnly />
          </Field>
        </Card>
      </Grid>
    </div>
  ),
}

export const FieldLayouts: Story = {
  name: 'Form Fields — layouts',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>Layouts · 2 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Stacked" arg=".layout-stacked (default)">
          <Field label="Project name">
            <input defaultValue="Atlas Redesign" />
          </Field>
        </Card>
        <Card name="Inline" arg=".layout-inline">
          <Field label="Timeline" layout="inline">
            <input defaultValue="4–8 weeks" />
          </Field>
        </Card>
      </Grid>
    </div>
  ),
}

export const ChoiceInputs: Story = {
  name: 'Form Fields — choice inputs',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>Choice inputs · 5 stories</SectionLabel>
      <Grid cols={3}>
        <Card name="Checkbox" arg=".tk-check">
          <CheckboxGroup />
        </Card>
        <Card name="Radio group" arg=".tk-radio">
          <RadioGroup />
        </Card>
        <Card name="Switch" arg=".tk-switch">
          <SwitchGroup />
        </Card>
      </Grid>
      <div style={{ marginTop: '12px' }}>
        <Card name="Choice cards — interactive" arg=".tk-choice-card">
          <ChoiceCards />
        </Card>
      </div>
    </div>
  ),
}

export const SpecialtyFields: Story = {
  name: 'Form Fields — specialty',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>Specialty · 2 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Search" arg=".tk-search">
          <div className="tk-search">
            <input placeholder="Search posts, projects, tags…" />
            <kbd className="kbd">⌘ K</kbd>
          </div>
        </Card>
        <Card name="File dropzone" arg=".tk-dropzone">
          <div className="tk-dropzone">
            <span className="icon">⌁</span>
            Drop your brief here, or click to browse
            <div className="meta">PDF · DOC · DOCX — up to 10MB</div>
          </div>
        </Card>
      </Grid>
    </div>
  ),
}

export const ComposedForm: Story = {
  name: 'Form Fields — composed (Zod)',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <SectionLabel style={{ margin: '0 0 12px' }}>Composed · newsletter signup + contact with Zod validation</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Card name="Newsletter signup" arg="composition">
          <Field label="Get the digest" helper="— every other Sunday · no tracking" suffix="SUBSCRIBE →" suffixAction>
            <input placeholder="your@email.com" />
          </Field>
        </Card>
        <Card name="Contact form" arg="react-hook-form + zod">
          <ContactForm />
        </Card>
      </div>
    </div>
  ),
}
