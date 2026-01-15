import { Hero } from "@/components/Hero"
import { ScrollProgress } from "@/components/ScrollProgress"
import { ExecutiveSummary } from "@/components/sections/ExecutiveSummary"
import { Introduction } from "@/components/sections/Introduction"
import { QuarterlyReview } from "@/components/sections/QuarterlyReview"
import { DownloadSection } from "@/components/sections/DownloadSection"

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <ExecutiveSummary />
      <Introduction />
      
      <QuarterlyReview 
        quarter="Q1 2025"
        title="The Foundation"
        description="The ecosystem matured from an experiment into an institution, focusing on strategic alignment and quality over quantity."
        theme="blue"
        stats={[
          { label: "Community GDP", value: "$551K", subtext: "30% Growth" },
          { label: "Jobs Generated", value: "$20K", subtext: "Direct Income" },
          { label: "Grants", value: "$204K", subtext: "Distributed" },
          { label: "Bounties", value: "$205K", subtext: "Paid Out" }
        ]}
      />

      <QuarterlyReview 
        quarter="Q2 2025"
        title="Scaling Execution"
        description="Shifted to high-velocity execution. Hashed Emergent recognized the community as Nigeria's most active Web3 ecosystem."
        theme="green"
        stats={[
          { label: "Community GDP", value: "$878K", subtext: "59% QoQ Growth" },
          { label: "Hackathon Rank", value: "2nd", subtext: "Global Submissions" },
          { label: "Grants", value: "$331K", subtext: "Distributed" },
          { label: "Bounties", value: "$325K", subtext: "Paid Out" }
        ]}
      />

      <QuarterlyReview 
        quarter="Q3 2025"
        title="The $1M Milestone"
        description="Breached the $1 million monthly Community GDP threshold and established a formal partnership with the Federal Ministry of Youth Development."
        theme="purple"
        stats={[
          { label: "Community GDP", value: "$1.08M", subtext: "Success!" },
          { label: "YoY Growth", value: "24%", subtext: "Quarter over Quarter" },
          { label: "Grants", value: "$399K", subtext: "Distributed" },
          { label: "Bounties", value: "$425K", subtext: "Paid Out" }
        ]}
      />

      <QuarterlyReview 
        quarter="Q4 2025"
        title="Economic Network"
        description="Consolidated status as a structured economic force. Hosted Solana Summit Africa with over 800 attendees."
        theme="orange"
        stats={[
          { label: "Community GDP", value: "$1.21M", subtext: "Record High" },
          { label: "YoY Growth", value: "248%", subtext: "vs Dec 2024" },
          { label: "Grants", value: "$429K", subtext: "Distributed" },
          { label: "Bounties", value: "$485K", subtext: "Paid Out" }
        ]}
      />

      <DownloadSection />
    </main>
  )
}
