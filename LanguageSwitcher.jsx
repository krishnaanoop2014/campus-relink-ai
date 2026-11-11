// Placeholder language switcher (English / Traditional Chinese).
export default function LanguageSwitcher({ lang, setLang, label }) {
  const options = [
    { code: 'en', text: 'EN' },
    { code: 'zh', text: '繁中' },
  ]

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex rounded-full bg-white/10 p-0.5 ring-1 ring-white/20"
    >
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`rounded-full px-3 py-1 text-sm font-medium transition ${
            lang === o.code ? 'bg-white text-brand-700' : 'text-white/80 hover:text-white'
          }`}
        >
          {o.text}
        </button>
      ))}
    </div>
  )
}
