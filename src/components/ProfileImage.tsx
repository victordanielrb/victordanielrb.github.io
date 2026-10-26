export default function ProfileImage() {
  return (
    <div className="relative ml-3 lg:flex-1 lg:min-h-[200px]">
      {/* Dashed orbit accent */}
      <svg
        className="absolute -top-3 -left-3 w-14 h-14 text-purple-400/70 pointer-events-none"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 34C2 16 16 2 34 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />
      </svg>

      {/* Below lg: fixed aspect ratio, normal document flow. At lg+: the
          card is a fixed-height flex column and this image is the only
          flexible piece — it absorbs whatever height the text below
          doesn't need, so the card never has to scroll to fit the bio. */}
      <div className="brutal-static w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-xl overflow-hidden border-[3px] border-zinc-100 [--brutal-x:6px] [--brutal-y:6px]">
        <img
          src="/img/victor.jfif"
          alt="Victor Daniel"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Badge */}
      <span className="absolute -bottom-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-zinc-100 bg-purple-500 text-[#0a0a0b] shadow-[3px_3px_0_0_var(--color-zinc-100)]">
        <i className="fas fa-code text-sm" aria-hidden="true" />
      </span>
    </div>
  )
}
