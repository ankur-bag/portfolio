"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ArrowDownRight, Github, Mail, Globe } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        title1Ref.current,
        { y: 150, skewY: 7, opacity: 0 },
        { y: 0, skewY: 0, opacity: 1, duration: 1.8, delay: 0.6 }
      )
      .fromTo(
        subTextRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1.2 },
        "-=1"
      )
      .fromTo(
        ".hero-ui-stagger",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
        "-=0.8"
      )
      .fromTo(
        ".hero-line-decorator",
        { scaleX: 0 },
        { scaleX: 1, duration: 2, ease: "expo.inOut" },
        "-=1.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-white"
    >
      {/* Premium Design Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-black/[0.005] skew-x-[-15deg] origin-top translate-x-1/4" />
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-12 opacity-[0.03]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-black h-full last:border-0" />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 py-20">
        <div className="flex flex-col gap-16 md:gap-24">
          
          <div className="hero-ui-stagger flex items-center gap-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-gray-400">GenAI Builder based in India</span>
            <div className="h-px flex-1 bg-black/5 hero-line-decorator origin-left" />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="leading-[0.8] tracking-tighter uppercase relative">
              <span className="overflow-visible block py-4 px-2 -ml-2">
                <span ref={title1Ref} className="block text-[15vw] md:text-[11vw] font-normal text-black whitespace-nowrap">
                  Ankur <span className="text-accent italic font-accent lowercase tracking-normal inline-block pr-[0.1em]">bag</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
               <p ref={subTextRef} className="text-xl md:text-3xl text-gray-400 leading-tight font-medium max-w-2xl">
                 Crafting <span className="text-black">hyper-modern</span> digital products where <span className="text-black italic">GenAI</span> and <span className="text-black italic">Fullstack</span> engineering meet technical excellence.
               </p>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-10 items-start lg:items-end">
               <div className="flex flex-wrap gap-4 hero-ui-stagger">
                  <a 
                    href="#projects" 
                    className="group relative flex items-center gap-4 text-sm font-medium bg-black text-white px-10 py-5 rounded-full hover:bg-accent transition-all duration-700 shadow-2xl shadow-black/10 overflow-hidden"
                  >
                    <span className="relative z-10 text-[10px] uppercase tracking-widest">Explore Works</span>
                    <ArrowDownRight className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                  </a>
                  
                  <div className="flex gap-2">
                    <a href="https://github.com/ankur-bag" target="_blank" className="p-5 rounded-full border border-black/5 hover:border-accent transition-colors bg-white shadow-sm flex items-center justify-center"><Github size={18} className="text-black"/></a>
                    <a href="mailto:ankurbag700@gmail.com" className="p-5 rounded-full border border-black/5 hover:border-accent transition-colors bg-white shadow-sm flex items-center justify-center"><Mail size={18} className="text-black"/></a>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-black/5 grid grid-cols-2 md:grid-cols-4 gap-12 hero-ui-stagger">
           {[
             { label: "Available for", val: "Freelance & Roles", icon: <Globe size={10} className="text-accent"/> },
             { label: "Specialization", val: "GenAI & Fullstack" },
             { label: "Contact", val: "Kolkata, India" },
             { label: "Opportunities", val: "Open for Internships" },
           ].map((item, i) => (
             <div key={i} className="flex flex-col gap-2">
               <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                 {item.icon} {item.label}
               </span>
               <span className="text-xs font-normal uppercase tracking-tight text-black">{item.val}</span>
             </div>
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
