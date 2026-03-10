"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-black text-white min-h-screen flex flex-col justify-center relative overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem]">
      {/* Background large decorative text */}
      <div className="absolute top-1/2 left-0 text-[25vw] font-normal text-white/[0.02] leading-none select-none pointer-events-none -translate-y-1/2 uppercase">
        Connect
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <div className="mb-20">
           <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-10"
           >
              <span className="w-12 h-px bg-white/20" />
              <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-gray-500">READY TO COLLABORATE?</p>
              <span className="w-12 h-px bg-white/20" />
           </motion.div>
           
           <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[10vw] font-normal uppercase leading-[0.8] tracking-tighter mb-16"
           >
             Let’s <br /> Build the <br /> <span className="font-accent italic text-accent lowercase tracking-normal text-6xl md:text-[8vw] decoration-white/10 underline">unexpected</span>
           </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-4xl border-t border-white/5 pt-16">
           <div className="flex flex-col items-center md:items-start gap-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">Direct Inquiries</p>
              <a 
                href="mailto:ankurbag700@gmail.com" 
                className="text-2xl md:text-3xl font-normal uppercase hover:text-accent transition-colors block border-b-2 border-white/5 pb-2"
              >
                ankurbag700@gmail.com
              </a>
           </div>

           <div className="flex flex-col items-center md:items-end gap-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">Social Presence</p>
              <div className="flex gap-10">
                 <a href="https://github.com/ankur-bag" target="_blank" className="text-sm font-normal uppercase tracking-[0.2em] hover:text-accent transition-all flex items-center gap-2 group">
                    Github <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
                 <a href="#" className="text-sm font-normal uppercase tracking-[0.2em] hover:text-accent transition-all flex items-center gap-2 group">
                    LinkedIn <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
              </div>
           </div>
        </div>

        <footer className="mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-medium uppercase tracking-[0.3em]">
           <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
              <p className="text-gray-500 font-medium">The Genesis Edition — Portfolio '26</p>
              <p className="text-accent underline font-medium">Crafted with Technical Excellence</p>
           </div>
           
           <div className="flex gap-10 py-6 px-10 border border-white/5 rounded-full bg-white/5 backdrop-blur-sm">
              <Link href="#about" className="hover:text-accent transition-colors">THE VISION</Link>
              <Link href="#projects" className="hover:text-accent transition-colors">THE WORKS</Link>
              <Link href="#contact" className="hover:text-accent transition-colors">BACK UP</Link>
           </div>
        </footer>
      </div>

      <style jsx>{`
        .font-accent {
          font-family: var(--font-accent);
          font-weight: 400;
        }
      `}</style>
    </section>
  );
}
