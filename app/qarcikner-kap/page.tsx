import { PageShell } from '@/components/page-shell'

export default function Page() {
  return (
    <PageShell title="Կարծիքներ և առաջարկներ • Կապ">
      <p>Առաջարկ գյուղի համար, քննարկումներ, հարցումներ, հետադարձ կապ, ինչպես մասնակցել կայքի աշխատանքներին։</p>

      <section id="participate" className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Մասնակցել / Ուղարկել նյութ</h2>
        <p className="mt-2 text-slate-600">Ուղարկեք լուսանկար, հիշողություն կամ գաղափար (սկզբում՝ պարզ ձևով)։</p>

        <form className="mt-4 grid gap-3" action="/api/participate" method="post">
          <input
            name="name"
            placeholder="Ձեր անունը"
            className="w-full rounded-xl border border-slate-200 px-4 py-2"
          />
          <input
            name="email"
            placeholder="Էլ․ հասցե (ըստ ցանկության)"
            className="w-full rounded-xl border border-slate-200 px-4 py-2"
          />
          <select name="type" className="w-full rounded-xl border border-slate-200 px-4 py-2">
            <option value="photo">Լուսանկար</option>
            <option value="memory">Հիշողություն</option>
            <option value="idea">Գաղափար</option>
          </select>
          <textarea
            name="message"
            placeholder="Գրեք տեքստը"
            rows={5}
            className="w-full rounded-xl border border-slate-200 px-4 py-2"
          />
          <button className="w-fit rounded-xl bg-slate-950 px-5 py-2 text-sm font-semibold text-white">
            Ուղարկել
          </button>
          <p className="text-sm text-slate-600">
            Նշում․ ֆայլերի (նկարների) վերբեռնումը կավելացնենք հաջորդ քայլով (S3/Supabase)։
          </p>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">Կապ</h2>
        <form className="mt-4 grid gap-3" action="/api/contact" method="post">
          <input name="subject" placeholder="Թեմա" className="w-full rounded-xl border border-slate-200 px-4 py-2" />
          <textarea name="message" placeholder="Ձեր հաղորդագրությունը" rows={5} className="w-full rounded-xl border border-slate-200 px-4 py-2" />
          <button className="w-fit rounded-xl border border-slate-300 bg-white px-5 py-2 text-sm font-semibold hover:bg-slate-50">
            Ուղարկել
          </button>
        </form>
      </section>
    </PageShell>
  )
}
