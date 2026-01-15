"use client"

import { Section } from "@/components/Section"

export function Introduction() {
  return (
    <Section 
      title="Introduction" 
      subtitle="Contextual Analysis"
      variant="default"
    >
      <div className="max-w-3xl mt-8">
        <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
          <p className="border-l border-matrix-green/20 pl-4">
            Over the last twelve months, Superteam Nigeria generated a Community GDP of 
            <span className="text-matrix-green font-bold"> $1.2 million</span>.
          </p>
          <p className="border-l border-matrix-green/20 pl-4">
            This figure is more than just transaction volume. It validates the "Work-to-Earn" 
            thesis — the idea that digital sovereignty can be a primary income source for 
            African youth. This capital flowed directly into the wallets of Nigerian developers, 
            founders, and creatives through the Solana global economy, not as aid or 
            speculation, but as compensation for value created.
          </p>
          <p className="border-l border-matrix-green/20 pl-4">
            We converted "internet money" into a verifiable national asset.
          </p>
          <div className="bg-white/5 border border-white/10 p-6 rounded-none relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
            
            <p className="font-mono text-white text-lg tracking-tight">
              <span className="text-matrix-green mr-2">{">"}</span>
              2025 was the year the ecosystem matured from an experiment into an institution.
            </p>
            <p className="font-mono text-white/60 text-sm mt-2 italic">
              This is the chronicle of that journey.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
