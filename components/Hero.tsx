"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ArrowDownRight, Github, Mail, Globe, Linkedin } from "lucide-react";

import { SpinningText } from "@/components/ui/basic";
import BlurText from "@/components/ui/BlurText";
import TextType from "@/components/ui/TextType";

export default function Hero() {
  const [startAnim, setStartAnim] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleExit = () => setStartAnim(true);
    if ((window as any).preloaderFinished) {
      handleExit();
    }
    window.addEventListener('preloaderFinished', handleExit);
    return () => window.removeEventListener('preloaderFinished', handleExit);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        title1Ref.current,
        { y: 150, skewY: 7, opacity: 0 },
        { y: 0, skewY: 0, opacity: 1, duration: 1.8, delay: 0.6 }
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
            <TextType 
              text={["Full Stack Developer", "GenAI Builder", "UI/UX Enthusiast"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              className="text-[10px] font-medium uppercase tracking-[0.5em] text-gray-400 mt-15"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
            <div className="h-px flex-1 bg-black/5 hero-line-decorator origin-left" />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="leading-[0.8] tracking-tighter uppercase relative">
              <span className="overflow-visible block py-4 mb-2 px-2 -ml-2">
                <span ref={title1Ref} className="block text-[15vw] md:text-[11vw] font-normal text-black whitespace-nowrap">
                  Ankur <span className="text-accent italic font-accent lowercase tracking-normal inline-block pr-[0.1em]">Bag</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-6">
              {startAnim ? (
                <div className="flex flex-wrap gap-x-[0.3em] text-xl md:text-3xl text-gray-400 leading-tight font-medium max-w-2xl">
                  <BlurText text="Building" delay={50} className="inline-block" />
                  <BlurText text="intelligent interfaces" delay={50} className="text-black inline-block" />
                  <BlurText text="where" delay={50} className="inline-block" />
                  <BlurText text="great design" delay={50} className="text-accent italic font-accent inline-block" />
                  <BlurText text="meets" delay={50} className="inline-block" />
                  <BlurText text="GenAI-powered" delay={50} className="text-black italic inline-block" />
                  <BlurText text="engineering." delay={50} className="inline-block" />
                </div>
              ) : (
                <div className="h-20" /> /* Placeholder to maintain layout */
              )}
            </div>

            <div className="lg:col-span-2 flex justify-center items-center py-20 lg:py-0 hero-ui-stagger overflow-visible">
              <div id="hero-text-anchor" className="w-8 h-8 pointer-events-none opacity-0" />
            </div>


            <div className="lg:col-span-4 flex flex-col gap-10 items-start lg:items-end">
              <div className="flex flex-wrap gap-4 hero-ui-stagger">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-3 md:gap-4 text-sm font-medium bg-black text-white px-7 py-4 md:px-10 md:py-5 rounded-full hover:bg-accent transition-all duration-700 shadow-2xl shadow-black/10 overflow-hidden"
                >
                  <span className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-widest">Explore Works</span>
                  <ArrowDownRight size={16} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                </motion.a>

                <div className="flex gap-2">
                  <motion.a whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} href="https://github.com/ankur-bag" target="_blank" className="p-5 rounded-full border border-black/5 hover:border-accent transition-colors bg-white shadow-sm flex items-center justify-center text-black hover:text-accent"><Github size={18} /></motion.a>
                  <motion.a whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/ankur-bag-017664314/ " target="_blank" className="p-5 rounded-full border border-black/5 hover:border-accent transition-colors bg-white shadow-sm flex items-center justify-center text-black hover:text-accent"><Linkedin size={18} /></motion.a>
                  <motion.a whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} href="https://mail.google.com/mail/?view=cm&fs=1&to=ankurbag700@gmail.com" target="_blank" rel="noopener noreferrer" className="p-5 rounded-full border border-black/5 hover:border-accent transition-colors bg-white shadow-sm flex items-center justify-center text-black hover:text-accent"><Mail size={18} /></motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-black/5 grid grid-cols-2 md:grid-cols-4 gap-12 hero-ui-stagger">
          {[
            { label: "Available for", val: "Freelance & Roles", icon: <Globe size={10} className="text-accent" /> },
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
