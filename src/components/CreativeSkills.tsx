"use client";

import { motion, Variants } from "framer-motion";
import { Palette } from "lucide-react";
import data from "../data.json";

export default function CreativeSkills() {
  const { creativeSkills } = data;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="py-24 bg-background relative border-t border-muted/20 overflow-hidden">
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <Palette size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Creative <span className="text-primary italic">Expertise.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Beyond standard curriculum delivery, I specialize in transforming learning environments into vibrant, engaging, and interactive spaces that stimulate student curiosity and participation.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {creativeSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5
              }}
              className="bg-secondary/30 border border-muted/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-black/10 p-6 flex items-center justify-center text-center transition-colors duration-300 backdrop-blur-sm relative overflow-hidden group cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="font-medium text-foreground relative z-10">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
