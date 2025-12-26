import { PageShell } from '@/components/page-shell'

export default function Page() {
  return (
    <PageShell title="Գյուղի կյանքը">
      <p>Նորություններ, համայնքային աշխատանքներ, շինարարություն/վերանորոգումներ, տոնական ու հիշատակի օրեր։</p>

      <section id="norutyunner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Նորություններ</h2>
        <p className="mt-2 text-slate-600">Ավելացրեք հոդվածներ՝ ըստ ամսաթվի։</p>
      </section>

      <section id="ashxatanqner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Համայնքային աշխատանքներ</h2>
        <p className="mt-2 text-slate-600">Մաքրման օրեր, ճանապարհ, ջուր, լուսավորություն…</p>
      </section>

      <section id="shinararutyun" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Շինարարություն, վերանորոգումներ</h2>
        <p className="mt-2 text-slate-600">Նախագծեր, ընթացք, լուսանկարներ՝ «մինչև/հետո»։</p>
      </section>

      <section id="mijocarumner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Մոտակա միջոցառումներ</h2>
        <p className="mt-2 text-slate-600">Օրացույց, հայտարարություններ, գրանցում…</p>
      </section>

      <section id="ton" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Տոնական ու հիշատակի օրեր</h2>
        <p className="mt-2 text-slate-600">Տոներ, հիշատակի օրեր, ավանդույթներ…</p>
      </section>
    </PageShell>
  )
}
