"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Plus, Minus } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    id: "01",
    title: "Double Slash 4.0",
    venue: "Jadavpur University",
    award: "WINNER",
    description: "Double Slash 4.0, a 36-hour long offline hackathon organized at Jadavpur University. Out of 300+ registered teams, the team secured a spot in the Top 30 finalists and ultimately emerged as the winners.",
    tech: "JU Offline • 36H Sprint",
    date: "2024",
  },
  {
    id: "02",
    title: "ShowcaseX x Techsprint",
    venue: "Hack2Skill",
    award: "WINNER",
    description: "ShowcaseX x Techsprint, powered by Hack2Skill. A high-stakes innovation arena focusing on rapid prototyping and technical execution.",
    tech: "Hack2Skill • Techsprint",
    date: "2024",
  },
  {
    id: "03",
    title: "Hello World Hacks",
    venue: "GDG on Campus RCCIIT",
    award: "WINNER",
    description: "Hello World Hacks is a month-long hybrid hackathon, organized by Google Developers Group on Campus RCC Institute of Information Technology and RCCTechz. Secured the **Best Beginner's Team Track Winner** title.",
    tech: "GDG on Campus • RCCTechz",
    date: "2023",
  },
];

export default function Hackathons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="hackathons" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden border-t border-black/5">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-7xl md:text-9xl font-normal uppercase tracking-tighter text-black leading-none">
                Triumphs <br /> <span className="font-accent italic text-accent lowercase tracking-normal text-6xl md:text-8xl">awards</span>
              </h2>
              <div className="w-16 h-px bg-accent/40 mt-10" />
           </motion.div>
           
           <div className="hidden md:block text-right">
              <p className="text-gray-300 font-mono text-[10px] uppercase tracking-[0.5em]">Recognition & Impact</p>
              <p className="text-black/40 text-xs font-medium uppercase mt-2">National Hackathon Circuit</p>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              layout
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-black/[0.03] bg-black/[0.01] transition-all duration-700 hover:border-accent/30 hover:bg-white hover:shadow-2xl hover:shadow-black/[0.03]"
            >
              <div className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-12 flex-1">
                   <div className="text-5xl font-normal font-mono text-black/[0.03] group-hover:text-accent/20 transition-colors duration-700">{item.id}</div>
                   <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                         <span className="text-accent font-medium text-[10px] uppercase tracking-widest">{item.award}</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-normal uppercase text-black leading-tight group-hover:tracking-tight transition-all duration-700">{item.title}</h3>
                      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em] mt-3">{item.venue}</p>
                   </div>
                </div>

                <div className="flex items-center gap-10">
                   <div className="hidden lg:block text-right space-y-2">
                      <div className="text-[9px] font-bold text-black uppercase tracking-widest">{item.date}</div>
                      <div className="text-[10px] font-medium text-gray-300 uppercase tracking-widest">{item.tech.split('•')[0]}</div>
                   </div>
                   <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-700">
                      {hoveredIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                   </div>
                </div>
              </div>

              {/* Streamlined Liquid-smooth expansion on HOVER */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 md:px-14 pb-14 pt-10 border-t border-black/5 bg-black/[0.01]">
                      <div className="flex flex-col gap-6">
                         <p className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                            <Trophy size={14} /> Description
                         </p>
                         <p className="text-gray-500 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl">
                            {item.description}
                         </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
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
