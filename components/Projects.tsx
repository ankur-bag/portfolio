"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

interface ProjectsProps {
  limit?: number;
  title?: React.ReactNode;
}

export default function Projects({ limit, title }: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-32 px-4 md:px-12  bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-24 gap-6">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
           >
              <h2 className="text-[10vw] lg:text-[clamp(6rem,8vw,10rem)] font-normal tracking-tighter leading-[0.85] mb-8 text-black">
                {title || (
                  <>Project <br /> <span className="text-accent font-accent lowercase tracking-normal italic font-normal">gallery</span></>
                )}
              </h2>
              <div className="flex items-center justify-center gap-2">
                 <span className="h-px w-12 bg-accent/20" />
                 <p className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.4em] leading-relaxed">
                   Handpicked selection
                 </p>
                 <span className="h-px w-12 bg-accent/20" />
              </div>
           </motion.div>
        </div>

        <div className="flex flex-col gap-[10vw]">
          {displayedProjects.map((project, index) => (
            <article key={project.id} className="group relative">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-1 hidden lg:block">
                     <span className="text-[8vw] font-normal text-black/[0.04] leading-none transition-colors group-hover:text-accent/6">
                        {project.id}
                     </span>
                  </div>
                  
                  <div className="lg:col-span-5 flex flex-col justify-center">
                     <motion.p 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                       className="text-accent font-medium text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3"
                     >
                        <span className="w-1 h-1 bg-accent rounded-full" /> {project.category}
                     </motion.p>
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl xl:text-5xl font-normal mb-8 group-hover:text-accent transition-colors duration-500 text-black leading-tight"
                       >
                        {project.title}
                      </motion.h3>
                     <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg leading-relaxed mb-6 max-w-md font-medium"
                      >
                        {project.description}
                     </motion.p>

                     <div className="mb-8">
                        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400 mb-3 underline decoration-accent/20">Main Portions</p>
                        <p className="text-sm font-normal text-black/80">{project.mainPortion}</p>
                     </div>
                     
                     <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map(tag => (
                           <span key={tag} className="px-4 py-1.5 border border-black/[0.03] rounded-full text-[9px] font-medium font-mono text-gray-400 uppercase tracking-widest bg-black/[0.01]">
                              {tag}
                           </span>
                        ))}
                     </div>
  
                     <div className="flex gap-8">
                        {project.liveUrl && (
                          <motion.a whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} href={project.liveUrl} target="_blank" className="flex items-center gap-3 text-sm font-normal uppercase tracking-widest text-black/40 hover:text-accent transition-colors">
                              <Globe size={25} />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} href={project.githubUrl} target="_blank" className="flex items-center gap-3 text-sm font-normal uppercase tracking-widest text-black/40 hover:text-accent transition-colors">
                              <Github size={25} />
                          </motion.a>
                        )}
                      </div>
                  </div>

                  <div className="lg:col-span-6 relative aspect-video overflow-hidden rounded-[2.5rem] border border-black/5 shadow-2xl shadow-black/[0.01] group/img bg-white">
                     <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full bg-black/[0.01] flex items-center justify-center relative backdrop-blur-3xl overflow-hidden"
                     >
                        {project.imageUrl ? (
                          <img 
                            src={project.imageUrl} 
                            alt={(project as any).alt || project.title}
                            className="w-full h-full object-cover"
                            loading={index < 2 ? "eager" : "lazy"}
                          />
                        ) : (
                          <Code2 size={100} className="text-black/[0.03] group-hover/img:text-accent/10 transition-colors duration-1000" />
                        )}
                        
                        {/* Interactive overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
                        
                        <div className="absolute bottom-10 left-10 p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-black/5 translate-y-20 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-700">
                           <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">PROJECT PREVIEW</p>
                        </div>
                     </motion.div>
                     
                     {project.liveUrl && (
                       <a 
                         href={project.liveUrl} 
                         target="_blank"
                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black text-white flex items-center justify-center scale-0 group-hover/img:scale-100 transition-transform duration-500 shadow-2xl shadow-black/20 z-20"
                       >
                          <ArrowUpRight size={32} strokeWidth={2} />
                       </a>
                     )}
                  </div>
               </div>
               
               {/* Decorative separator */}
               {index !== displayedProjects.length - 1 && (
                  <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
               )}
            </article>
          ))}
        </div>

        {limit && projects.length > limit && (
          <div className="mt-32 flex justify-center">
            <Link href="/projects">
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:bg-accent hover:gap-6 shadow-2xl shadow-black/10"
              >
                <span className="relative z-10 text-xs font-medium uppercase tracking-[0.3em]">View all Projects</span>
                <ArrowUpRight size={18} className="relative z-10" />
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.a>
            </Link>
          </div>
        )}
      </div>
      
    </section>
  );
}
