import { PageShell } from '@/components/page-shell'

export default function Page() {
  return (
    <PageShell title="Մշակույթ,սպորտ և հոգևոր կյանք">
      <p>Եկեղեցի, տոնակատարություններ, մշակութային միջոցառումներ, հուշարձաններ։</p>

      <section id="ekegheci" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Եկեղեցի</h2>
        <p className="mt-2 text-slate-600">Պատմություն, ժամեր, քահանայի կոնտակտ…</p>
      </section>

      <section id="ton" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Տոնակատարություններ</h2>
        <p className="mt-2 text-slate-600">Տոներ, գյուղի օր, եկեղեցական օրացույց…</p>
      </section>

      <section id="mijocarumner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Մշակութային միջոցառումներ</h2>
        <p className="mt-2 text-slate-600">Երգ, պար, ցուցահանդես, համերգ…</p>
      </section>

      <section id="hushardzan" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Հուշարձաններ</h2>
        <p className="mt-2 text-slate-600">Քարտեզ, պատմություն, լուսանկարներ…</p>
      </section>
    </PageShell>
  )
}
