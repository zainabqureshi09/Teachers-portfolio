"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

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
    <section id="experience" className="py-32 bg-secondary/10 relative border-t border-muted/20">
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary/50" />
                <span className="text-sm font-medium text-primary uppercase tracking-[0.2em]">Career</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-[1.1]">
                Professional <br/> <span className="text-primary italic">Journey.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                A track record of dedication, excellence, and impactful teaching methodologies across diverse educational environments internationally and locally.
              </p>
              
              <motion.a 
                href="/resume.pdf"
                download="Durreshahwar_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-2 text-foreground font-medium uppercase tracking-widest text-sm cursor-pointer group"
              >
                Download Resume 
                <ChevronRight size={16} className="text-primary group-hover:text-foreground transition-colors" />
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-8 lg:border-l lg:border-muted/50 lg:pl-12 relative w-full mt-12 lg:mt-0">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute -left-[53px] top-8 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:scale-150 transition-all duration-500 z-10" />
                
                <div className="bg-background/40 backdrop-blur-md p-8 md:p-10 hover:bg-background transition-all duration-500 border border-muted/30 hover:border-primary/30 rounded-2xl shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-2xl hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10 w-fit">
                      <Calendar size={14} /> 
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-6 font-medium tracking-wide">
                    <span className="text-foreground">{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mx-2" />
                    <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {exp.description}
                  </p>
                  
                  {exp.award && (
                    <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-primary/10 to-transparent text-foreground text-sm font-medium border-l-2 border-primary">
                      <Briefcase size={18} className="text-primary" />
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
