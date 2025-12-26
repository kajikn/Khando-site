import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/data/site'
import { CardGrid } from '@/components/cards'
import { latestNews, upcomingEvents, quickBlocks } from '@/data/content'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="relative">
          <div className="h-[46vh] min-h-[340px] w-full">
            <Image
              src="/hero.jpg"
              alt="Khando village"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
          <div className="absolute inset-0">
            <div className="container flex h-full flex-col justify-end pb-10">
              <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {site.heroTitle}
              </h1>
              <p className="mt-2 max-w-2xl text-white/90">{site.heroAltTitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick blocks */}
      <section className="container py-10">
        <h2 className="text-xl font-semibold">Արագ տեղեկություն</h2>
        <p className="mt-2 text-sm text-slate-600">
          3–4 կարճ բլոկ՝ 2–3 տողով, «Կարդալ ավելին» կոճակով։
        </p>
        <div className="mt-6">
          <CardGrid items={quickBlocks} />
        </div>
      </section>

      {/* Latest */}
      <section className="container pb-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">Վերջին նորություններ</h2>
            <div className="mt-4 grid gap-3">
              {latestNews.map((n) => (
                <Link key={n.title} href={n.href} className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold">{n.title}</div>
                    {n.date ? <div className="text-xs text-slate-600">{n.date}</div> : null}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{n.excerpt}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">Մոտակա միջոցառումներ</h2>
            <div className="mt-4 grid gap-3">
              {upcomingEvents.map((e) => (
                <Link key={e.title} href={e.href} className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold">{e.title}</div>
                    {e.date ? <div className="text-xs text-slate-600">{e.date}</div> : null}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{e.excerpt}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About village */}
      <section className="bg-slate-50">
        <div className="container py-12">
          <h2 className="text-xl font-semibold">Մեր գյուղը</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Մեր գյուղը ունի հարուստ պատմություն, տոհմեր ու ավանդույթներ, որոնք այսօր էլ ապրում են մեր առօրյայում…
          </p>
          <Link
            href="/mer-gjugh"
            className="mt-5 inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-100"
          >
            Կարդալ գյուղի պատմությունը
          </Link>
        </div>
      </section>

      {/* Photo strip */}
      <section className="container py-12">
        <h2 className="text-xl font-semibold">Լուսանկարներ</h2>
        <p className="mt-2 text-sm text-slate-600">
          Նկարները ավելի շատ են խոսում, քան տեքստը։
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="relative h-40 overflow-hidden rounded-2xl border border-slate-200">
              <Image src={`/gallery/${n}.jpg`} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/media" className="text-sm font-semibold hover:underline">
            Տեսնել ամբողջ արխիվը →
          </Link>
        </div>
      </section>

      {/* Diaspora + participation */}
      <section className="bg-slate-950">
        <div className="container py-14 text-white">
          <h2 className="text-2xl font-semibold">Սա նաև քո կայքն է</h2>
          <p className="mt-3 max-w-3xl text-white/85">
            Եթե դու Խանդոյից ես, անկախ նրանից՝ որտեղ ես ապրում, սա նաև քո կայքն է։
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/qarcikner-kap#participate"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950"
            >
              Ուղարկել լուսանկար
            </Link>
            <Link
              href="/qarcikner-kap#participate"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold"
            >
              Կիսվել հիշողությամբ
            </Link>
            <Link
              href="/qarcikner-kap#participate"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold"
            >
              Առաջարկել գաղափար
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
