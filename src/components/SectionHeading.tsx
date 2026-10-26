interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-8 flex items-center gap-3">
      <span className="w-3 h-8 sm:h-9 flex-shrink-0 border-[2px] border-zinc-100 bg-purple-500 inline-block" />
      {children}
    </h2>
  )
}
