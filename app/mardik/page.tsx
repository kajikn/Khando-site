import { PageShell } from '@/components/page-shell'

export default function Page() {
  return (
    <PageShell title="Մարդիկ">
      <p>Մեր գյուղի մարդիկ, հիշատակի էջ, վաստակավոր գյուղացիներ, երիտասարդներ և երեխաներ։</p>

      <section id="mer-mardik" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Մեր գյուղի մարդիկ</h2>
        <p className="mt-2 text-slate-600">Կենսագրություններ, հարցազրույցներ…</p>
      </section>

      <section id="hishataki" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Հիշատակի էջ</h2>
        <p className="mt-2 text-slate-600">Հիշատակի պատմություններ՝ հարգանքով։</p>
      </section>

      <section id="vastakavor" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Վաստակավոր գյուղացիներ</h2>
        <p className="mt-2 text-slate-600">Արժանավորներ, վաստակ, պարգևներ…</p>
      </section>

      <section id="eritasard" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Երիտասարդներ և երեխաներ</h2>
        <p className="mt-2 text-slate-600">Նրանց ձեռքբերումները, սպորտ, մշակույթ…</p>
      </section>
    </PageShell>
  )
}
