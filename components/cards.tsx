import Link from 'next/link'
import type { Card } from '@/data/content'

export function CardGrid({ items }: { items: Card[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
            {item.date ? (
              <span className="shrink-0 rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-600">
                {item.date}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
          <div className="mt-3 text-sm font-medium text-slate-900">Կարդալ ավելին →</div>
        </Link>
      ))}
    </div>
  )
}
