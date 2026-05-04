"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Code2, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative w-full border-t border-border bg-background/50 backdrop-blur-sm mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-12">
        <div className="md:flex md:justify-between items-start">
          <div className="mb-8 md:mb-0 max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="p-2 bg-primary/20 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight animate-pulse">M. Faisal Asrozy</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t.footer.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
                {t.footer.connect}
              </h2>
              <ul className="text-muted-foreground font-medium space-y-4 animate-pulse">
                <li>
                  <Link href="https://github.com/asrozy98" className="hover:text-primary transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> Github
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/mfaisalasrozy" className="hover:text-primary transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/asrozy98" className="hover:text-primary transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
                {t.footer.contact}
              </h2>
              <ul className="text-muted-foreground font-medium space-y-4 animate-pulse">
                <li>
                  <Link href="mailto:faisalasrozy@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" /> {t.footer.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Muhammad Faisal Asrozy. {t.footer.rights}</span>
          <span className="mt-4 sm:mt-0 flex items-center gap-1">
            {t.footer.builtWith} <span className="text-primary font-bold">Next.js</span> & <span className="text-primary font-bold">Tailwind</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
