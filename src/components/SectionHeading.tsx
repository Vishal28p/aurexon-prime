import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
  action?: ReactNode
}

export function SectionHeading({ eyebrow, title, description, centered = false, action }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : ''}`}>
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald/20 bg-emerald/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald">
        {eyebrow}
      </div>
      <div className={`flex w-full flex-col gap-4 ${centered ? 'items-center' : ''}`}>
        <h2 className="max-w-3xl font-display text-4xl leading-tight text-navy md:text-5xl">{title}</h2>
        <p className={`max-w-3xl text-base leading-8 text-slate-600 md:text-lg ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      </div>
      {action ? <div className={centered ? 'mx-auto' : ''}>{action}</div> : null}
    </div>
  )
}