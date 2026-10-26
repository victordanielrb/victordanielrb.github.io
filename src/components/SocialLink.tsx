import type { SocialLink as SocialLinkType } from '../i18n/translations'

export default function SocialLink({ label, icon, href, download, filename }: SocialLinkType) {
  return (
    <a
      href={href}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noopener noreferrer'}
      download={download ? filename : undefined}
      aria-label={label}
      title={label}
      className="brutal-hover flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-zinc-100 bg-[#0a0a0b] text-zinc-300 hover:text-white hover:border-purple-400 transition-colors duration-200 [--brutal-x:3px] [--brutal-y:3px]"
    >
      <i className={`${icon} text-sm`} aria-hidden="true" />
    </a>
  )
}
