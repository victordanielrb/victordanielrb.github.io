import { LanguageProvider } from '../context/LanguageContext'
import Navbar from '../components/Navbar'
import ProfileImage from '../components/ProfileImage'
import ProfileBio from '../components/ProfileBio'
import SocialLinks from '../components/SocialLinks'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import TechnologiesSection from '../components/TechnologiesSection'
import { useLanguage } from '../context/LanguageContext'

function HomeContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-full text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 sm:pt-24 pb-24">
        {/* About — truly fixed to the viewport on desktop, aligned with the
            container's own left edge at every width via the calc() below. */}
        <aside
          id="about"
          className="animate-fade-in lg:fixed lg:top-24 lg:left-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:w-96"
        >
          <div className="brutal-static w-full max-w-xs lg:max-w-none rounded-2xl border-[3px] border-zinc-100 bg-[#131315] p-6 lg:flex lg:flex-col lg:h-[calc(100vh-8rem)] lg:overflow-hidden [--brutal-x:8px] [--brutal-y:8px]">
            <ProfileImage />
            <ProfileBio />
            <SocialLinks />
          </div>
        </aside>

        <main className="mt-20 py-6 lg:mt-0 lg:ml-[28rem] space-y-24">
          {/* Projects */}
          <section id="projects" className="animate-fade-in-up">
            <SectionHeading>{t.projects.title}</SectionHeading>
            <div className="border-t-[3px] border-zinc-100/15">
              {t.projectList.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i + 1} />
              ))}
            </div>
          </section>

          {/* Technologies */}
          <div className="animate-fade-in-up">
            <TechnologiesSection />
          </div>
        </main>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}
