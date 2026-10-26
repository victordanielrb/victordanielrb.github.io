import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './SectionHeading'
import TechCard from './TechCard'

const INITIAL_VISIBLE = 10 // 2 rows × 5 columns (lg breakpoint)

export default function TechnologiesSection() {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)

  const allTech = [...t.mainTech, ...t.extraTech]
  const visibleTech = allTech.slice(0, INITIAL_VISIBLE)
  const hiddenTech = allTech.slice(INITIAL_VISIBLE)

  return (
    <section id="technologies">
      <SectionHeading>{t.technologies.title}</SectionHeading>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {visibleTech.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>

      <div className={`expand-grid ${expanded ? 'expanded' : ''}`}>
        <div>
          <div className="expand-content">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-3">
              {hiddenTech.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="brutal font-display mt-6 inline-flex items-center gap-2 rounded-full border-[3px] border-zinc-100 bg-[#131315] px-4 py-2 text-xs font-bold uppercase tracking-tight text-zinc-200 hover:text-white transition-colors duration-200 [--brutal-x:3px] [--brutal-y:3px]"
      >
        <i
          className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
        {expanded ? t.technologies.showLess : t.technologies.showMore}
      </button>
    </section>
  )
}
