"use client"

import { Section } from "@/components/Section"
import { motion } from "framer-motion"
import { Download, FileText, Lock } from "lucide-react"

export function DownloadSection() {
  return (
    <Section 
      title="Access Full Dossier" 
      subtitle="Data Export"
      variant="default"
      className="pb-32"
    >
      <div className="flex flex-col items-center justify-center mt-12 space-y-12">
        <div className="max-w-2xl text-center space-y-4">
          <p className="text-xl text-white/60 font-mono">
            // Full ecosystem analysis, case studies, and financial logs available for extraction.
          </p>
        </div>
        
        <motion.a
          href="/report.pdf" 
          download
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-6 px-8 py-6 bg-matrix-green/5 border border-matrix-green/50 hover:bg-matrix-green/10 text-matrix-green font-mono text-lg transition-all overflow-hidden"
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matrix-green/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />
          
          <div className="flex items-center justify-center w-12 h-12 border border-matrix-green/30 bg-black/50">
            <Download className="w-6 h-6" />
          </div>
          
          <div className="flex flex-col items-start">
            <span className="uppercase tracking-widest text-sm text-white/50 mb-1">Secure Download</span>
            <span className="font-bold tracking-tight">INITIATE_FILE_TRANSFER.PDF</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-matrix-green/50 ml-4 border-l border-matrix-green/20 pl-6">
            <Lock className="w-3 h-3" />
            <span>ENCRYPTED</span>
          </div>
        </motion.a>
        
        <div className="flex gap-8 text-xs font-mono text-white/30 uppercase tracking-widest">
          <span>Size: 100MB</span>
          <span>Format: PDF</span>
          <span>Hash: 8X...F9</span>
        </div>
      </div>
    </Section>
  )
}
