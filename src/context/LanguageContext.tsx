import { createContext, useContext } from 'react'
import { useParams, useNavigate } from 'react-router'
import { translations, type Language, type Translations } from '../i18n/translations'

interface LanguageContextValue {
  lang: Language
  t: Translations
  switchTo: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { lang: paramLang } = useParams<{ lang?: string }>()
  const navigate = useNavigate()

  const lang: Language = paramLang === 'pt' ? 'pt' : 'en'

  const switchTo = (newLang: Language) => {
    navigate(newLang === 'en' ? '/' : `/${newLang}`)
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], switchTo }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
