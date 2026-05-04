"use client";

import ProjectGrid from "@/app/components/projectGrid";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";

export default function WorkMobile() {
  const { t } = useLanguage();
  const mobileProjects = projectsData.filter((item) => item.category === "mobile");

  return (
    <main className="flex flex-col items-center min-h-screen w-full pt-32 pb-24 px-4 sm:px-12 md:px-24 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 w-full h-full bg-background -z-50" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] -z-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="absolute left-0 flex justify-end -z-10">
        <div className="w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full translate-y-[-40%] animate-spotlight opacity-0" />
      </div>
      <div className="absolute bottom-0 right-0 w-full flex justify-end -z-10">
        <div className="w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full translate-y-[-40%] animate-spotlight opacity-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mb-20 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
          Mobile <span className="text-primary">Apps</span>.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
          {t.projects.mobileDesc}
        </p>
      </motion.div>

      <ProjectGrid projects={mobileProjects} />
    </main>
  );
}
