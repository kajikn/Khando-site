'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { nav, site } from '@/data/site'

export function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null)

  // click-outside → փակել բոլորը
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const header = headerRef.current
      if (!header) return
      if (header.contains(e.target as Node)) return

      header.querySelectorAll('details[open]').forEach(d => {
        ;(d as HTMLDetailsElement).open = false
      })
    }

    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-xl font-semibold">{site.name}</span>
          <span className="hidden text-sm text-slate-600 md:inline">
            {site.tagline}
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden gap-6 md:flex">
          {nav.map((item) =>
            item.children ? (
              <details
                key={item.label}
                className="group relative"
                onToggle={(e) => {
                  const el = e.currentTarget
                  if (el.open) {
                    document
                      .querySelectorAll('header details.group')
                      .forEach(d => {
                        if (d !== el)
                          (d as HTMLDetailsElement).open = false
                      })
                  }
                }}
              >
                <summary className="cursor-pointer list-none font-medium">
                  {item.label}
                </summary>

                <div className="absolute left-0 mt-2 w-56 rounded-xl border bg-white p-2 shadow">
                  {item.children.map(child => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 hover:bg-slate-50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="font-medium hover:text-slate-900"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu */}
        <details className="md:hidden">
          <summary className="cursor-pointer rounded-lg border px-3 py-1.5">
            Մենյու
          </summary>
          <div className="mt-2 rounded-xl border bg-white p-2 shadow">
            {nav.map(item =>
              item.children ? (
                <details
                  key={item.label}
                  className="mb-1"
                  onToggle={(e) => {
                    const el = e.currentTarget
                    if (el.open) {
                      document
                        .querySelectorAll('.md\\:hidden details[open]')
                        .forEach(d => {
                          if (d !== el)
                            (d as HTMLDetailsElement).open = false
                        })
                    }
                  }}
                >
                  <summary className="cursor-pointer rounded px-3 py-2 hover:bg-slate-50">
                    {item.label}
                  </summary>
                  <div className="pl-3">
                    {item.children.map(child => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded px-3 py-2 hover:bg-slate-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block rounded px-3 py-2 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </details>
      </div>
    </header>
  )
}
