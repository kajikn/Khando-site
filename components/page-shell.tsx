import type { ReactNode } from 'react'

export function PageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <div className="mt-6 space-y-5 text-slate-800">{children}</div>
    </div>
  )
}
