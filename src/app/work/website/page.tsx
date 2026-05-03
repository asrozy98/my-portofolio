"use client";

import { motion } from "framer-motion";
import ProjectGrid from "@/app/components/projectGrid";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkWebsite() {
  const { t } = useLanguage();
  const websiteProjects = projectsData.filter((item) => item.category === "website");

  return (
    <main className="flex flex-col items-center min-h-screen w-full pt-32 pb-24 px-4 sm:px-12 md:px-24 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 w-full h-full bg-background -z-50" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] -z-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mb-20 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
          Web <span className="text-primary">Development</span>.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
          {t.projects.webDesc}
        </p>
      </motion.div>

      <ProjectGrid projects={websiteProjects} />
    </main>
  );
}
