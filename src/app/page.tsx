"use client";

import { useLanguage } from "@/context/LanguageContext";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { featuredSkills } from "@/data/skills";
import { motion } from "framer-motion";
import { Code2, Layers, Sparkles, Terminal, User } from "lucide-react";
import Link from "next/link";
import ProjectGrid from "./components/projectGrid";

export default function Home() {
  const { t } = useLanguage();
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 10);

  return (
    <main className="flex flex-col items-center min-h-screen w-full overflow-x-hidden relative">
      {/* Global Background Grid - Full Height */}
      <div className="fixed inset-0 w-full h-full bg-background -z-50" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] -z-40 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 flex w-full justify-center -z-10">
        <div className="w-[1200px] h-[800px] bg-primary/20 blur-[160px] rounded-full translate-y-[-40%] animate-spotlight opacity-0" />
      </div>
      <div className="absolute right-0 bottom-0 -z-50">
        <div className="w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full translate-y-[-40%] animate-spotlight opacity-0" />
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-12 md:px-24 overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mt-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mt-10 mb-8 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold shadow-[0_0_20px_rgba(var(--primary),0.2)] backdrop-blur-md"
          >
            <Terminal className="w-4 h-4 animate-pulse" />
            <span className="animate-pulse">{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-center tracking-tighter mb-8 leading-[1.05]"
          >
            {t.hero.hi} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_auto] animate-border-glow">Faisal</span>.<br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-muted-foreground/90"
            >
              {t.hero.build}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-muted-foreground/80 text-center max-w-3xl leading-relaxed font-medium"
          >
            {t.hero.desc}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-20"
        >
          <Link
            href="/work/website"
            className="relative group flex items-center gap-3 bg-primary text-primary-foreground px-12 py-6 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(var(--primary),0.3)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-15deg]" />
            <Code2 className="w-6 h-6" />
            {t.hero.viewWeb}
          </Link>
          <Link
            href="/work/mobile"
            className="relative group flex items-center gap-3 bg-primary/20 backdrop-blur-xl text-foreground hover:bg-muted/50 px-12 py-6 rounded-full font-black text-lg transition-all border border-border/50 hover:scale-105 active:scale-95 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-15deg]" />
            <Layers className="w-6 h-6" />
            {t.hero.viewMobile}
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="md:absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 mt-10"
        >
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </motion.div>

      </section>

      {/* About Section */}
      <section className="w-full py-32 px-4 sm:px-12 md:px-24 border-t border-border/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <User className="w-3 h-3" />
                {t.about.who}
              </div>
              <Link href="/about" className="group block">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                  {t.about.subtitle.split(" ").map((word, i) => (
                    <span key={i} className={word === "Siapa" || word === "Saya" || word === "Know" || word === "Me" ? "text-primary group-hover:text-foreground animate-pulse" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h2>
              </Link>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t.about.desc}
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <div className="text-6xl font-black text-primary animate-pulse">{experienceData.length - 1}+</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t.about.experience}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-6xl font-black text-primary animate-pulse">{projectsData.length - 1}+</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t.about.projectsDone}</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/40 transition-all shadow-2xl hover:shadow-primary/10 group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <skill.icon className={`w-24 h-24 ${skill.color}`} />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <skill.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-2xl tracking-tight">{skill.name}</h3>
                  <div className="w-full h-1.5 bg-muted mt-6 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                      className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-32 px-4 sm:px-12 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col md:flex-row items-end justify-between mb-16"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3" />
                {t.featured.badge}
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight animate-pulse">{t.featured.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl font-medium">{t.featured.desc}</p>
            </div>
          </motion.div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
    </main>
  );
}
