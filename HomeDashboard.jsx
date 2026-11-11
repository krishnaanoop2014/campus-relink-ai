import StatCard from '../components/StatCard'
import ItemCard from '../components/ItemCard'
import MatchCard from '../components/MatchCard'
import { recentItems, suggestedMatches, stats } from '../data/sampleItems'

function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      {action && (
        <button type="button" className="shrink-0 text-sm font-medium text-brand-600 hover:underline">
          {action} →
        </button>
      )}
    </div>
  )
}

export default function HomeDashboard({ t, lang }) {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-8">
      {/* Welcome / hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-6 text-white shadow-lg sm:p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-16 right-24 h-40 w-40 rounded-full bg-white/5" />
        <p className="text-sm font-medium text-white/80">{t.university}</p>
        <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{t.welcome} 👋</h1>
        <p className="mt-3 max-w-xl text-white/85">{t.welcomeSub}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-brand-700 shadow transition hover:bg-brand-50"
          >
            🔍 {t.reportLost}
          </button>
          <button
            type="button"
            className="rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow transition hover:bg-amber-600"
          >
            📦 {t.reportFound}
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard kind="lost" label={t.stats.lost} value={stats.lost} note={t.stats.lostNote} />
        <StatCard kind="found" label={t.stats.found} value={stats.found} note={t.stats.foundNote} />
        <StatCard kind="returned" label={t.stats.returned} value={stats.returned} note={t.stats.returnedNote} />
      </section>

      {/* Recently reported */}
      <section>
        <SectionHeader title={t.recent} subtitle={t.recentSub} action={t.viewAll} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentItems.map((item) => (
            <ItemCard key={item.id} item={item} lang={lang} t={t} />
          ))}
        </div>
      </section>

      {/* AI suggested matches */}
      <section>
        <SectionHeader title={`✨ ${t.matches}`} subtitle={t.matchesSub} action={t.viewAll} />
        <div className="grid gap-4 lg:grid-cols-3">
          {suggestedMatches.map((m) => (
            <MatchCard key={m.id} match={m} lang={lang} t={t} />
          ))}
        </div>
      </section>

      <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800 ring-1 ring-amber-200">
        ℹ️ {t.placeholderNote}
      </p>
    </main>
  )
}
