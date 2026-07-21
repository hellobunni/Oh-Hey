'use server'

import { Resend } from 'resend'

export async function subscribeToNewsletter(email: string) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'Oh Hey <hi@oheythere.com>',
    to: process.env.NEWSLETTER_TO_EMAIL ?? 'hi@oheythere.com',
    subject: `New newsletter subscriber — ${email}`,
    html: `
      <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:32px;color:#111;">
        <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:#9ca3af;margin-bottom:8px;">Oh Hey — Newsletter</p>
        <h2 style="font-size:22px;font-weight:700;margin:0 0 24px;">New subscriber</h2>
        <p style="margin:0;padding:16px;border:1px solid #e5e7eb;">${email}</p>
      </div>
    `,
  })

  if (error) {
    console.error('[Resend error]', error)
    throw new Error(error.message)
  }
}
