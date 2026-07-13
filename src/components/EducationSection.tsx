"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Education (M.A Teacher Education)",
    institution: "Allama Iqbal Open University",
    location: "Islamabad",
    year: "2019 - 2022",
    details: "Grade A. Specialized in advanced pedagogical strategies and educational leadership."
  },
  {
    degree: "Bachelor of Education (B.Ed)",
    institution: "Allama Iqbal Open University",
    location: "Islamabad",
    year: "2011 - 2013",
    details: "Grade B (68%). Focused on primary education methodologies and curriculum development."
  },
  {
    degree: "Diploma of Early Childhood Educator",
    institution: "Oxford Institute Of Technical Training Centre RWP",
    year: "2009 - 2011",
    details: "Comprehensive training in early childhood development, psychology, and Montessori methods."
  },
  {
    degree: "B.A (Bachelor Of Arts)",
    institution: "University of Punjab",
    year: "2002 - 2004",
  }
];

const certifications = [
  "Certificate in Teacher training (Punjab Group of college)",
  "Certificate in Fluent English Preparatory Course (Kippling language centre)"
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Academic <span className="text-primary italic">Excellence.</span></h2>
          <p className="text-muted-foreground leading-relaxed">
            A strong foundation in educational theory and practice, continuously updated through lifelong learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 border border-muted/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <GraduationCap size={24} />
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{edu.year}</span>
              </div>
              
              <h3 className="text-xl font-serif text-foreground mb-2 leading-tight">{edu.degree}</h3>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{edu.institution}</p>
              
              {edu.details && (
                <p className="text-muted-foreground text-sm leading-relaxed border-t border-muted pt-4 mt-4">
                  {edu.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-foreground text-background p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-serif mb-2">Licenses &<br/><span className="text-primary italic">Certifications.</span></h3>
              <div className="h-px w-12 bg-primary/50 mt-4" />
            </div>
            <div className="md:w-2/3 flex flex-col gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Award className="text-primary shrink-0 mt-1" size={20} />
                  <p className="text-muted leading-relaxed font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
