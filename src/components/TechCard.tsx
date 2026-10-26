import type { TechItem } from '../i18n/translations'

export default function TechCard({ name, icon, description }: TechItem) {
  const isFaIcon = icon.startsWith('fa')

  return (
    <div className="brutal-hover group flex flex-col items-center gap-2 p-4 rounded-xl border-[3px] border-zinc-100/25 bg-[#131315] hover:border-zinc-100">
      {isFaIcon ? (
        <i className={`${icon} text-2xl text-zinc-300 group-hover:scale-110 transition-transform duration-200`} />
      ) : (
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
        />
      )}
      <span className="text-xs text-zinc-400 font-medium text-center">{name}</span>
      {description && (
        <span className="text-[10px] text-zinc-500 text-center leading-tight">{description}</span>
      )}
    </div>
  )
}
