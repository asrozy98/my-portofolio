"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectData } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";

interface CardProjectProps extends Omit<ProjectData, "description"> {
  index: number;
  description?: string | { en: string; id: string };
  onImageClick?: (img: string) => void;
}

export default function CardProject({ onImageClick, ...item }: CardProjectProps) {
  const { language, t } = useLanguage();

  const descText = typeof item.description === 'string'
    ? item.description
    : item.description ? item.description[language] || item.description.en : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: item.index * 0.1 }}
      className="w-full h-full"
    >
      <Card
        className={`group relative h-[500px] lg:h-[550px] overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 shadow-2xl hover:shadow-primary/10`}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

        {/* Shimmer line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

        <CardContent className="p-0 h-full flex flex-col relative z-10">
          <div className="p-8 xl:p-10 flex flex-col justify-between h-[60%]">
            <div className="flex justify-between items-start">
              <div className="relative w-12 h-12 bg-white/80 backdrop-blur-md p-0.5 rounded-xl border border-border shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Image
                  className="h-full w-full object-contain"
                  src={item.icon}
                  width={48}
                  height={48}
                  alt={item.title}
                />
              </div>
              <div className="flex items-center gap-3">
                {item.url && (
                  <button
                    onClick={() => window.open(item.url, "_blank")}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {item.technology.split(" & ").map((tech, i) => (
                  <Badge key={i} variant="outline" className="border-primary/20 text-primary/80 bg-primary/5 px-3 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-tighter">
                    {tech}
                  </Badge>
                ))}
              </div>
              <h3 className="text-2xl lg:text-4xl font-black mb-3 group-hover:text-primary transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground/80 line-clamp-3 mb-2 leading-relaxed">
                {descText}
              </p>
            </div>
          </div>

          {/* Image Container with Reveal Effect */}
          <div
            className="h-[40%] relative overflow-hidden bg-muted/20 border-t border-border/20 cursor-zoom-in"
            onClick={() => onImageClick?.(item.image)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent z-10" />

            {/* View Preview Badge */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300 pointer-events-none">
              <div className="bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-black text-sm flex items-center gap-2 shadow-[0_10px_30px_rgba(var(--primary),0.4)]">
                <Search className="w-4 h-4" />
                {t.projects.viewPreview}
              </div>
            </div>

            {/* The Image - Slanting up from bottom crop */}
            <div className="relative w-[90%] h-[200%] mx-auto mt-10">
              <motion.div
                className="w-full h-full"
                initial={{ y: "0%" }}
                whileHover={{ y: "-40%" }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <Image
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_30px_60px_rgba(var(--primary),0.3)] transition-all duration-700"
                  src={item.image}
                  width={600}
                  height={800}
                  alt={item.title}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
