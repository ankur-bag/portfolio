"use client";

import { useEffect, useState, useRef } from "react";
import { motion, animate, useMotionValue, useTransform, useScroll } from "framer-motion";
import { SpinningText } from "./ui/basic";

export default function TravellingText() {
  const [isMobile, setIsMobile] = useState(false);
  const [heroPos, setHeroPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const currentAnchorX = useMotionValue(0);
  const currentAnchorY = useMotionValue(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateAnchors = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      const heroAnchor = document.getElementById("hero-text-anchor");
      const aboutAnchor = document.getElementById("about-text-anchor");
      
      if (heroAnchor && aboutAnchor) {
        const hRect = heroAnchor.getBoundingClientRect();
        const aRect = aboutAnchor.getBoundingClientRect();
        
        const hX = Math.round(hRect.left + window.scrollX + hRect.width / 1.5);
        const hY = Math.round(hRect.top + window.scrollY + hRect.height / 1.5);
        const aX = Math.round(aRect.left + window.scrollX + aRect.width / 1.5);
        const aY = Math.round(aRect.top + window.scrollY + aRect.height / 1.5);

        setHeroPos({ x: hX, y: hY });
        setTargetPos({ x: aX, y: aY });
        
        // On mobile, always stay at hero position
        if (mobile) {
           currentAnchorX.set(hX);
           currentAnchorY.set(hY);
        } else {
           if (!hasAnimated) {
             currentAnchorX.set(hX);
             currentAnchorY.set(hY);
           } else {
             currentAnchorX.set(aX);
             currentAnchorY.set(aY);
           }
        }
        setIsReady(true);
      }
    };

    updateAnchors();
    const timer = setTimeout(updateAnchors, 800); // Wait for page to settle

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.innerWidth < 768) return; // Disable travel on mobile

        const entry = entries[0];
        if (entry.isIntersecting) {
          triggerMove(true);
        } else if (entry.boundingClientRect.top > 0) {
          triggerMove(false);
        }
      },
      { threshold: 0.1 }
    );

    const aboutAnchor = document.getElementById("about-text-anchor");
    if (aboutAnchor) {
      observer.observe(aboutAnchor);
    }

    const triggerMove = (toTarget: boolean) => {
      if (window.innerWidth < 768) return;

      const targetAnchor = document.getElementById(toTarget ? "about-text-anchor" : "hero-text-anchor");
      if (targetAnchor) {
        const tRect = targetAnchor.getBoundingClientRect();
        const tX = tRect.left + window.scrollX + tRect.width / 2;
        const tY = tRect.top + window.scrollY + tRect.height / 2;
        
        setHasAnimated(toTarget);
        animate(currentAnchorX, tX, { duration: 1.2, ease: [0.16, 1, 0.3, 1] });
        animate(currentAnchorY, tY, { duration: 1.2, ease: [0.16, 1, 0.3, 1] });
      }
    };

    window.addEventListener("resize", updateAnchors);
    return () => {
      window.removeEventListener("resize", updateAnchors);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [hasAnimated, currentAnchorX, currentAnchorY]);

  const animatedX = currentAnchorX; 
  const animatedY = currentAnchorY;

  if (!isReady) return null;

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        x: animatedX,
        y: animatedY,
        zIndex: 100,
        pointerEvents: "none",
        translateX: "-50%",
        translateY: "-50%",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <SpinningText
        text="DESIGN • ENGINEERING • AI • AUTOMATION • BUILDING DIGITAL PRODUCTS • REPEAT •"
        radius={isMobile ? 26 : 34}
        fontSize={isMobile ? "5px" : "6.5px"}
        textClassName="tracking-[0.15em] font-semibold fill-gray-500"
        speed={25}
        className={isMobile ? "w-[240px] h-[240px]" : "w-[320px] h-[320px]"}
      />
    </motion.div>
  );
}
