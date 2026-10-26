interface TagProps {
  label: string
  variant?: 'default' | 'purple'
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  const base = 'font-display text-[11px] sm:text-xs font-bold uppercase tracking-tight px-2.5 py-1 rounded-full border-[2px]'
  const styles =
    variant === 'purple'
      ? `${base} bg-purple-500 text-white border-zinc-100`
      : `${base} bg-[#131315] text-white border-zinc-100/30`
  return <span className={styles}>{label}</span>
}
