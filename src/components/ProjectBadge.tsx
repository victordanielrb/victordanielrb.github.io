import { useLanguage } from '../context/LanguageContext'
import type { Project } from '../i18n/translations'

interface ProjectBadgeProps {
  project: Project
  className?: string
}

export default function ProjectBadge({ project, className = '' }: ProjectBadgeProps) {
  const { t } = useLanguage()

  return (
    <span
      className={`brutal font-bold uppercase px-2 py-0.5 rounded-full border-[2px] border-zinc-100 text-white [--brutal-x:2px] [--brutal-y:2px] ${
        project.personal ? 'bg-purple-500' : 'bg-indigo-500'
      } ${className}`}
    >
      {project.personal ? t.projects.personalBadge : t.projects.educationalBadge}
    </span>
  )
}
