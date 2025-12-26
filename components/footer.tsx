import Link from 'next/link'
import { site } from '@/data/site'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="container grid gap-6 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">{site.name}</div>
          <p className="mt-2 text-sm text-slate-600">
            Կարճ խոսք գյուղի մասին՝ ավելացրեք այստեղ 2–3 տող։
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-800">Կապ</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Հեռ․ +374 …</li>
            <li>Էլ․ info@khando.am</li>
            <li>Հասցե՝ …</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-800">Սոցիալական էջեր</div>
          <div className="mt-3 flex gap-4 text-sm">
            <Link href="#" className="text-slate-600 hover:text-slate-950">
              Facebook
            </Link>
            <Link href="#" className="text-slate-600 hover:text-slate-950">
              YouTube
            </Link>
            <Link href="#" className="text-slate-600 hover:text-slate-950">
              Telegram
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} {site.name}. Բոլոր իրավունքները պաշտպանված են։
          </p>
        </div>
      </div>
    </footer>
  )
}
