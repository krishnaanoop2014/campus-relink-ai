import { useState } from 'react'
import Navbar from './components/Navbar'
import HomeDashboard from './pages/HomeDashboard'
import { translations } from './data/translations'

export default function App() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  return (
    <div className="min-h-screen">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <HomeDashboard t={t} lang={lang} />
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-400">
        {t.appName} · {t.appNameZh} · {t.footer}
      </footer>
    </div>
  )
}
