'use server'

import { Resend } from 'resend'
import { STEPS } from '@/data/questionnaire.data'

const resend = new Resend(process.env.RESEND_API_KEY)

function resolveLabel(stepKey: string, rawValue: string): string {
  const step = STEPS.find((s) => s.key === stepKey)
  const option = step?.options?.find((o) => o.key === rawValue)
  return option ? `${option.name} — ${option.sub}` : rawValue
}

export async function submitQuestionnaire(answers: Record<string, string>) {
  const rows = STEPS.map((s) => {
    const raw = answers[s.key] ?? '—'
    const value = s.type === 'choice' ? resolveLabel(s.key, raw) : raw
    return `
      <tr>
        <td style="padding:10px 16px;font-weight:600;width:160px;vertical-align:top;color:#6b7280;border-bottom:1px solid #f3f4f6;">${s.label}</td>
        <td style="padding:10px 16px;vertical-align:top;border-bottom:1px solid #f3f4f6;">${value.replace(/\n/g, '<br/>')}</td>
      </tr>`
  }).join('')

  const company = answers.company ?? 'Unknown'

  const { error } = await resend.emails.send({
    from: 'Kodara <hi@mail.kodaraadvisory.co>',
    to: 'kodaraadvisory@gmail.com',
    subject: `New inquiry — ${company}`,
    html: `
      <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:32px;color:#111;">
        <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:#9ca3af;margin-bottom:8px;">Kodara — New project inquiry</p>
        <h2 style="font-size:22px;font-weight:700;margin:0 0 24px;">${company}</h2>
        <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;">
          ${rows}
        </table>
      </div>
    `,
  })

  if (error) {
    console.error('[Resend error]', error)
    throw new Error(error.message)
  }
}
