import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../i18n/translations'
import { useLanguage } from '../context/LanguageContext'
import Tag from './Tag'

interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const { t } = useLanguage()
  const [closing, setClosing] = useState(false)

  const close = () => {
    setClosing(true)
    setTimeout(onClose, 200)
  }

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return createPortal(
    <div
      className={`modal-backdrop${closing ? ' closing' : ''} fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/75 backdrop-blur-sm`}
      onClick={close}
    >
      <div
        className={`modal-content${closing ? ' closing' : ''} w-full max-w-3xl max-h-[90dvh] overflow-y-auto sm:h-[85dvh] sm:max-h-[720px] sm:overflow-hidden flex flex-col sm:flex-row bg-[#111113] border-[3px] border-zinc-100 rounded-2xl shadow-[8px_8px_0_0_var(--color-purple-500)]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image — left column on sm+, top strip on mobile */}
        <div className="relative w-full h-52 sm:h-full sm:w-[42%] flex-shrink-0 border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-zinc-100 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Text — right column on sm+, its own scroll independent of the image */}
        <div className="relative flex-1 min-w-0 sm:h-full sm:overflow-y-auto">
          <button
            onClick={close}
            className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-lg border-[2px] border-zinc-100 bg-[#0a0a0b] text-white hover:bg-purple-500 hover:text-[#0a0a0b] transition-colors duration-200"
          >
            <i className="fas fa-xmark text-sm" />
          </button>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 flex-wrap pr-10">
              <h2 className="font-display text-white font-black uppercase tracking-tight text-xl">{project.title}</h2>
              {project.personal && (
                <span className="font-display text-[11px] font-bold uppercase px-2 py-0.5 rounded-full border-[2px] border-zinc-100 bg-purple-500 text-white">
                  {t.projects.personalBadge}
                </span>
              )}
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>

            <ul className="space-y-2.5">
              {project.contributions.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-zinc-400">
                  <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 bg-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {project.challenges && project.challenges.length > 0 && (
              <div>
                <p className="font-display text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {t.projects.challenges}
                </p>
                <ul className="space-y-2.5">
                  {project.challenges.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-zinc-400">
                      <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 bg-orange-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} variant="purple" />
              ))}
            </div>

            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal font-display inline-flex items-center gap-2 rounded-xl border-[3px] border-zinc-100 bg-[#131315] px-4 py-2 text-xs font-bold uppercase tracking-tight text-white [--brutal-x:3px] [--brutal-y:3px]"
              >
                <i className="fas fa-arrow-up-right-from-square text-xs" />
                {t.projects.viewProject}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
