"use client"

import { Section } from "@/components/Section"

export function Introduction() {
  return (
    <Section 
      title="Introduction" 
      subtitle="Contextual Analysis"
      variant="default"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
        <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
          <p className="border-l border-matrix-green/20 pl-4">
            In an economic climate defined by double-digit inflation and the "Japa" wave 
            (the mass exodus of talent seeking opportunities abroad), crypto in Nigeria has 
            often been viewed as a survival mechanism.
          </p>
          <p className="border-l border-matrix-green/20 pl-4">
            For years, it was a parallel economy, operating in the shadows, largely ignored 
            or actively fought by the state.
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
          </div>
        </div>
        
        <div className="relative h-80 overflow-hidden bg-black/40 flex items-center justify-center border border-dashed border-white/20">
             {/* Grid overlay */}
             <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(#00FF85 1px, transparent 1px), linear-gradient(90deg, #00FF85 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}
             />
             
             <div className="text-center p-6 relative z-10">
                <span className="text-5xl md:text-7xl font-mono block mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 tracking-tighter">
                  $1.2M
                </span>
                <span className="text-matrix-green font-mono uppercase tracking-widest text-xs border-t border-matrix-green/30 pt-4 block">
                  Community GDP / Generated
                </span>
             </div>
        </div>
      </div>
    </Section>
  )
}
