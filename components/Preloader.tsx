"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative overflow-hidden mb-4">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-normal tracking-tighter"

            >

              ANKUR <span className="text-accent italic">BAG</span>
            </motion.h2>
          </div>
          
          <div className="w-64 h-px bg-gray-border relative overflow-hidden">
             <motion.div 
               className="absolute inset-y-0 left-0 bg-accent"
               initial={{ width: 0 }}
               animate={{ width: `${counter}%` }}
             />
          </div>
          
          <div className="mt-4 font-mono text-xs tracking-widest text-gray-500 uppercase">
            Loading Experience — {counter}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
