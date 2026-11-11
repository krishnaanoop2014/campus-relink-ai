const styles = {
  lost: { bar: 'bg-rose-500', badge: 'bg-rose-50 text-rose-600', icon: '🔍' },
  found: { bar: 'bg-brand-500', badge: 'bg-brand-50 text-brand-600', icon: '📦' },
  returned: { bar: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-600', icon: '✅' },
}

export default function StatCard({ kind, label, value, note }) {
  const s = styles[kind]
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <span className={`absolute inset-y-0 left-0 w-1.5 ${s.bar}`} />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-1 text-4xl font-bold text-slate-900">{value}</p>
          <p className="mt-1 text-xs text-slate-400">{note}</p>
        </div>
        <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${s.badge}`}>{s.icon}</span>
      </div>
    </div>
  )
}
