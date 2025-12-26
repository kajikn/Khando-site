import { PageShell } from '@/components/page-shell'

export default function Page() {
  return (
    <PageShell title="Գյուղատնտեսություն">
      <p>Հողագործություն, անասնապահություն, գյուղատնտեսական խնդիրներ, փորձի փոխանակում։</p>

      <section id="hogagorc" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Հողագործություն</h2>
        <p className="mt-2 text-slate-600">Ցանք, բերք, ոռոգում, տեխնիկա…</p>
      </section>

      <section id="anansn" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Անասնապահություն</h2>
        <p className="mt-2 text-slate-600">Կեր, առողջություն, արտադրանք…</p>
      </section>

      <section id="xndirner" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Գյուղատնտեսական խնդիրներ</h2>
        <p className="mt-2 text-slate-600">Ջուր, ճանապարհ, շուկա, աջակցություն…</p>
      </section>

      <section id="porc" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Փորձի փոխանակում</h2>
        <p className="mt-2 text-slate-600">Խորհուրդներ, նյութեր, հարց ու պատասխան…</p>
      </section>
    </PageShell>
  )
}
