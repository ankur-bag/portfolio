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
    tech: "IEEE JU",
    date: "2026",
  },
  {
    id: "02",
    title: "ShowcaseX x Techsprint",
    venue: "Hack2Skill",
    award: "WINNER",
    description: "ShowcaseX x Techsprint, powered by Hack2Skill. A high-stakes innovation arena focusing on rapid prototyping and technical execution.",
    tech: "Hack2Skill",
    date: "2026",
  },
  {
    id: "04",
    title: "ICEBERG HACKS-PRO EDITION",
    venue: "IE(I) Student Chapter, RCCIIT",
    award: "2ND RUNNER UP",
    description: "Secured the 2nd Runner up position in ICEBERG HACKS-PRO EDITION 2025-26. Issued by IE(I) Student Chapter, RCCIIT.",
    tech: "IE(I) Student Chapter",
    date: "2026",
  },
  {
    id: "03",
    title: "Hello World Hacks",
    venue: "GDG on Campus RCCIIT",
    award: "WINNER - Best Beginer's Team Track",
    description: "Hello World Hacks is a month-long hybrid hackathon, organized by Google Developers Group on Campus RCC Institute of Information Technology and RCCTechz. Secured the Best Beginner's Team Track Winner title.",
    tech: "GDG on Campus",
    date: "2025",
  },
];

export default function Hackathons() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  // Group by year based on date. Use the first 4 characters of date as year
  const grouped = achievements.reduce((acc, item) => {
    const year = item.date.substring(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {} as Record<string, typeof achievements>);

  const sortedYears = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section id="hackathons" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden ">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl lg:text-[clamp(5rem,7vw,8rem)] font-normal tracking-tighter text-black leading-none">
                Hackathon <br /> <span className="font-accent italic text-accent lowercase tracking-normal text-6xl lg:text-[clamp(4rem,6vw,7rem)]">wins</span>
              </h2>
              <div className="w-16 h-px bg-accent/40 mt-10" />
            </motion.div>
           
           <div className="hidden md:block text-right">
              <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.5em]">Recognition & Impact</p>
           </div>
        </div>

        <div className="relative pl-4 md:pl-0">
          {/* Main vertical line for timeline */}
          <div className="absolute left-[20px] md:left-[23px] top-8 bottom-0 w-[2px] bg-linear-to-b from-black/10 via-black/5 to-transparent" />

          <div className="space-y-16">
            {sortedYears.map((year, yearIndex) => (
              <div key={year} className="relative">
                 {/* Year Node */}
                 <div className="flex items-center gap-6 mb-10 relative">
                   <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0 z-10 shadow-sm">
                     <span className="text-sm md:text-base font-normal font-mono text-black">{year}</span>
                   </div>
                 </div>

                 {/* Achievements under year */}
                 <div className="space-y-6">
                    {grouped[year].map((item, itemIndex) => (
                       <motion.div
                          key={item.id}
                          layout
                          onMouseEnter={() => setHoveredIndex(item.id)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            card.style.setProperty("--mouse-x", `${x}px`);
                            card.style.setProperty("--mouse-y", `${y}px`);
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: itemIndex * 0.1 }}
                          className="relative pl-[40px] md:pl-[64px]"
                       >
                          {/* Connector curve */}
                          <div className="absolute left-[20px] md:left-[23px] top-0 bottom-1/2 w-[20px] md:w-[41px] border-l-2 border-b-2 border-black/5 rounded-bl-[2.5rem]" />

                          <div className="group relative rounded-[2rem] overflow-hidden border border-black/3 bg-black/1 transition-all duration-700 hover:border-accent/30 hover:bg-white hover:shadow-2xl hover:shadow-black/3">
                            {/* Liquid Glow Effect */}
                            <div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                              style={{
                                background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,107,0,0.06), transparent 40%)`
                              }}
                            />
                            
                            {/* Premium Inset Border */}
                            <div className="absolute inset-[1px] rounded-[1.9rem] border border-white pointer-events-none z-10 opacity-40 shadow-inner" />

                            <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                              <div className="flex items-center gap-6 xl:gap-8 flex-1">
                                 <div className="text-3xl xl:text-4xl font-normal font-mono text-black/12 group-hover:text-accent/20 transition-colors duration-700">{item.id}</div>
                                 <div className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-2">
                                       <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                       <span className="text-accent font-medium text-[9px] uppercase tracking-widest">{item.award}</span>
                                    </div>
                                    <h3 className="text-2xl xl:text-3xl font-normal uppercase text-black leading-tight group-hover:tracking-tight transition-all duration-700">{item.title}</h3>
                                    <p className="text-[9px] font-mono text-gray-400 uppercase tracking-[0.3em] mt-2">{item.venue}</p>
                                 </div>
                              </div>

                              <div className="flex items-center gap-8">
                                 <div className="hidden lg:block text-right space-y-1">
                                    <div className="text-[14px] text-black uppercase tracking-widest">{item.date}</div>
                                    <div className="text-[9px] font-medium text-gray-400 uppercase tracking-widest">{item.tech?.split('•')[0]}</div>
                                 </div>
                                 <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-700">
                                    {hoveredIndex === item.id ? <Minus size={20} /> : <Plus size={20} />}
                                 </div>
                              </div>
                            </div>

                            {/* Streamlined Liquid-smooth expansion on HOVER */}
                            <AnimatePresence>
                              {hoveredIndex === item.id && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ 
                                    height: { type: "spring", stiffness: 100, damping: 20 },
                                    opacity: { duration: 0.4 }
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-8 md:px-10 pb-10 pt-8 border-t border-black/5 bg-black/1">
                                    <div className="flex flex-col gap-4">
                                       <p className="text-[9px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                                          <Trophy size={14} /> Description
                                       </p>
                                       <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
                                          {item.description}
                                       </p>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                       </motion.div>
                    ))}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
