"use client";

import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FallingSkill {
  id: string;
  skill: string;
  delay: number;
  duration: number;
  xPosition: number;
  size: string;
  opacity: number;
}

export default function SkillsBackground() {
  const [fallingSkills, setFallingSkills] = useState<FallingSkill[]>([]);

  useEffect(() => {
    // Flatten all skills from different categories
    const allSkills = skillsData.flatMap((group) => group.items);

    const generateSkill = (i: number): FallingSkill => {
      const randomSkill =
        allSkills[Math.floor(Math.random() * allSkills.length)];
      const delay = Math.random() * 5;
      const duration = 15 + Math.random() * 10;
      const xPosition = Math.random() * 100;
      const sizes = ["text-xs", "text-sm", "text-base"];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const opacity = 0.1 + Math.random() * 0.2;

      return {
        id: `skill-${i}-${Date.now()}`,
        skill: randomSkill,
        delay,
        duration,
        xPosition,
        size,
        opacity,
      };
    };

    // Function to add new skills periodically
    const interval = setInterval(() => {
      setFallingSkills((prev) => {
        const newSkills = Array.from({
          length: Math.floor(Math.random() * 5) + 1,
        }).map((_, i) => generateSkill(i + prev.length));
        return [...prev, ...newSkills];
      });
    }, 3000); // Add new skills every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-30">
      {fallingSkills.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.size} font-semibold text-primary whitespace-nowrap`}
          style={{
            left: `${item.xPosition}%`,
          }}
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
            opacity: [0, item.opacity, item.opacity, 0],
            x: [item.xPosition, item.xPosition + Math.random() * 50 - 25], // Add horizontal drift
            rotate: [0, 360], // Continuous rotation
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 5,
            opacity: {
              duration: item.duration,
              times: [0, 0.1, 0.9, 1],
            },
            rotate: {
              duration: item.duration,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          {item.skill}
        </motion.div>
      ))}
    </div>
  );
}
