export interface ExperienceData {
  id: number;
  company: string;
  role: string;
  period: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  logo?: string;
  isCurrent?: boolean;
}

export const experienceData: ExperienceData[] = [
  {
    id: 1,
    company: "PT Kereta Api Indonesia (Persero)",
    role: "Software Developer",
    period: {
      en: "Mar 2026 — Present",
      id: "Mar 2026 — Sekarang"
    },
    description: {
      en: "Working on Sipoka project, focusing on refactoring and migration to microservices architecture.",
      id: "Mengerjakan proyek Sipoka, berfokus pada refactoring dan migrasi ke arsitektur microservices."
    },
    isCurrent: true
  },
  {
    id: 2,
    company: "PT. Infosys Solusi Terpadu",
    role: "Front End Web Developer",
    period: {
      en: "Feb 2025 — Feb 2026",
      id: "Feb 2025 — Feb 2026"
    },
    description: {
      en: "Developed CEISA Micro Front End 4.0 for Directorate General of Customs and Excise using Next.js and Ant Design.",
      id: "Mengembangkan CEISA Micro Front End 4.0 untuk Direktorat Jenderal Bea dan Cukai menggunakan Next.js dan Ant Design."
    }
  },
  {
    id: 3,
    company: "NashTa Group",
    role: "Front End Web Developer",
    period: {
      en: "Sep 2024 — Jan 2025",
      id: "Sep 2024 — Jan 2025"
    },
    description: {
      en: "Built SSO INSW system for National Single Window Institution using Next.js and Tailwind CSS.",
      id: "Membangun sistem SSO INSW untuk Lembaga National Single Window menggunakan Next.js dan Tailwind CSS."
    }
  },
  {
    id: 4,
    company: "Padepokan Tujuh Sembilan",
    role: "Software Developer",
    period: {
      en: "Apr 2022 — Present",
      id: "Apr 2022 — Sekarang"
    },
    description: {
      en: "Handled various enterprise projects for clients like Telkom Indonesia (ACI & UMeetMe) and Nestlé Indonesia (MOR).",
      id: "Menangani berbagai proyek enterprise untuk klien seperti Telkom Indonesia (ACI & UMeetMe) dan Nestlé Indonesia (MOR)."
    },
    isCurrent: true
  },
  {
    id: 5,
    company: "PT. Akur Pratama (YOGYA GROUP)",
    role: "Full Stack & Mobile Developer",
    period: {
      en: "Mar 2023 — Mar 2024",
      id: "Mar 2023 — Mar 2024"
    },
    description: {
      en: "Developed and maintained YOMitra, YOCommerce, and Yogya Easy Service (YES) applications using Laravel and React Native.",
      id: "Mengembangkan dan memelihara aplikasi YOMitra, YOCommerce, dan Yogya Easy Service (YES) menggunakan Laravel dan React Native."
    }
  },
  {
    id: 6,
    company: "DISKOMINFOTIK Kota Blitar",
    role: "Full Stack Developer (Freelance)",
    period: {
      en: "Nov 2021 — Dec 2021",
      id: "Nov 2021 — Des 2021"
    },
    description: {
      en: "Managed public information platform for Blitar city residents.",
      id: "Mengelola platform informasi publik untuk warga Kota Blitar."
    }
  },
  {
    id: 7,
    company: "PT Nukupay Teknologi Indonesia",
    role: "Full Stack Developer",
    period: {
      en: "Oct 2019 — Apr 2021",
      id: "Okt 2019 — Apr 2021"
    },
    description: {
      en: "Focused on building digital payment solutions and admin panels.",
      id: "Berfokus pada pembangunan solusi pembayaran digital dan panel admin."
    }
  }
];
