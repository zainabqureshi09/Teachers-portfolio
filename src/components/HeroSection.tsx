"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-sm md:text-base font-medium text-primary uppercase tracking-[0.3em] mb-4">
            Professional Educator
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6">
            Shaping Minds, <br />
            <span className="text-muted-foreground italic">Inspiring Futures.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Dedicated Primary School and Montessori Teacher with a proven track record of creating engaging, supportive learning environments that foster holistic child development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="#experience" 
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground font-medium uppercase tracking-widest hover:border-foreground transition-all duration-300"
            >
              View Experience
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="relative h-[600px] w-full hidden md:block"
        >
          <div className="absolute inset-0 bg-secondary rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent z-10 pointer-events-none" />
            <Image
              src="/dursheh.jpeg"
              alt="Durreshahwar Khan"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-background shadow-xl p-6 border border-muted"
          >
            <p className="text-4xl font-serif text-primary mb-1">5+</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Years of<br/>Experience</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
        <ArrowDown size={16} className="text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}
