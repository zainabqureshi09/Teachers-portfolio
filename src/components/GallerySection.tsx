"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, PlayCircle } from "lucide-react";
import data from "../../../data.json";

export default function GallerySection() {
  const { galleryItems } = data;
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<{ id?: string|number; title?: string; category?: string; description?: string; image?: string; type?: string; } | null>(null);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  // Filter items based on category
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-background relative min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Portfolio <span className="text-primary italic">Showcase.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            A curated collection of educational displays, classroom decorations, and thematic projects designed to inspire and facilitate interactive learning.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full border ${
                  activeCategory === category
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-muted hover:border-foreground/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* CSS Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="relative group cursor-pointer break-inside-avoid overflow-hidden bg-secondary/20"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "video" ? (
                  <div className="relative w-full aspect-[9/16] bg-black">
                    <video 
                      src={item.image} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      muted loop playsInline 
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <PlayCircle size={48} className="text-white/70 drop-shadow-lg" />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full overflow-hidden">
                    {/* Using standard img for masonry dynamic height, or next/image with intrinsic aspect ratio. Since we don't know dimensions, object-cover with a fixed aspect ratio or just let it flow. */}
                    {/* To make true masonry with next/image without known height, we can use layout="responsive" but next/image v13+ prefers intrinsic sizes. For masonry, standard <img> is often easier if dimensions are unknown. */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-primary font-medium text-xs uppercase tracking-widest mb-2">{item.category}</p>
                    <h3 className="text-white font-serif text-xl mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-white/70 mt-4">
                      <ZoomIn size={16} />
                      <span className="text-xs uppercase tracking-wider">View Details</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 bg-white/10 p-2 rounded-full backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <X size={24} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-zinc-900 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Section */}
              <div className="w-full md:w-2/3 bg-black relative flex items-center justify-center min-h-[40vh] md:min-h-[70vh]">
                {selectedItem.type === "video" ? (
                  <video 
                    src={selectedItem.image} 
                    className="max-w-full max-h-[70vh] object-contain"
                    controls autoPlay playsInline
                  />
                ) : (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="max-w-full max-h-[90vh] md:max-h-[70vh] object-contain"
                  />
                )}
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-zinc-900 text-white">
                <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-3 block">
                  {selectedItem.category}
                </span>
                <h3 className="text-3xl font-serif mb-4 leading-tight">{selectedItem.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  {selectedItem.description}
                </p>
                
                <div className="mt-auto border-t border-white/10 pt-6">
                  <p className="text-zinc-500 text-sm">
                    Designed & executed by Durreshahwar Khan to enhance student engagement and classroom aesthetics.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
