import Link from 'next/link'
import { PageShell } from '@/components/page-shell'

export default function Page() {
  return (
    <PageShell title="Մեր գյուղը">
      <p>
        Այստեղ կտեղադրեք գյուղի պատմությունը, անվան ծագումը, տոհմերի/ընտանիքների
        ցանկը, «Հին ու նոր Խանդո»-ի նյութերը, ավանդույթներ և կենցաղ։
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <Link className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50" href="#patmutyun">
          Գյուղի պատմությունը
        </Link>
        <Link className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50" href="#anvann">
          Գյուղի անվան ծագումը
        </Link>
        <Link className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50" href="#tohmer">
          Տոհմեր և ընտանիքներ
        </Link>
        <Link className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50" href="#hin-nor">
          Հին ու նոր Խանդո
        </Link>
        <Link className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50" href="#avand">
          Ավանդույթներ և կենցաղ
        </Link>
      </div>

      <section id="patmutyun" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Գյուղի պատմությունը</h2>
        <p className="mt-2 text-slate-600">Տեքստ/նկարներ ավելացնելու համար խմբագրեք այս էջը։</p>
      </section>

      <section id="anvann" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Գյուղի անվան ծագումը</h2>
        <p className="mt-2 text-slate-600">Տեքստ/հղումներ…</p>
      </section>

      <section id="tohmer" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Տոհմեր և ընտանիքներ</h2>
        <p className="mt-2 text-slate-600">Ընտանիքների քարտեր, լուսանկարներ, պատմություններ…</p>
      </section>

      <section id="hin-nor" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Հին ու նոր Խանդո</h2>
        <p className="mt-2 text-slate-600">Հին նկարների արխիվ / նոր տեսք…</p>
      </section>

      <section id="avand" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Ավանդույթներ և կենցաղ</h2>
        <p className="mt-2 text-slate-600">Տոնական սովորույթներ, պատմություններ…</p>
      </section>
    </PageShell>
  )
}
