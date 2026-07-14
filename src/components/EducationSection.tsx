"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, ChevronRight } from "lucide-react";

const education = [
  {
    degree: "Master of Education (M.A Teacher Education)",
    institution: "Allama Iqbal Open University",
    location: "Islamabad",
    year: "2019 - 2022",
    details: "Grade A. Specialized in advanced pedagogical strategies and educational leadership.",
    color: "from-[#B7935B]/20 to-transparent"
  },
  {
    degree: "Bachelor of Education (B.Ed)",
    institution: "Allama Iqbal Open University",
    location: "Islamabad",
    year: "2011 - 2013",
    details: "Grade B (68%). Focused on primary education methodologies and curriculum development.",
    color: "from-blue-500/10 to-transparent"
  },
  {
    degree: "Diploma of Early Childhood Educator",
    institution: "Oxford Institute Of Technical Training Centre RWP",
    year: "2009 - 2011",
    details: "Comprehensive training in early childhood development, psychology, and Montessori methods.",
    color: "from-green-500/10 to-transparent"
  },
  {
    degree: "B.A (Bachelor Of Arts)",
    institution: "University of Punjab",
    year: "2002 - 2004",
    color: "from-purple-500/10 to-transparent"
  }
];

const certifications = [
  {
    title: "Certificate in Teacher training",
    issuer: "Punjab Group of college",
    date: "Certified Educator"
  },
  {
    title: "Fluent English Preparatory Course",
    issuer: "Kippling language centre",
    date: "Language Proficiency"
  }
];

export default function EducationSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="education" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-[20%] w-[50vw] h-[50vw] bg-secondary/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-sm font-medium text-primary uppercase tracking-[0.2em]">Academics</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-[1.1]">
              Academic <span className="text-primary italic">Excellence.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A strong foundation in educational theory and practice, continuously updated through lifelong learning.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-secondary/10 p-8 md:p-10 border border-muted/50 hover:border-primary/30 transition-all duration-500 rounded-2xl group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-background shadow-sm rounded-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    <GraduationCap size={28} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground bg-background px-3 py-1 rounded-full shadow-sm">{edu.year}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-foreground mb-3 leading-tight">{edu.degree}</h3>
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">{edu.institution}</p>
                
                {edu.details && (
                  <p className="text-muted-foreground leading-relaxed mt-auto border-t border-muted/30 pt-6">
                    {edu.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flip Cards for Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-3xl font-serif">Licenses & Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="relative h-[250px] w-full [perspective:1000px] cursor-pointer group"
                onMouseEnter={() => setFlippedIndex(idx)}
                onMouseLeave={() => setFlippedIndex(null)}
              >
                <motion.div
                  className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 ease-out"
                  animate={{ rotateY: flippedIndex === idx ? 180 : 0 }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-foreground text-background p-8 rounded-2xl flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                    <Award className="text-primary mb-6" size={40} />
                    <h4 className="text-2xl font-serif mb-2">{cert.title}</h4>
                    <p className="text-muted font-medium text-sm uppercase tracking-widest flex items-center gap-2">
                      Hover to View <ChevronRight size={14} />
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-primary text-primary-foreground p-8 rounded-2xl flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h4 className="text-xl font-bold uppercase tracking-widest mb-4">{cert.issuer}</h4>
                    <div className="h-px w-12 bg-primary-foreground/30 mb-4" />
                    <p className="text-primary-foreground/90 font-medium text-lg mb-6">{cert.date}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full text-xs font-bold uppercase tracking-widest">
                      <ExternalLink size={14} /> Verified
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
