"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Info } from "lucide-react";
import Image from "next/image";
import { useMagnetic } from "@/lib/hooks/useMagnetic";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Resourcio Pvt. Ltd.",
    status: "INTERN",
    period: "Nov 2025 — Present",
    description: "Architecting and developing frontend systems for multiple high-impact platforms: \n\n Zynor — AI image & video generation platform \n Apertre 3.0 — 30-day open-source program by the Resourcio Community \n Resourcio Official Website — company website and digital presence",
    highlights: ["Next.js / TypeScript"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BUk0uhGiBa1r7-NjVJTXbe1itCl19rcl2Q&s"
  },
  {
    role: "Web Associate",
    company: "Google Developer's Groups on Campus RCCIIT",
    status: "Associate",
    period: "Oct 2025 — Present",
    description: "Architected and developed the official website for Google Developer's Groups on Campus RCCIIT, enhancing the digital presence of the campus developer community.",
    highlights: ["Next.js", "Engineering", "Web Associate"],
    logo: "https://gdgc.dbit.in/nav-logo.png"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden ">
      {/* Editorial Grid Base */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-x-0 h-px bg-black top-1/4" />
        <div className="absolute inset-x-0 h-px bg-black top-2/4" />
        <div className="absolute inset-x-0 h-px bg-black top-3/4" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col mb-24 gap-4">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-6xl md:text-9xl font-normal  tracking-tighter text-black leading-none">
                Journey <br /> <span className="font-accent italic text-accent lowercase tracking-normal text-5xl md:text-8xl font-normal">milestone</span>
              </h2>
              <div className="flex items-center gap-4 mt-8">
                 <div className="h-px w-20 bg-accent/30" />
                 <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.5em]">Professional path & impact</p>
              </div>
           </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 p-10 md:p-16 rounded-[3rem] border border-black/5 hover:border-accent/30 bg-black/[0.01] hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] transition-all duration-1000 overflow-hidden"
            >
              {/* Interaction accent blob */}
              <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-1000" />
              
              <div className="lg:col-span-3 flex flex-col justify-start">
                 <div className="flex items-center gap-3 text-accent mb-4">
                    <Calendar size={14} />
                    <span className="text-[11px] font-medium tracking-widest">{exp.period}</span>
                 </div>
                 <div className="mt-auto hidden lg:block">
                    <div className="flex flex-wrap gap-2">
                       {exp.highlights.map(h => (
                         <span key={h} className="text-[9px] font-semibold text-gray-300 tracking-tighter border border-black/[0.03] px-3 py-1 rounded-full group-hover:text-black group-hover:border-black/5 transition-colors">
                            {h}
                         </span>
                       ))}
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-6">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center overflow-hidden relative">
                       {exp.logo ? (
                         <Image 
                           src={exp.logo} 
                           alt={exp.company} 
                           fill 
                           className="object-contain p-2" 
                           sizes="48px"
                         />
                       ) : (
                         <div className="w-full h-full bg-black text-white flex items-center justify-center font-accent italic text-xl">
                           {exp.company[0]}
                         </div>
                       )}
                    </div>
                    <div>
                       <h3 className="text-4xl md:text-5xl font-normal  text-black leading-tight group-hover:text-accent transition-colors duration-700">{exp.role}</h3>
                       <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.4em] mt-2 italic">{exp.company}</p>
                    </div>
                 </div>
                 <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed group-hover:text-black transition-colors duration-700 whitespace-pre-line">
                    {exp.description}
                 </p>
              </div>

              <div className="lg:col-span-3 flex flex-col lg:items-end justify-center gap-8">
                 <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/60 group-hover:text-black transition-colors">{exp.status}</span>
                 </div>
                 <div ref={useMagnetic() as any} className="magnetic-wrap">
                   <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700">
                      <Briefcase size={20} />
                   </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
