import { useLanguage } from '../context/LanguageContext'

export default function ProfileBio() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <div className="mt-4  lg:flex-shrink-0">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1">
        {hero.greeting}
      </p>
      <h1 className="font-display text-3xl font-black leading-[0.95] tracking-tight text-white mb-2">
        {hero.name}
      </h1>
      <span className="brutal-static font-display inline-block rounded-full border-[3px] border-zinc-100 bg-purple-500 px-3 py-0.5 text-xs font-extrabold uppercase tracking-wide text-[#0a0a0b] [--brutal-x:3px] [--brutal-y:3px] mb-3">
        {hero.role}
      </span>
      <div className="space-y-2 my-3">
        {hero.bio.map((paragraph, i) => (
          <p key={i} className="text-zinc-400 text-sm leading-snug">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
