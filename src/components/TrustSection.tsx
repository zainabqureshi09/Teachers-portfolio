"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, FileText, Globe } from "lucide-react";

const trustFactors = [
  {
    title: "Verified Credentials",
    description: "All educational degrees and diplomas are fully attested by the Higher Education Commission and relevant boards.",
    icon: ShieldCheck
  },
  {
    title: "International Experience",
    description: "Proven track record of teaching in international environments, including Al Dhiya International School in Oman.",
    icon: Globe
  },
  {
    title: "Official Recognition",
    description: "Documents attested by the Ministry of Foreign Affairs (MOFA) and IBCC, ensuring global validity.",
    icon: FileText
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 rounded-l-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Trust & <span className="text-primary italic">Verification.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              Transparency and authenticity are the cornerstones of my professional ethos. My qualifications are rigorously verified and globally recognized.
            </p>

            <div className="flex flex-col gap-8">
              {trustFactors.map((factor, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                    <factor.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-foreground mb-2">{factor.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative w-full aspect-square md:aspect-[4/3] bg-foreground p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-2xl"
          >
            <div className="absolute inset-0 border border-primary/20 m-4" />
            <div className="absolute inset-0 border border-primary/10 m-8" />
            
            <ShieldCheck size={80} className="text-primary mb-6" />
            <h3 className="text-3xl font-serif text-background mb-4">100% Verified</h3>
            <p className="text-muted text-sm tracking-widest uppercase mb-8 max-w-xs leading-relaxed">
              Documents authenticated by IBCC & MOFA Pakistan
            </p>
            
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle size={20} />
              <span className="text-sm font-medium tracking-wider uppercase">Authenticity Guaranteed</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
