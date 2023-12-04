"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const pathname = usePathname();
  const activeTab = " bg-green-800/20 text-center rounded-xl";
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <div className="flex items-center justify-center font-mono text-sm">
      <div
        className={
          "flex flex-row justify-between sm:w-2/3 w-3/4 lg:w-1/4 text-lg p-3" +
          (scrollY > 50
            ? "  bg-white dark:bg-green-600/70 backdrop-blur rounded-2xl"
            : "")
        }
      >
        <Link
          href="/"
          className={
            "flex flex-auto justify-around items-center w-16 p-1 px-5" +
            (pathname == "/" ? activeTab : "")
          }
        >
          <p>Work</p>
          <span className="ring-1 ring-slate-400 rounded-sm text-xs ml-1 py-1 px-2">
            /
          </span>
        </Link>
        <Link
          href="/about"
          className={
            "flex flex-auto justify-around items-center w-16" +
            (pathname == "/about" ? activeTab : "")
          }
        >
          <p>About</p>
        </Link>
        {/* <Link
          href="/contact"
          className={
            "flex flex-auto justify-around items-center w-16" +
            (pathname == "/contact" ? activeTab : "")
          }
        >
          <p>Contact</p>
        </Link> */}
      </div>
    </div>
  );
}
