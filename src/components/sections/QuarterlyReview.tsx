"use client"

import { Section } from "@/components/Section"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Stat {
  label: string
  value: string
  subtext?: string
}

interface QuarterlyReviewProps {
  quarter: string
  title: string
  description: string
  stats: Stat[]
  theme?: "blue" | "green" | "purple" | "orange"
}

export function QuarterlyReview({ quarter, title, description, stats, theme = "blue" }: QuarterlyReviewProps) {
  
  const themeColors = {
    blue: "text-blue-400 border-blue-500/30 bg-blue-500/5 hover:border-blue-400/50",
    green: "text-matrix-green border-matrix-green/30 bg-matrix-green/5 hover:border-matrix-green/50",
    purple: "text-purple-400 border-purple-500/30 bg-purple-500/5 hover:border-purple-400/50",
    orange: "text-orange-400 border-orange-500/30 bg-orange-500/5 hover:border-orange-400/50",
  }

  const accentColor = {
    blue: "bg-blue-500",
    green: "bg-matrix-green",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  }

  return (
    <Section 
      title={quarter} 
      subtitle={title}
      variant="default"
    >
      <div className="grid lg:grid-cols-2 gap-12 mt-8">
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light font-sans border-l border-white/10 pl-6">
            {description}
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "p-6 transition-all duration-300 relative group overflow-hidden border",
                  themeColors[theme]
                )}
              >
                 {/* Corner markers */}
                <div className="absolute top-0 right-0 p-1 opacity-50 group-hover:opacity-100">
                   <div className={cn("w-1 h-1", accentColor[theme])} />
                </div>
                <div className="absolute bottom-0 left-0 p-1 opacity-50 group-hover:opacity-100">
                   <div className={cn("w-1 h-1", accentColor[theme])} />
                </div>

                <div className={cn("text-2xl md:text-3xl font-mono mb-2 tracking-tighter", themeColors[theme].split(' ')[0])}>
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">
                  {stat.label}
                </div>
                {stat.subtext && (
                  <div className="text-[10px] text-white/30 font-mono border-t border-white/5 pt-2 mt-2">
                    {stat.subtext}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[300px] h-full border border-white/10 bg-black/20 flex flex-col p-8 group">
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${theme === 'green' ? '#00FF85' : theme === 'blue' ? '#60A5FA' : theme === 'purple' ? '#A855F7' : '#FB923C'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'green' ? '#00FF85' : theme === 'blue' ? '#60A5FA' : theme === 'purple' ? '#A855F7' : '#FB923C'} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(circle at center, black, transparent 80%)"
            }}
          />

          <div className="relative z-10 h-full flex flex-col justify-center">
             <h4 className="text-xl font-mono text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4 inline-flex items-center gap-3">
               <span className={cn("w-2 h-2 rounded-full animate-pulse", accentColor[theme])} />
               Event Log
             </h4>
             <ul className="space-y-4 font-mono text-sm text-white/70">
               <li className="flex items-center gap-3">
                 <span className="text-white/20">01</span>
                 <span>Solana Summit Africa</span>
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-white/20">02</span>
                 <span>Startup Village Nigeria</span>
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-white/20">03</span>
                 <span>SuperteamNG Founder's Dinner</span>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
