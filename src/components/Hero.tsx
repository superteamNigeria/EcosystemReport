"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Top Left Logo */}
      <motion.a
        href="https://ng.superteam.fun"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-4 left-4 z-50 hover:opacity-80 transition-opacity"
      >
        <img src="/superteam-logo.svg" alt="Superteam Nigeria" className="h-8 md:h-10 w-auto" />
      </motion.a>

      {/* Dot Matrix Map Background Placeholder */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#00FF85 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
        }}
      />
      
      <div className="z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          className="text-6xl md:text-9xl mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="font-serif italic text-white tracking-tight">Proof</span>
          <span className="font-mono text-matrix-green/60 text-3xl md:text-5xl">of</span>
          <span 
            className="font-mono text-matrix-green glitch-text tracking-tighter" 
            data-text="Work"
          >
            Work
          </span>
        </motion.h1>

        <motion.div 
          className="mt-8 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
           <h2 className="text-sm md:text-2xl font-mono text-paper-white tracking-[0.1em] md:tracking-[0.2em] uppercase whitespace-nowrap">
             SUPERTEAM NIGERIA
           </h2>
           <p className="text-base md:text-lg text-white/60 font-mono">
             IMPACT REPORT 2025.LOG
           </p>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-matrix-green font-mono text-xs tracking-widest uppercase">
          <span>[ Initiate Scroll ]</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-matrix-green/50" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-matrix-green/50" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-matrix-green/50" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-matrix-green/50" />
    </section>
  )
}
