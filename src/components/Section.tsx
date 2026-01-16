"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  title: string
  subtitle?: string
  content?: React.ReactNode
  className?: string
  children?: React.ReactNode
  variant?: "default" | "highlight"
  hideHighlight?: boolean
}

export function Section({ 
  id, 
  title, 
  subtitle, 
  content, 
  className,
  children,
  variant = "default",
  hideHighlight = false
}: SectionProps) {
  
  return (
    <section 
      id={id}
      className={cn(
        "min-h-screen flex flex-col justify-center px-6 py-20 relative overflow-hidden border-t border-white/5",
        className
      )}
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start"
        >
          {/* Header Column */}
          <div className="sticky top-20">
             {subtitle && (
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-xs md:text-sm text-matrix-green tracking-widest uppercase mb-4 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-matrix-green" />
                {subtitle}
              </motion.p>
            )}
            
            <h2 className={cn(
              "font-serif italic text-3xl md:text-6xl text-white mb-6 md:mb-8",
              !hideHighlight && "border-l-2 border-matrix-green pl-4 md:pl-6 py-2"
            )}>
              {title}
            </h2>

            {content && (
              <div className="text-lg text-white/70 leading-relaxed font-light mb-6 md:mb-0">
                {content}
              </div>
            )}
          </div>

          {/* Content Column */}
          <div className="space-y-8 md:space-y-12 mt-8 md:mt-0">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
