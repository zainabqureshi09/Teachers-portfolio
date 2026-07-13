"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Primary Teacher",
    company: "Al Dhiya International School",
    location: "Oman",
    startDate: "2019",
    endDate: "2020",
    description: "Served as a Montessori Class teacher for KG 2, Class teacher for grade 3, and Subject teacher for grades 4 and 5. Demonstrated adaptability and strong curriculum planning skills across multiple grade levels.",
    award: "Teacher Appreciation Award"
  },
  {
    title: "Primary Teacher",
    company: "The Educators School System (Sabzazar Campus)",
    location: "Lahore, Pakistan",
    startDate: "March 2010",
    endDate: "Feb 2013",
    description: "Recognized for taking keen interest in assigned tasks and carrying out duties with full zeal and zest. Praised for polite and humble nature, winning acclaim among students and peers."
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background relative border-t border-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="md:w-1/3 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Professional <br/> <span className="text-primary italic">Journey.</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A track record of dedication, excellence, and impactful teaching methodologies across diverse educational environments.
              </p>
              <div className="h-px w-24 bg-primary/30" />
            </motion.div>
          </div>

          <div className="md:w-2/3 flex flex-col gap-12 border-l border-muted/50 pl-8 md:pl-12 relative">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300 z-10" />
                
                <div className="bg-secondary/50 p-8 hover:bg-secondary transition-colors duration-500 border border-muted/20 hover:border-primary/20">
                  <div className="flex flex-wrap gap-4 items-center mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-primary" /> {exp.startDate} - {exp.endDate}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} className="text-primary" /> {exp.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-foreground mb-1">{exp.title}</h3>
                  <h4 className="text-base text-primary font-medium mb-4">{exp.company}</h4>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  {exp.award && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                      <Briefcase size={16} />
                      {exp.award}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
