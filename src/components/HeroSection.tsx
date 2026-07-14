"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from "../../../data.json";

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="inline-block min-w-[20px]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-background">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid lg:grid-cols-2 gap-12 items-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-xs font-medium text-primary uppercase tracking-widest">
              Available for Hire
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6">
            Shaping Minds, <br />
            <span className="text-muted-foreground italic">Inspiring Futures.</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-medium text-foreground mb-8 h-8">
            I am a <span className="text-primary"><TypewriterText texts={data.titles} /></span>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
            {data.personal.professionalSummary.split('.')[0]}. Dedicated to creating engaging, supportive learning environments that foster holistic child development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </a>
            <a 
              href="#gallery" 
              className="inline-flex items-center justify-center px-8 py-4 border border-muted-foreground/30 text-foreground font-medium uppercase tracking-widest hover:border-foreground hover:bg-foreground/5 transition-all duration-300 rounded-full"
            >
              View Gallery
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="relative h-[500px] md:h-[650px] w-full mt-10 lg:mt-0"
        >
          {/* Portrait Container with Glowing Border */}
          <div className="absolute inset-0 bg-secondary rounded-[40px] md:rounded-tl-[120px] md:rounded-br-[120px] overflow-hidden shadow-[0_0_50px_-12px_rgba(183,147,91,0.3)] border border-primary/20 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent z-10 pointer-events-none group-hover:opacity-50 transition-opacity duration-700" />
            <Image
              src="/dursheh.jpeg"
              alt="Durreshahwar Khan"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              priority
            />
          </div>
          
          {/* Floating Stat 1 */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -bottom-6 md:bottom-10 -left-4 md:-left-10 bg-background/80 backdrop-blur-xl shadow-2xl p-6 border border-muted/50 rounded-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <span className="text-2xl font-serif">5+</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">Years of<br/>Experience</p>
            </div>
          </motion.div>

          {/* Floating Stat 2 */}
          <motion.div 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute -top-6 md:top-10 -right-4 md:-right-10 bg-background/80 backdrop-blur-xl shadow-2xl p-6 border border-muted/50 rounded-2xl hidden sm:block"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <span className="text-2xl font-serif">100%</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">Verified<br/>Credentials</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
