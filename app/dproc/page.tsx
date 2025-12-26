import { PageShell } from '@/components/page-shell'

export default function Page() {
  return (
    <PageShell title="Դպրոց և կրթություն">
      <p>Դպրոցի պատմություն, նորություններ դպրոցից, ուսուցիչներ/աշակերտներ, ձեռքբերումներ։</p>

      <section id="patmutyun" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Դպրոցի պատմություն</h2>
        <p className="mt-2 text-slate-600">Տեքստ, լուսանկարներ, դասարաններ…</p>
      </section>

      <section id="norutyunner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Նորություններ դպրոցից</h2>
        <p className="mt-2 text-slate-600">Միջոցառումներ, օլիմպիադաներ, բաց դասեր…</p>
      </section>

      <section id="usucichner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Ուսուցիչներ և աշակերտներ</h2>
        <p className="mt-2 text-slate-600">Կարճ կենսագրություններ, լուսանկարներ…</p>
      </section>

      <section id="hajoxutyunner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Ձեռքբերումներ և հաջողություններ</h2>
        <p className="mt-2 text-slate-600">Մրցանակներ, ընդունելություններ, պատմություններ…</p>
      </section>
    </PageShell>
  )
}
