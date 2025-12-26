import { PageShell } from '@/components/page-shell'

export default function Page() {
  return (
    <PageShell title="Համայնք">
      <p>Համայնքի ղեկավարություն, նախաձեռնող խումբ, որոշումներ, ծրագրեր և նախաձեռնություններ։</p>

      <section id="leader" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Համայնքի ղեկավարություն</h2>
        <p className="mt-2 text-slate-600">Անուններ, պաշտոններ, կոնտակտներ…</p>
      </section>

      <section id="group" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Նախաձեռնող խումբ</h2>
        <p className="mt-2 text-slate-600">Կամավորներ, աշխատանքային ուղղություններ…</p>
      </section>

      <section id="decisions" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Համայնքային որոշումներ</h2>
        <p className="mt-2 text-slate-600">Օրակարգեր, արձանագրություններ, փաստաթղթեր…</p>
      </section>

      <section id="projects" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Ծրագրեր և նախաձեռնություններ</h2>
        <p className="mt-2 text-slate-600">Նոր գաղափարներ, ֆինանսավորում, հաշվետվություններ…</p>
      </section>
    </PageShell>
  )
}
