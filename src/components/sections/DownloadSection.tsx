"use client"

import { Section } from "@/components/Section"
import { motion } from "framer-motion"
import { Download, FileText, Lock } from "lucide-react"

export function DownloadSection() {
  return (
    <Section 
      title="Download Full Report" 
      subtitle="Get the Report"
      variant="default"
      className="pb-32"
    >
      <div className="flex flex-col items-center justify-center mt-12 space-y-12">
        <div className="max-w-2xl text-center space-y-4">
          <p className="text-xl text-white/60 font-mono">
            Full ecosystem analysis, case studies, and financial logs available for extraction.
          </p>
        </div>
        
        <motion.a
          href="https://drive.google.com/file/d/1mI-y5RdH70plNfSkZPWmC6rSBoC_KWc-/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 py-5 md:px-8 md:py-6 bg-matrix-green/5 border border-matrix-green/50 hover:bg-matrix-green/10 text-matrix-green font-mono text-base md:text-lg transition-all overflow-hidden w-full max-w-md md:max-w-none md:w-auto"
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matrix-green/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />
          
          <div className="flex items-center justify-center w-12 h-12 border border-matrix-green/30 bg-black/50">
            <Download className="w-6 h-6" />
          </div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="uppercase tracking-widest text-xs md:text-sm text-white/50 mb-1">Download Report</span>
            <span className="font-bold tracking-tight text-sm md:text-base">FULL REPORT PDF</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-matrix-green/50 md:ml-4 md:border-l md:border-matrix-green/20 md:pl-6 mt-2 md:mt-0">
            <Lock className="w-3 h-3" />
            <span>EXTERNAL</span>
          </div>
        </motion.a>
        
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-xs font-mono text-white/30 uppercase tracking-widest text-center">
          <span>Source: Google Drive</span>
          <span>Access: Public</span>
        </div>
      </div>
    </Section>
  )
}
