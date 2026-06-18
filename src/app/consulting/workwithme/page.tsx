import { Dot, FileQuestionMark, Mail, MoveDown, MoveRight, MoveUpRight, Plus, Pyramid, Square, Target } from 'lucide-react'
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
            href: 'https://cal.com/kodaraadvisory/discovery',
            icon: <Mail className='w-2.5 h-2.5 text-accent' />,
            subtext: 'kodaraadvisory@gmail.com',
            directionIcon: <MoveUpRight className='w-2.5 h-2.5 text-ink-soft' />
        },
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/bryannagardner',
            subtext: '/in/bryannagardner',
            directionIcon: <MoveUpRight className='w-2.5 h-2.5 text-ink-soft'
              />
        },
        {
            label: 'Save my contact',
            href: 'https://cal.com/kodaraadvisory/discovery',
            icon: <Target className='w-2.5 h-2.5 text-accent' />,
            subtext: 'Download vCard',
            directionIcon: <MoveDown className='w-2.5 h-2.5 text-ink-soft'
            />
        },
        {
            label: 'Instagram',
            href: 'https://cal.com/kodaraadvisory/discovery',
            icon: <Pyramid className='w-2.5 h-2.5 text-accent' />,
            subtext: '@oh.hey.lynae',
            directionIcon: <MoveUpRight className='w-2.5 h-2.5 text-ink-soft'/>
        },
        {
            label: 'Main Website',
            href: 'https://cal.com/kodaraadvisory/discovery',
            icon: <Square className='w-2.5 h-2.5 text-accent' />,
            subtext: 'kodara.co',
            directionIcon: <MoveUpRight className='w-2.5 h-2.5 text-ink-soft'/>
        }
    ]

    const whatIDo = [
        {
            label: 'Design systems',
        },
        {
            label: 'Frontend Dev',
        }, {
            label: 'UI / UX',
        }, {
            label: 'Brand & Visual',
        }
    ]   

    const trustedBy = [
        {
            label: 'StockX',
        },
        {
            label: 'Red Bull',
        },
        {
            label: 'Benzinga',
        },
        {
            label: 'U-M Athletics',
        },
        {
            label: 'Fanatics',
        },
        {
            label: 'Qualigence',
        },
    
    ]
  return (
    <div className='min-h-screen py-10 px-6 grid-bg-transparent text-center flex flex-col gap-4'>
        <div>
            <Image src="/images/branding/svg/kodara-mark.svg" alt="Kodara Logo" width={45} height={45} className="mx-auto" />
        </div>
        <ProfileBadge />
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-bold'>Bryanna Gardner</h2>
            <div className='flex items-center justify-center gap-1 uppercase font-mono text-xs tracking-wider text-accent mt-2'>
                <span>Kodara</span>
                <Dot className='w-3 h-3 text-ink-soft'/> 
                <span>Design</span>
                <Plus className='w-3 h-3 text-ink-soft'/>
                <span>Consulting</span>
                <Plus className='w-3 h-3 text-ink-soft'/>
                <span>Engineering</span>
            </div>
            <p className="text-[14px] w-[400px] mx-auto">I help teams ship <span className='font-medium text-accent'>design systems, frontends, and brand</span> — with the strategic thinking baked in, accelerated by AI.<br/> 12 years, both sides of the table</p>
        </div>
        <div className='flex flex-col gap-3'>  
            <div className='bg-accent text-black font-mono text-sm uppercase tracking-wider px-6 hover:bg-neutral-800 transition-colors shrink-0 text-left py-5 font-medium flex items-center justify-between'>Book a 30-min call <MoveRight className='w-3 h-3' /></div>
           <div className='flex flex-col gap-2'>
           {links.map((link) => (
                <div key={link.label} className='bg-white border border-line  px-4 hover:bg-kodara-accent-soft transition-colors shrink-0 text-left py-4 font-medium'>

               <div className='grid grid-cols-8 items-center'>
               <div className='col-span-1 flex items-center justify-center border border-line h-8 w-8'>
                   {link.icon ? link.icon : <FileQuestionMark className='w-2.5 h-2.5 text-accent' />}
               </div>
               <div className='col-span-6'><p className='text-black text-base font-semibold leading-6'>{link.label}</p>
               <p className='text-xs text-ink-soft font-mono '>{link.subtext}</p> 
               </div>
               <div className='col-span-1 flex items-center justify-end'>
               {link.directionIcon ? link.directionIcon : <MoveUpRight className='w-2.5 h-2.5' />}
               </div>
               </div>
               
           </div>
            ))}
           </div>
            </div>

            {/* What I Do*/}
            <div className="py-6">
                <div className="flex items-center justify-center gap-2 font-mono text-xs tracking-wider text-accent uppercase mb-6"> <hr className='border-line w-40'/> What I Do <hr className='border-line w-40'/> </div>

        
                   <div className='flex flex-row mx-auto justify-center gap-2'>
                   {whatIDo.map((item) => (
                        <div key={item.label} className="border border-line p-3 text-sm w-fit px-3 py-1.5">
                            {item.label}
                        </div>
                    ))}
                   </div>
                </div>

            {/* Trusted By */}
            <div className='w-full border border-line bg-kodara-accent-soft px-5 py-6'>
                <p className="mb-4 text-center font-mono text-xs uppercase tracking-wider text-ink-soft">
                    Trusted by teams at
                </p>

                <div className="mx-auto flex max-w-[520px] flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center font-mono text-sm leading-7 text-accent">
                    {trustedBy.map((item, index) => (
                        <React.Fragment key={item.label}>
                            <span>{item.label}</span>
                            {index < trustedBy.length - 1 && (
                                <Dot className='h-3 w-3 text-ink-soft' aria-hidden="true" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {/* Mobile Menu  */}
            <a href="" target="_blank" className='mt-4 flex flex-row gap-2 font-mono underline text-ink-mute items-center text-center mx-auto text-xs underline-offset-8'>
                <Square className='w-2.5 h-2.5 text-accent bg-accent' />
                also:
oh-hey-lynae - my personal blog        </a>

<p className="uppercase text-xs mt-4 text-ink-mute text-center">&copy; 2026 Oh Hey Lynae</p>
            </div>

  
            
  )
}

export default WorkWithMe