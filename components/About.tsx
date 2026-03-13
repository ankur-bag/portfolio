"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12  bg-white relative">
      <div id="about-text-anchor" className="absolute top-16 left-40 lg:top-20 lg:left-48 w-8 h-8 pointer-events-none opacity-0" />
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[12vw] md:text-[8vw] font-normal tracking-tighter leading-[0.85] mb-8 text-black"
            >
              About <br /> <span className="text-accent font-accent lowercase tracking-normal italic opacity-100 font-normal">me</span> <br />
            </motion.h2>

            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-px bg-accent" />
              <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-gray-400">GenAI & Fullstack</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Based in Kolkata, I’m a developer working at the intersection of <span className="text-black">design</span>, <span className="text-black">engineering</span>, and <span className="text-black">intelligent systems</span>.
                Currently pursuing IT at RCCIIT, I build products across <span className="text-black">web platforms</span>, <span className="text-black">AI systems</span>, and <span className="text-black">automation</span>, turning ambitious ideas into real, usable software.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                My work spans <span className="text-black underline decoration-accent/40 font-medium">full-stack development</span>,
                <span className="text-black underline decoration-accent/40 font-medium"> AI integrations</span>, and
                <span className="text-black underline decoration-accent/40 font-medium"> scalable digital tools</span>,
                with a strong focus on crafting interfaces that feel as good as they function. I care about building products that are not just technically solid, but thoughtfully designed and genuinely useful.
              </motion.div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "B.Tech", value: "IT" },
                { label: "Location", value: "WB" },
                { label: "Focus", value: "Full Stack with GenAI" },
                { label: "Status", value: "Active" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, borderColor: "var(--color-accent)" }}
                  className="p-8 border border-black/5 rounded-[2rem] bg-black/[0.02] backdrop-blur-sm text-center flex flex-col items-center justify-center transition-all duration-500 group shadow-sm"
                >
                  <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-gray-400 mb-2 group-hover:text-accent transition-colors">{stat.label}</p>
                  <p className="text-2xl font-normal uppercase text-black group-hover:scale-110 transition-transform">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
