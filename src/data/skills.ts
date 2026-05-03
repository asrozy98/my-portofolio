import { Cpu, Database, Globe, Smartphone } from "lucide-react";

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface FeaturedSkill {
  name: string;
  icon: any;
  color: string;
}

export const skillsData: SkillGroup[] = [
  {
    category: "Front-end",
    items: ["Next.js", "React JS", "TypeScript", "Tailwind CSS", "Bootstrap", "Ant Design", "Material UI", "Shadcn UI"]
  },
  {
    category: "Back-end",
    items: ["Laravel", "Express.js", "NestJS", "MySQL", "PostgreSQL", "Redis", "Node.js", "Sails.js", "Go (Basic)", "Spring Boot (Basic)"]
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Podman", "Figma", "Postman", "Insomnia", "Visual Studio Code", "DBeaver", "LM Studio", "Open WebUI", "Antigravity"]
  }
];

export const featuredSkills: FeaturedSkill[] = [
  { name: "Next.js", icon: Globe, color: "text-blue-400" },
  { name: "React Native", icon: Smartphone, color: "text-emerald-400" },
  { name: "Laravel", icon: Cpu, color: "text-orange-400" },
  { name: "PostgreSQL", icon: Database, color: "text-indigo-400" }
];
