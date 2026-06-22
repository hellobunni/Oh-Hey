import { Dot, Linkedin, Mail, MoveDown, MoveRight, MoveUpRight, Pyramid, Square, Target } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

function ProfileBadge() {
  return (
    <div className="relative mx-auto flex h-22 w-22 items-center justify-center border border-line-strong bg-kodara-accent-soft">
      <span className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-accent" aria-hidden="true" />
      <span className="font-sans text-xl font-black leading-none tracking-tight text-accent">
        BG
      </span>
    </div>
  )
}

const WorkWithMe = () => {

    const links = [
        {
            label: 'Email',
            href: 'mailto:kodaraadvisory@gmail.com',
            icon: <Mail className='w-2.5 h-2.5 text-accent' />,
            subtext: 'kodaraadvisory@gmail.com',
            directionIcon: <MoveUpRight className='w-2.5 h-2.5 text-ink-soft' />
        },
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/bryannagardner',
            icon: <Linkedin className='w-2.5 h-2.5 text-accent' />,
            subtext: '/in/bryannagardner',
            directionIcon: <MoveUpRight className='w-2.5 h-2.5 text-ink-soft' />
        },
        {
            label: 'Save my contact',
            href: '/consulting/workwithme/vcard',
            icon: <Target className='w-2.5 h-2.5 text-accent' />,
            subtext: 'Download vCard',
            directionIcon: <MoveDown className='w-2.5 h-2.5 text-ink-soft' />
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/ohheylynae/',
            icon: <Pyramid className='w-2.5 h-2.5 text-accent' />,
            subtext: '@oh.hey.lynae',
            directionIcon: <MoveUpRight className='w-2.5 h-2.5 text-ink-soft' />
        },
        {
            label: 'Full Kodara site',
            href: '/consulting',
            icon: <Square className='w-2.5 h-2.5 text-accent' />,
            subtext: 'kodara.co',
            directionIcon: <MoveUpRight className='w-2.5 h-2.5 text-ink-soft' />
        }
    ]

    const whatIDo = ['Design Systems', 'Frontend Dev', 'UI/UX', 'Brand']

    const trustedBy = ['StockX', 'Benzinga', 'U-M Athletics', 'Qualigence', "Zingerman's", 'Red Bull']

  return (
    <div className='min-h-screen py-10 px-6 grid-bg-transparent text-center flex flex-col items-center'>
      <div className='w-full max-w-[380px] flex flex-col gap-4'>

        <div>
          <Image src="/images/branding/svg/kodara-mark.svg" alt="Kodara Logo" width={45} height={45} className="mx-auto" />
        </div>

        <ProfileBadge />

        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>Bryanna Gardner</h2>
          <div className='flex items-center justify-center gap-1.5 uppercase font-mono text-xs tracking-wider text-accent mt-1'>
            <span>Kodara</span>
            <Dot className='w-3 h-3 text-ink-soft' />
            <span>Design + Engineering</span>
          </div>
          <p className="text-[14px] mt-1">
            I help teams ship <span className='font-medium text-accent'>design systems, frontends, and brand</span> — with the strategic thinking baked in, accelerated by AI. 12 years, both sides of the table.
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <a
            href='https://cal.com/kodaraadvisory/discovery'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-accent text-white font-mono text-sm uppercase tracking-wider px-6 hover:bg-blue-700 transition-colors shrink-0 text-left py-5 font-medium flex items-center justify-between'
          >
            Book a 30-min call <MoveRight className='w-3 h-3' />
          </a>

          <div className='flex flex-col gap-2'>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className='bg-white border border-line px-4 hover:bg-kodara-accent-soft transition-colors shrink-0 text-left py-4'
              >
                <div className='grid grid-cols-8 items-center'>
                  <div className='col-span-1 flex items-center justify-center border border-line h-8 w-8'>
                    {link.icon}
                  </div>
                  <div className='col-span-6 pl-3'>
                    <p className='text-black text-sm font-semibold leading-5'>{link.label}</p>
                    <p className='text-xs text-ink-soft font-mono'>{link.subtext}</p>
                  </div>
                  <div className='col-span-1 flex items-center justify-end'>
                    {link.directionIcon}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* What I Do */}
        <div className="pt-4 pb-2">
          <div className="flex items-center justify-center gap-2 font-mono text-xs tracking-wider text-ink-soft uppercase mb-5">
            <hr className='border-line flex-1' /> What I Do <hr className='border-line flex-1' />
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-2'>
            {whatIDo.map((item) => (
              <div key={item} className="border border-line text-sm px-3 py-1.5">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By */}
        <div className='w-full border border-line bg-kodara-accent-soft px-5 py-6'>
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-soft">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-sm leading-7 text-accent">
            {trustedBy.map((name, index) => (
              <React.Fragment key={name}>
                <span>{name}</span>
                {index < trustedBy.length - 1 && (
                  <Dot className='h-3 w-3 text-ink-soft' aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center gap-3 mt-2 mb-6'>
          <a href="/" className='flex flex-row gap-2 font-mono text-ink-mute items-center text-xs underline underline-offset-4'>
            <Square className='w-2 h-2 text-accent fill-accent' aria-hidden="true" />
            also: oh-hey-lynae — my personal blog
          </a>
          <p className="uppercase text-xs text-ink-mute">&copy; 2026 Bryanna Gardner</p>
        </div>

      </div>
    </div>
  )
}

export default WorkWithMe