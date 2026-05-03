"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import CardProject from "./cardProject";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectData } from "@/data/projects";

interface ProjectGridProps {
  projects: ProjectData[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        {projects.map((item, index) => (
          <CardProject 
            {...item} 
            index={index} 
            key={item.id} 
            description={item.description[language]}
            onImageClick={(img) => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-2xl p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10 shadow-2xl"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(var(--primary),0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project Preview"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
