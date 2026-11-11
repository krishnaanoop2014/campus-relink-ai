import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar({ t, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const links = [
    { key: 'home', label: t.nav.home },
    { key: 'lost', label: t.nav.lost },
    { key: 'found', label: t.nav.found },
    { key: 'matches', label: t.nav.matches },
    { key: 'map', label: t.nav.map },
  ]

  return (
    <header className="sticky top-0 z-30 bg-brand-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl">🔗</span>
          <span className="leading-tight">
            <span className="block text-base font-bold sm:text-lg">{t.appName}</span>
            <span className="block text-xs text-white/70">{t.appNameZh}</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((l) => (
            <button
              key={l.key}
              type="button"
              onClick={() => setActive(l.key)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                active === l.key ? 'bg-white/15 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} setLang={setLang} label={t.langSwitch} />
          <button
            type="button"
            className="rounded-lg p-2 hover:bg-white/10 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 px-4 pb-3 lg:hidden" aria-label="Mobile">
          {links.map((l) => (
            <button
              key={l.key}
              type="button"
              onClick={() => { setActive(l.key); setOpen(false) }}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                active === l.key ? 'bg-white/15' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
