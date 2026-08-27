import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Search } from 'lucide-react'
import { Field } from '@/components/ui/field'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Atoms/Form Fields',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Layout helpers ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 font-mono text-xs font-medium uppercase tracking-wide text-ink-soft">
      {children}
    </div>
  )
}

function ThemePanel({
  theme,
  children,
}: {
  theme: 'light' | 'dark'
  children: React.ReactNode
}) {
  return (
    <div
      data-theme={theme}
      className={
        theme === 'light'
          ? 'flex w-[440px] flex-col gap-3.5 rounded-2xl bg-paper p-7'
          : 'flex w-[440px] flex-col gap-3.5 rounded-2xl border border-line bg-paper-2 p-7'
      }
    >
      <div className={`font-px text-xs ${theme === 'light' ? 'text-ink' : 'text-mint'}`}>
        {theme === 'light' ? 'LIGHT MODE' : 'DARK MODE'}
      </div>
      {children}
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

function SwitchDemo() {
  const [on, setOn] = React.useState(true)
  return (
    <label className="tk-switch">
      <input type="checkbox" checked={on} onChange={() => setOn(v => !v)} />
      <span className="track" />
      Auto-post to Discord
    </label>
  )
}

function CheckboxDemo() {
  const [on, setOn] = React.useState(true)
  return (
    <label className="tk-check">
      <input type="checkbox" checked={on} onChange={() => setOn(v => !v)} />
      <span className="box" />
      Notify on new upload
    </label>
  )
}

function RadioDemo() {
  const [val, setVal] = React.useState('tue')
  return (
    <label className="tk-radio">
      <input type="radio" name="stream-day" checked={val === 'tue'} onChange={() => setVal('tue')} />
      <span className="dot" />
      Tuesday stream
    </label>
  )
}

function ChoiceCards({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = React.useState('Cozy Games')
  const cards = compact
    ? [
        { name: 'Cozy Games', sub: 'selected' },
        { name: 'Variety', sub: undefined },
      ]
    : [
        { name: 'Cozy Games', sub: 'selected' },
        { name: 'Variety', sub: undefined },
        { name: 'Art Stream', sub: undefined },
        { name: 'Chill', sub: undefined },
      ]
  return (
    <div className="flex flex-col gap-2.5">
      {cards.map(c => (
        <button
          key={c.name}
          className={`tk-choice-card${selected === c.name ? ' selected' : ''}`}
          type="button"
          onClick={() => setSelected(c.name)}
        >
          <div className="top">
            <div className="name">{c.name}</div>
            {selected === c.name && c.sub && <div className="sub">{c.sub}</div>}
          </div>
          <span className="check" />
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
    <div className="flex flex-col gap-3 font-sans text-sm font-semibold text-ink-soft">
      <span>Message sent.</span>
      <button
        onClick={() => reset()}
        className="cursor-pointer border-none bg-transparent p-0 text-left font-sans text-sm font-semibold text-pink underline"
      >
        Send another →
      </button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(d => console.log(d))} className="flex flex-col gap-5" noValidate>
      <Field label="Email" required error={errors.email?.message}>
        <input type="email" placeholder="your@email.com" {...register('email')} />
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea rows={4} placeholder="Tell me about your project..." {...register('message')} />
      </Field>
      <Button type="submit" className="self-start">Send →</Button>
    </form>
  )
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const LightDark: Story = {
  name: 'Light / Dark mode',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="flex flex-col gap-7 bg-deep p-12 text-paper-ink">
      <div className="font-px text-[22px] text-mint">FORM FIELDS — ALL TYPES & VARIANTS</div>
      <p className="max-w-[760px] font-sans text-[13px] font-semibold text-ink-soft">
        Text input, select, textarea, checkbox, radio, switch, choice card, search, dropzone.
        Quicksand throughout — form UI is never pixel type.
      </p>

      {/* Text input */}
      <div className="border-b-2 border-card pb-2 font-px text-[15px] text-pink">TEXT INPUT</div>
      <div className="flex flex-wrap gap-8">
        <ThemePanel theme="light">
          <Field label="Username">
            <input placeholder="ohheylynae" />
          </Field>
          <Field label="Focused" state="focus">
            <input defaultValue="typing now" />
          </Field>
          <Field label="Error" error="enter a valid handle">
            <input defaultValue="bad@" />
          </Field>
          <Field label="Disabled" state="disabled">
            <input defaultValue="locked" />
          </Field>
        </ThemePanel>
        <ThemePanel theme="dark">
          <Field label="Username">
            <input placeholder="ohheylynae" />
          </Field>
          <Field label="Focused" state="focus">
            <input defaultValue="typing now" />
          </Field>
          <Field label="Error" error="enter a valid handle">
            <input defaultValue="bad@" />
          </Field>
          <Field label="Disabled" state="disabled">
            <input defaultValue="locked" />
          </Field>
        </ThemePanel>
      </div>

      {/* Select & textarea */}
      <div className="mt-3 border-b-2 border-card pb-2 font-px text-[15px] text-pink">
        SELECT & TEXTAREA
      </div>
      <div className="flex flex-wrap gap-8">
        {(['light', 'dark'] as const).map(theme => (
          <ThemePanel key={theme} theme={theme}>
            <Field label="Category">
              <select defaultValue="Variety">
                <option>Variety</option>
                <option>Art</option>
                <option>Chill</option>
              </select>
            </Field>
            <Field label="Notes">
              <textarea placeholder="episode notes..." />
            </Field>
          </ThemePanel>
        ))}
      </div>

      {/* Checkbox / radio / switch */}
      <div className="mt-3 border-b-2 border-card pb-2 font-px text-[15px] text-pink">
        CHECKBOX · RADIO · SWITCH
      </div>
      <div className="flex flex-wrap gap-8">
        {(['light', 'dark'] as const).map(theme => (
          <ThemePanel key={theme} theme={theme}>
            <CheckboxDemo />
            <RadioDemo />
            <SwitchDemo />
          </ThemePanel>
        ))}
      </div>

      {/* Choice card */}
      <div className="mt-3 border-b-2 border-card pb-2 font-px text-[15px] text-pink">
        CHOICE CARD
      </div>
      <div className="flex flex-wrap gap-8">
        {(['light', 'dark'] as const).map(theme => (
          <ThemePanel key={theme} theme={theme}>
            <ChoiceCards compact />
          </ThemePanel>
        ))}
      </div>

      {/* Search & dropzone */}
      <div className="mt-3 border-b-2 border-card pb-2 font-px text-[15px] text-pink">
        SEARCH · DROPZONE
      </div>
      <div className="flex flex-wrap gap-8">
        {(['light', 'dark'] as const).map(theme => (
          <ThemePanel key={theme} theme={theme}>
            <div className="tk-search">
              <Search size={14} strokeWidth={2.5} className="icon" aria-hidden />
              <input placeholder="search episodes" />
            </div>
            <div className="tk-dropzone">drop thumbnail here</div>
          </ThemePanel>
        ))}
      </div>
    </div>
  ),
}

export const FieldTypes: Story = {
  name: 'Form Fields — types',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Components · Form fields
      </div>
      <h2 className="mb-1 font-px text-2xl text-mint">FORM FIELDS</h2>
      <p className="mb-8 max-w-2xl font-sans text-sm leading-relaxed text-ink-soft">
        Quicksand throughout. Focus holds mint; error is red in light / pink in dark. Borders and
        surfaces flip via paper/ink tokens.
      </p>

      <SectionLabel>Field types</SectionLabel>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-paper-2 p-5">
          <Field label="First name" required>
            <input placeholder="Lynae" />
          </Field>
        </div>
        <div className="rounded-xl border border-line bg-paper-2 p-5">
          <Field label="Email" prefix="@">
            <input placeholder="your@email.com" />
          </Field>
        </div>
        <div className="rounded-xl border border-line bg-paper-2 p-5">
          <PasswordField />
        </div>
        <div className="rounded-xl border border-line bg-paper-2 p-5">
          <Field label="Budget range" prefix="$" suffix="USD">
            <input type="number" placeholder="10,000" />
          </Field>
        </div>
        <div className="rounded-xl border border-line bg-paper-2 p-5">
          <Field label="Project type">
            <select>
              <option>Design system</option>
              <option>Frontend development</option>
              <option>UI/UX consulting</option>
            </select>
          </Field>
        </div>
        <div className="rounded-xl border border-line bg-paper-2 p-5">
          <TextareaWithCounter maxLength={240} />
        </div>
      </div>
    </div>
  ),
}

export const FieldSizes: Story = {
  name: 'Form Fields — sizes',
  render: () => (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Compact" size="sm">
          <input placeholder="size-sm" />
        </Field>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Default" size="md">
          <input placeholder="size-md" />
        </Field>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Large" size="lg">
          <input placeholder="size-lg" />
        </Field>
      </div>
    </div>
  ),
}

export const FieldStates: Story = {
  name: 'Form Fields — states',
  render: () => (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Default">
          <input placeholder="ohheylynae" />
        </Field>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Focused" state="focus">
          <input defaultValue="typing now" />
        </Field>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Error" error="enter a valid handle">
          <input defaultValue="bad@" />
        </Field>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Success" state="success" success="Verified">
          <input defaultValue="ohheylynae" />
        </Field>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Disabled" state="disabled">
          <input defaultValue="locked" />
        </Field>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Inline" layout="inline">
          <input defaultValue="4–8 weeks" />
        </Field>
      </div>
    </div>
  ),
}

export const ChoiceInputs: Story = {
  name: 'Form Fields — choice inputs',
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-line bg-paper-2 p-5">
          <SectionLabel>Checkbox</SectionLabel>
          <CheckboxDemo />
        </div>
        <div className="rounded-xl border border-line bg-paper-2 p-5">
          <SectionLabel>Radio</SectionLabel>
          <RadioDemo />
        </div>
        <div className="rounded-xl border border-line bg-paper-2 p-5">
          <SectionLabel>Switch</SectionLabel>
          <SwitchDemo />
        </div>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <SectionLabel>Choice cards</SectionLabel>
        <ChoiceCards />
      </div>
    </div>
  ),
}

export const SpecialtyFields: Story = {
  name: 'Form Fields — specialty',
  render: () => (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <SectionLabel>Search</SectionLabel>
        <div className="tk-search">
          <Search size={14} strokeWidth={2.5} className="icon" aria-hidden />
          <input placeholder="search episodes" />
        </div>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <SectionLabel>Dropzone</SectionLabel>
        <div className="tk-dropzone">drop thumbnail here</div>
      </div>
    </div>
  ),
}

export const ComposedForm: Story = {
  name: 'Form Fields — composed (Zod)',
  render: () => (
    <div className="flex max-w-md flex-col gap-6">
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Field label="Get the digest" helper="every other Sunday · no tracking" suffix="SUBSCRIBE →" suffixAction>
          <input placeholder="your@email.com" />
        </Field>
      </div>
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <ContactForm />
      </div>
    </div>
  ),
}
