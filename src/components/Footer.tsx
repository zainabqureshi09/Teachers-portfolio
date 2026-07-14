"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Let&apos;s <span className="text-primary italic">Connect.</span></h2>
            <p className="text-muted max-w-md leading-relaxed mb-10">
              To work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:khandurreshahwar8@gmail.com" className="flex items-center gap-4 text-muted hover:text-primary transition-colors group">
                <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium tracking-wide">khandurreshahwar8@gmail.com</span>
              </a>
              
              <a href="tel:03423930992" className="flex items-center gap-4 text-muted hover:text-primary transition-colors group">
                <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="font-medium tracking-wide">0342-3930992 / 0319-1595102</span>
              </a>
              
              <div className="flex items-center gap-4 text-muted">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <MapPin size={20} />
                </div>
                <span className="font-medium tracking-wide max-w-[250px]">
                  House no 89, B, Marghazar Officers Colony Multan Road, Lahore, Pakistan
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background/5 p-8 border border-muted/10"
          >
            <h3 className="text-2xl font-serif mb-8">Professional Inquiry</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-muted/30 pb-3 focus:outline-none focus:border-primary transition-colors text-background placeholder:text-muted/50"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-muted/30 pb-3 focus:outline-none focus:border-primary transition-colors text-background placeholder:text-muted/50"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-muted/30 pb-3 focus:outline-none focus:border-primary transition-colors text-background placeholder:text-muted/50 resize-none"
                />
              </div>
              <button className="self-start mt-4 px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
        
        <div className="border-t border-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted/60 text-sm">
            © {new Date().getFullYear()} Durreshahwar Khan. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted/60 text-sm uppercase tracking-widest font-medium">Available for Opportunities</span>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    </footer>
  );
}
