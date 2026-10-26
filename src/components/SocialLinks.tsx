import { useLanguage } from '../context/LanguageContext'
import SocialLink from './SocialLink'

export default function SocialLinks() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-wrap gap-3 text-center lg:flex-shrink-0">
      {t.social.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  )
}
