"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Languages, TerminalSquare, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: t.nav.home, path: "/", icon: <TerminalSquare className="w-5 h-5" /> },
    { name: t.nav.about, path: "/about", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center font-sans text-sm w-full px-4"
    >
      <div
        className={`flex flex-row items-center gap-2 p-1.5 rounded-full border transition-all duration-300 ${
          scrollY > 20
            ? "bg-background/70 backdrop-blur-md border-border shadow-lg shadow-black/20"
            : "bg-background/40 backdrop-blur-sm border-transparent"
        }`}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}

        <div className="w-px h-6 bg-border mx-1" />
        
        <button
          onClick={() => setLanguage(language === "en" ? "id" : "en")}
          className="flex items-center gap-2 px-4 py-2 rounded-full font-medium hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300"
          title="Switch Language"
        >
          <Languages className="w-4 h-4" />
          <span className="uppercase">{language}</span>
        </button>
      </div>
    </motion.div>
  );
}
