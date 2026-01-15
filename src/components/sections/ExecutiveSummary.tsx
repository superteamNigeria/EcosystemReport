"use client"

import { Section } from "@/components/Section"
import { motion } from "framer-motion"
import { Check, ShieldCheck, TrendingUp, Users, Trophy, Lightbulb, Calendar } from "lucide-react"

export function ExecutiveSummary() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Economic Impact",
      value: "$1.2M+",
      description: "Direct Community GDP generated for Nigerian talent through grants and bounties."
    },
    {
      icon: Users,
      title: "Public-Sector Engagement",
      value: "Strategic Partner",
      description: "Formal engagement with Federal Ministry of Youth Development."
    },
    {
      icon: Trophy,
      title: "Global Competitiveness",
      value: "Top Ranked",
      description: "Consistently winning global hackathons and executing high-leverage bounties."
    },
    {
      icon: Lightbulb,
      title: "FAT Thesis",
      value: "Product Scale",
      description: "Incubated products like Ribh and NectarFi processing millions in volume."
    },
    {
      icon: Calendar,
      title: "Future Outlook",
      value: "$2M Target",
      description: "Active exploration of Internet Capital Markets for 2026."
    }
  ]

  return (
    <Section 
      id="executive-summary" 
      title="Executive Summary"
      subtitle="System Overview"
      content={
        <>
          <p className="mb-6">
            In 2025, Superteam Nigeria evolved from a grassroots community into a <span className="text-white font-medium">sovereign economic engine</span>.
          </p>
          <p>
            We didn't just onboard users; we generated tangible economic value, fostered institutional trust, and built the infrastructure for a digital nation state.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-6 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-white/10 bg-white/5 p-4 md:p-6 hover:border-matrix-green/50 transition-colors group relative overflow-hidden"
          >
            {/* Terminal corner accents */}
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 bg-matrix-green" />
            </div>

            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-matrix-green/10 rounded-none border border-matrix-green/20 text-matrix-green">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-white/40 tracking-widest">[LOG_{index + 1}]</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-mono text-white mb-2 tracking-tight group-hover:text-matrix-green transition-colors">
              {item.value}
            </h3>
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-white/60 leading-relaxed font-mono">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
