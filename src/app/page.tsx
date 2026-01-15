import { Hero } from "@/components/Hero"
import { ScrollProgress } from "@/components/ScrollProgress"
import { ExecutiveSummary } from "@/components/sections/ExecutiveSummary"
import { DownloadSection } from "@/components/sections/DownloadSection"

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <ExecutiveSummary /> 
      <DownloadSection />
    </main>
  )
}
