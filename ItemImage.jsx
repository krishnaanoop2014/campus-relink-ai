import { useState } from 'react'

// Full class names are listed so Tailwind can detect them.
const tones = {
  sky: 'from-sky-100 to-sky-200',
  amber: 'from-amber-100 to-amber-200',
  orange: 'from-orange-100 to-orange-200',
  emerald: 'from-emerald-100 to-emerald-200',
  slate: 'from-slate-200 to-slate-300',
  violet: 'from-violet-100 to-violet-200',
}

// Shows the photo; falls back to a coloured placeholder with an emoji if it fails to load.
export default function ItemImage({ src, alt, emoji = '📦', tone = 'sky', className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br ${tones[tone] ?? tones.sky} ${className}`}
      >
        <span className="text-5xl">{emoji}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}
