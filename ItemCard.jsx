import ItemImage from './ItemImage'

export default function ItemCard({ item, lang, t }) {
  const zh = lang === 'zh'
  const isLost = item.type === 'lost'

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative">
        <ItemImage
          src={item.image}
          alt={zh ? item.title_zh : item.title}
          emoji={item.emoji}
          tone={item.tone}
          className="h-40 w-full"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${
            isLost ? 'bg-rose-500' : 'bg-brand-500'
          }`}
        >
          {isLost ? t.lostItem : t.foundItem}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{zh ? item.title_zh : item.title}</h3>
        <p className="mt-1 text-sm text-slate-500">📍 {zh ? item.place_zh : item.place}</p>
        <p className="mt-0.5 text-xs text-slate-400">🕒 {zh ? item.time_zh : item.time}</p>
      </div>
    </article>
  )
}
