"use client";

import { useLanguage } from "@/context/LanguageContext";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";
import { skillsData } from "@/data/skills";
import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, MapPin, School, User } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { t, language } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="flex flex-col items-center min-h-screen w-full relative overflow-x-hidden">
      {/* Background & Spotlight */}
      <div className="fixed inset-0 w-full h-full bg-background -z-50" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] -z-40 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_70%,transparent_100%)]" />

      <section className="relative w-full py-32 px-4 sm:px-12 md:px-24 flex flex-col items-center z-10">
        <div className="absolute right-0 flex justify-end -z-10">
          <div className="w-[800px] h-[800px] bg-primary/20 blur-[160px] rounded-full translate-y-[-40%] animate-spotlight opacity-0" />
        </div>
        <div className="absolute left-0 bottom-0 w-full flex justify-center -z-10">
          <div className="w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full translate-y-[-40%] animate-spotlight opacity-0" />
        </div>

        <div className="max-w-6xl w-full mt-10">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-16 items-center mb-32"
          >
            <motion.div
              whileHover={{ scale: 1.55, rotate: -10 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-4 border-primary/20 p-2 bg-background/50 backdrop-blur-md shadow-[0_0_50px_rgba(var(--primary),0.15)] group"
            >
              <div className="absolute inset-0 bg-primary/10 group-hover:opacity-0 transition-opacity z-10" />
              <Image
                src="/images/profile.jpg"
                alt="Faisal Asrozy"
                fill
                className="object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />
            </motion.div>

            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-8 border border-primary/20 shadow-lg shadow-primary/5"
              >
                <User className="w-4 h-4" />
                {t.about.who}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none"
              >
                Muhammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 animate-border-glow bg-[length:200%_auto]">Faisal</span> Asrozy
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-8 text-muted-foreground/90 mb-10 font-bold"
              >
                <span className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/5 animate-pulse"><Briefcase className="w-5 h-5 text-primary" /> {t.about.role}</span>
                <span className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/5 animate-pulse"><MapPin className="w-5 h-5 text-primary" /> {t.about.location}</span>
                <span className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/5 animate-pulse"><Calendar className="w-5 h-5 text-primary" /> {t.about.yearsExp}</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium"
              >
                {t.about.desc}
              </motion.p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left Column: Skills & Education */}
            <div className="space-y-32">
              {/* Skills */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 flex items-center gap-5 animate-pulse">
                  <div className="w-3 h-12 bg-primary rounded-full shadow-[0_0_20px_rgba(var(--primary),0.6)]" />
                  {t.about.skills}
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {skillsData.map((skillGroup, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -5, borderColor: "rgba(var(--primary), 0.3)" }}
                      className="p-8 rounded-[2rem] bg-card/30 border border-border/50 backdrop-blur-md transition-all duration-300 relative group overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <ChevronRight className="w-16 h-16 text-primary rotate-[-45deg]" />
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill, j) => (
                          <span key={j} className="px-4 py-1.5 rounded-xl bg-primary/5 border border-primary/10 text-xs font-black hover:bg-primary/20 hover:border-primary/30 transition-all cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education (Thematic Timeline style) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 flex items-center gap-5 animate-pulse">
                  <div className="w-3 h-12 bg-primary rounded-full shadow-[0_0_20px_rgba(var(--primary),0.6)]" />
                  {t.about.education}
                </motion.h2>
                <div className="relative pl-12 space-y-16 border-l-2 border-primary/10 ml-6">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      variants={itemVariants}
                      className="relative group"
                    >
                      <motion.div
                        whileInView={{ scale: [0.8, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="absolute -left-[61px] top-1.5 w-6 h-6 rounded-full border-4 border-background z-10 transition-all duration-500 group-hover:scale-125 bg-primary/50 group-hover:bg-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                      />

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <School className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
                          <h3 className="font-black text-2xl lg:text-3xl tracking-tight leading-tight group-hover:text-primary transition-colors">{edu.school}</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <p className="text-lg font-bold text-foreground/90">{edu.degree}</p>
                          <div className="hidden sm:block h-1 w-1 rounded-full bg-muted-foreground/30" />
                          <p className="text-sm text-primary font-black uppercase tracking-widest">{edu.period}</p>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors">
                          {edu.description?.[language]}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 flex items-center gap-5 animate-pulse">
                <div className="w-3 h-12 bg-primary rounded-full shadow-[0_0_20px_rgba(var(--primary),0.6)]" />
                {t.about.experience}
              </motion.h2>
              <div className="relative pl-12 space-y-16 border-l-2 border-primary/10 ml-6">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative group"
                  >
                    <motion.div
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`absolute -left-[61px] top-1.5 w-6 h-6 rounded-full border-4 border-background z-10 transition-all duration-500 group-hover:scale-125 ${exp.isCurrent
                        ? "bg-primary shadow-[0_0_20px_rgba(var(--primary),0.6)]"
                        : "bg-muted group-hover:bg-primary/50"
                        }`}
                    />
                    <div className="absolute -left-[61px] top-1.5 w-6 h-6 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100" />

                    <div className="space-y-3">
                      <h3 className="font-black text-3xl tracking-tight leading-tight group-hover:text-primary transition-colors">{exp.company}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <p className="text-lg font-bold text-foreground/90">{exp.role}</p>
                        <div className="hidden sm:block h-1 w-1 rounded-full bg-muted-foreground/30" />
                        <p className="text-sm text-primary font-black uppercase tracking-widest">{exp.period[language]}</p>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {exp.description[language]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div >
      </section >
    </main >
  );
}
