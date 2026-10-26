import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const SECTIONS = ['about', 'projects', 'technologies'] as const
type Section = (typeof SECTIONS)[number]

const SECTION_ICONS: Record<Section, string> = {
  about: 'fa-user',
  projects: 'fa-diagram-project',
  technologies: 'fa-layer-group',
}

export default function Navbar() {
  const { t, lang, switchTo } = useLanguage()
  const [active, setActive] = useState<Section>('about')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const map = new Map<Element, Section>()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = map.get(entry.target)
            if (id) setActive(id)
          }
        })
      },
      { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        map.set(el, id)
        observerRef.current!.observe(el)
      }
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const navLabels: Record<Section, string> = {
    about: t.nav.about,
    projects: t.nav.projects,
    technologies: t.nav.technologies,
  }

  return (
    <>
      {/* Center island — section nav, no mark/logo */}
      <nav
        className="brutal-static font-display fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 sm:gap-1 rounded-full border-[3px] border-zinc-100 bg-[#131315] px-1.5 py-1.5 sm:px-2 sm:py-2 [--brutal-x:4px] [--brutal-y:4px] sm:[--brutal-x:5px] sm:[--brutal-y:5px]"
        aria-label="Section navigation"
      >
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={navLabels[id]}
            className={`flex items-center justify-center w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 rounded-full text-sm font-bold uppercase tracking-tight transition-all duration-200 whitespace-nowrap ${
              active === id
                ? 'bg-white text-[#0a0a0b]'
                : 'text-zinc-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {/* Wrapper spans (not the <i> itself) carry the display utility: Font
                Awesome's unlayered stylesheet sets display on .fas directly, which
                beats a Tailwind @layer utility of equal specificity regardless of
                breakpoint, so the utility has to live on a plain element instead. */}
            <span className="sm:hidden">
              <i className={`fas ${SECTION_ICONS[id]} text-sm`} aria-hidden="true" />
            </span>
            <span className="hidden sm:inline">{navLabels[id]}</span>
          </a>
        ))}
      </nav>

      {/* Right island — language, fixed independent of scroll */}
      <div
        className="brutal-static font-display fixed top-4 sm:top-6 right-4 sm:right-6 z-50 flex items-center gap-0.5 rounded-full border-[3px] border-zinc-100 bg-[#131315] p-1 sm:p-1.5 [--brutal-x:3px] [--brutal-y:3px] sm:[--brutal-x:4px] sm:[--brutal-y:4px]"
        aria-label="Language switch"
      >
        <button
          onClick={() => switchTo('en')}
          aria-pressed={lang === 'en'}
          className={`px-2 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-tight transition-all duration-200 ${
            lang === 'en' ? 'bg-white text-[#0a0a0b]' : 'text-zinc-400 hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchTo('pt')}
          aria-pressed={lang === 'pt'}
          className={`px-2 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-tight transition-all duration-200 ${
            lang === 'pt' ? 'bg-white text-[#0a0a0b]' : 'text-zinc-400 hover:text-white'
          }`}
        >
          PT
        </button>
      </div>
    </>
  )
}
