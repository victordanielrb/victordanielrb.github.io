import { useState } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../i18n/translations'
import Tag from './Tag'
import ProjectModal from './ProjectModal'

const TAG_PREVIEW_COUNT = 3

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [modal, setModal] = useState(false)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  const previewTags = project.tags.slice(0, TAG_PREVIEW_COUNT)
  const hiddenCount = project.tags.length - TAG_PREVIEW_COUNT

  return (
    <>
      {modal && <ProjectModal project={project} onClose={() => setModal(false)} />}

      {/* Miniature preview that follows the cursor — desktop/hover-capable only.
          Portaled to body: position:fixed inside an ancestor left with a
          forwards-filled transform (the entrance animation) would otherwise
          be contained by that ancestor instead of the viewport. */}
      {pos &&
        createPortal(
          <div
            className="thumb-pop hidden lg:block fixed z-30 pointer-events-none w-44 h-32 rounded-xl overflow-hidden border-[3px] border-zinc-100 shadow-[6px_6px_0_0_var(--color-purple-500)] rotate-[-2deg]"
            style={{ left: pos.x + 22, top: pos.y - 150 }}
          >
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-top"
            />
          </div>,
          document.body
        )}

      <div
        className="relative border-b-[3px] border-zinc-100/15 py-5 sm:py-7 cursor-pointer group first:pt-1"
        onClick={() => setModal(true)}
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setPos(null)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setModal(true)
        }}
      >
        <div className="relative z-10 flex items-center gap-4 sm:gap-6">
          <span className="font-display hidden sm:block w-8 flex-shrink-0 text-sm font-bold tabular-nums text-zinc-600 group-hover:text-purple-300 transition-colors duration-300">
            {String(index).padStart(2, '0')}
          </span>

          {/* Always-visible thumbnail — mobile/touch only, no hover state to rely on */}
          <div className="lg:hidden w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden border-[2px] border-zinc-100/30">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <h3 className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
              {project.personal && (
                <span className="text-[10px] sm:text-xs font-bold uppercase px-2 py-0.5 rounded-full border-[2px] border-zinc-100 bg-purple-500 text-white">
                  Personal
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {previewTags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
              {hiddenCount > 0 && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border-[2px] border-zinc-100/30 text-zinc-500">
                  +{hiddenCount}
                </span>
              )}
            </div>
          </div>

          {/* Wrapper span carries the display utility — see Navbar for why it
              can't live directly on the <i> alongside Font Awesome's classes. */}
          <span className="hidden sm:block flex-shrink-0">
            <i
              className="fas fa-arrow-up-right text-white text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </>
  )
}
