"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Cpu, Network } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center overflow-x-hidden selection:bg-purple-900/40">
      
      {/* Navbar Placeholder */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          {/* Abstract Geometric Tulip Logo */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute w-5 h-5 border-2 border-white/80 rounded-bl-full rounded-tr-full transform -rotate-12"></div>
            <div className="absolute w-5 h-5 border-2 border-white/60 rounded-br-full rounded-tl-full transform rotate-12"></div>
          </div>
          <span className="font-semibold tracking-wide text-lg text-white/90">BLOOMGARD</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pt-16 pb-32 z-10 flex flex-col">
        
        {/* 1. Hero Section */}
        <section className="flex flex-col items-start max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-white/95">
              AI-Native Enterprise Infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">Industry 4.0</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl font-light"
          >
            Bloomgard builds the autonomous systems required to manage the next generation of global industry, revolutionizing data centers, renewable energy grids, and future computing.
          </motion.p>
        </section>

        {/* 2. The Product Matrix & 3. The Future Vision */}
        <section className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Core Focus - CMA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <Network className="w-6 h-6 text-purple-300" />
                    </div>
                    <span className="text-sm font-medium tracking-widest text-purple-300 uppercase">Flagship</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white/95">Bloomgard CMA</h2>
                  <p className="text-white/60 text-lg mb-10 max-w-md font-light leading-relaxed">
                    The AI-native enterprise management system. Deploy autonomous pipelines and triage engines to scale operations seamlessly.
                  </p>
                </div>

                <Link href="https://cma.bloomgard.co" className="inline-flex w-fit items-center justify-center gap-2 px-8 py-4 glass-button rounded-full font-medium shadow-lg hover:shadow-purple-900/20">
                  Launch Command Center
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Future Vision Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="glass-card rounded-3xl p-8 flex-1 flex flex-col justify-center border border-white/5 hover:border-white/15 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                    <Box className="w-5 h-5 text-blue-300/80" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 tracking-wider">IN DEVELOPMENT</span>
                </div>
                <h3 className="text-xl font-medium mb-2 text-white/80">Bloomgard Infrastructure</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  Next-generation management protocols for high-density data centers and renewable energy grids.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="glass-card rounded-3xl p-8 flex-1 flex flex-col justify-center border border-white/5 hover:border-white/15 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                    <Cpu className="w-5 h-5 text-red-300/80" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 tracking-wider">IN DEVELOPMENT</span>
                </div>
                <h3 className="text-xl font-medium mb-2 text-white/80">Bloomgard Quantum</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  Pioneering research and infrastructure for quantum-native enterprise solutions in India.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

      </main>

      {/* 4. Minimalist Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-white/5 z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm font-light">
        <div>
          &copy; {new Date().getFullYear()} Bloomgard Group. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-white/80 transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Terms</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Contact</Link>
        </div>
      </footer>

    </div>
  );
}
