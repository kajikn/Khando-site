import { PageShell } from '@/components/page-shell'

export default function Page() {
  return (
    <PageShell title="Մերոնք դրսում">
      <p>Խանդոցիներն աշխարհում, դրսի նորություններ, աջակցություն գյուղին, բարերարներ։</p>

      <section id="ashxarhum" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Խանդոցիներն աշխարհում</h2>
        <p className="mt-2 text-slate-600">Քարտեզ/քաղաքներ/ընտանիքներ…</p>
      </section>

      <section id="norutyunner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">դրսի նորություններ</h2>
        <p className="mt-2 text-slate-600">Հանդիպումներ, նախաձեռնություններ…</p>
      </section>

      <section id="ajakcutyun" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Աջակցություն գյուղին</h2>
        <p className="mt-2 text-slate-600">Ինչպես օգնել, ինչ է պետք, հաշվետվություններ…</p>
      </section>

      <section id="barerarner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Բարերարներ</h2>
        <p className="mt-2 text-slate-600">Շնորհակալական էջ՝ անուններով և պատմություններով։</p>
      </section>
    </PageShell>
  )
}
