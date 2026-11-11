import ItemImage from './ItemImage'

function Side({ item, label, zh, color }) {
  return (
    <div className="flex-1 min-w-0">
      <ItemImage
        src={item.image}
        alt={zh ? item.title_zh : item.title}
        emoji={item.emoji}
        tone={item.tone}
        className="h-28 w-full rounded-xl"
      />
      <span className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold text-white ${color}`}>{label}</span>
      <p className="mt-1 truncate text-sm font-medium text-slate-900">{zh ? item.title_zh : item.title}</p>
      <p className="truncate text-xs text-slate-500">📍 {zh ? item.place_zh : item.place}</p>
    </div>
  )
}

export default function MatchCard({ match, lang, t }) {
  const zh = lang === 'zh'
  return (
    <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-start gap-3">
        <Side item={match.lost} label={t.lostItem} zh={zh} color="bg-rose-500" />
        <div className="flex shrink-0 flex-col items-center self-center pt-2">
          <span className="text-xl text-brand-500">⇄</span>
          <span className="mt-1 rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-bold text-emerald-600">
            {match.score}%
          </span>
          <span className="mt-0.5 text-[11px] text-slate-400">{t.matchScore}</span>
        </div>
        <Side item={match.found} label={t.foundItem} zh={zh} color="bg-brand-500" />
      </div>
    </article>
  )
}
