"use client"

import { motion } from "framer-motion"
import { ArrowDown, Crosshair } from "lucide-react"

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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 bg-matrix-green/10 text-matrix-green text-xs md:text-sm font-mono tracking-widest uppercase border border-matrix-green/20">
            <span className="w-2 h-2 bg-matrix-green animate-pulse" />
            System Status: Operational
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-9xl mb-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="font-serif italic text-white tracking-tight">Proof</span>
          <Crosshair className="w-8 h-8 md:w-16 md:h-16 text-matrix-green hidden md:block opacity-50" />
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
           <h2 className="text-xl md:text-2xl font-mono text-paper-white tracking-[0.2em] uppercase">
             T H E S U P E R T E A M N I G E R I A
           </h2>
           <p className="text-base md:text-lg text-white/60 font-mono">
             // IMPACT REPORT 2025.LOG
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
