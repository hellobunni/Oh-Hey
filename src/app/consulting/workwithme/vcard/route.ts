import { NextResponse } from 'next/server'

export function GET() {
  const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:Bryanna Gardner\r\nORG:Kodara\r\nTITLE:Design + Engineering\r\nEMAIL;TYPE=WORK:kodaraadvisory@gmail.com\r\nURL:https://kodara.co\r\nURL;TYPE=LinkedIn:https://linkedin.com/in/bryannagardner\r\nEND:VCARD`

  return new NextResponse(vcard, {
    headers: {
      'Content-Type': 'text/vcard',
      'Content-Disposition': 'attachment; filename="bryanna-gardner.vcf"',
    },
  })
}
