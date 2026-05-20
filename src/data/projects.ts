export interface ProjectData {
  id: number;
  title: string;
  description: {
    en: string;
    id: string;
  };
  icon: string;
  image: string;
  technology: string;
  url: string;
  category: "website" | "mobile";
  featured?: boolean;
}

export const projectsData: ProjectData[] = [
  // 1. Fish Catalog (Latest Project)
  {
    id: 1,
    title: "Fish Catalog",
    description: {
      en: "Fish farming management and sales platform designed to help fish farmers manage pond facilities, monitor breeding processes, and conduct sales transactions through an integrated Point of Sale (POS) system. The platform also serves as a public portal for buyers to explore available fish catalog in real-time.",
      id: "Platform manajemen budidaya dan penjualan ikan yang dirancang untuk membantu peternak ikan mengelola fasilitas kolam, memantau proses breeding, dan melakukan transaksi penjualan melalui sistem POS (Point of Sale) yang terintegrasi. Platform ini juga berfungsi sebagai portal publik bagi pembeli untuk mengeksplorasi katalog ikan yang tersedia secara real-time.",
    },
    icon: "/images/asrozy-fish.svg",
    image: "/images/website/fish-catalog.png",
    technology: "Next JS & shadcn UI & Framer Motion & Supabase",
    url: "https://fish.asrozy.my.id",
    category: "website",
    featured: true,
  },
  // 2. PT KAI (2026 - Present)
  {
    id: 2,
    title: "Rolink",
    description: {
      en: "System for monitoring and managing railway infrastructure and assets at PT KAI.",
      id: "Sistem untuk monitoring dan pengelolaan infrastruktur serta aset perkeretaapian di PT KAI.",
    },
    icon: "/images/website/kai.png",
    image: "/images/website/rolink.png",
    technology: "Next JS & Microservices",
    url: "",
    category: "website",
    featured: true,
  },
  // 3. PT Infosys Solusi Terpadu (2025 - 2026)
  {
    id: 3,
    title: "Micro Frontend CEISA 4.0",
    description: {
      en: "Customs and excise information system using micro frontend architecture for Directorate General of Customs and Excise.",
      id: "Sistem informasi bea dan cukai menggunakan arsitektur micro frontend untuk Direktorat Jenderal Bea dan Cukai.",
    },
    icon: "/images/website/beacukai.png",
    image: "/images/website/ceisa.png",
    technology: "React JS & Ant Design & Bootstrap",
    url: "",
    category: "website",
    featured: true,
  },
  // 4. NashTa Group (2024 - 2025)
  {
    id: 4,
    title: "INSW Single Sign On (SSO)",
    description: {
      en: "A robust SSO system with OIDC standard, MFA, and Passkey for secure authentication.",
      id: "Sistem SSO yang tangguh dengan standar OIDC, MFA, dan Passkey untuk autentikasi yang aman.",
    },
    icon: "/images/website/insw.jpg",
    image: "/images/website/lnsw.png",
    technology: "Next JS & Express JS & Tailwind CSS",
    url: "https://access.insw.go.id",
    category: "website",
    featured: true,
  },
  // 5. Padepokan 79 - Client Projects (2022 - Present)
  {
    id: 5,
    title: "TMS (Ticket Management System)",
    description: {
      en: "Centralized issue management system integrating automated workflows and priority settings.",
      id: "Sistem manajemen masalah terpusat yang mengintegrasikan alur kerja otomatis dan pengaturan prioritas.",
    },
    icon: "/images/79.png",
    image: "/images/website.png",
    technology: "Next JS & Material UI",
    url: "",
    category: "website",
    featured: false,
  },
  {
    id: 6,
    title: "ACI (Assessment Center Indonesia)",
    description: {
      en: "Enterprise platform for talent assessment and management for Telkom Indonesia.",
      id: "Platform enterprise untuk asesmen dan manajemen talenta untuk Telkom Indonesia.",
    },
    icon: "/images/website/telkom.png",
    image: "/images/website/aci.png",
    technology: "React JS & Java Spring Boot",
    url: "https://aci.telkom.co.id",
    category: "website",
    featured: false,
  },
  {
    id: 7,
    title: "MOR (Market Operations Reporting)",
    description: {
      en: "Reporting system for market operations and product distribution at Nestlé Indonesia.",
      id: "Sistem pelaporan untuk operasional pasar dan distribusi produk di Nestlé Indonesia.",
    },
    icon: "/images/website/nestle.png",
    image: "/images/website/mor.png",
    technology: "React JS & Laravel",
    url: "",
    category: "website",
    featured: false,
  },
  {
    id: 8,
    title: "UMeetMe",
    description: {
      en: "Video conferencing and virtual meeting platform for Telkom Indonesia.",
      id: "Platform konferensi video dan pertemuan virtual untuk Telkom Indonesia.",
    },
    icon: "/images/website/telkom.png",
    image: "/images/website/umeetme.png",
    technology: "React JS",
    url: "https://www.umeetme.id",
    category: "website",
    featured: false,
  },
  // 6. Yogya Group (2023 - 2024)
  {
    id: 9,
    title: "YES Mobile",
    description: {
      en: "Mobile Webview app for digital payments and products at Yogya.",
      id: "Aplikasi Mobile Webview untuk pembayaran dan produk digital di Yogya.",
    },
    icon: "/images/mobile/yes.png",
    image: "/images/mobile/yes-mobile.png",
    technology: "React Native & Laravel",
    url: "",
    category: "mobile",
    featured: true,
  },
  {
    id: 10,
    title: "YOCommerce",
    description: {
      en: "Mobile shopping application for Yogya customers.",
      id: "Aplikasi belanja mobile untuk pelanggan Yogya.",
    },
    icon: "/images/mobile/yocommerce.png",
    image: "/images/mobile/yocommerce-mobile.png",
    technology: "React Native & Laravel",
    url: "",
    category: "mobile",
    featured: false,
  },
  {
    id: 11,
    title: "YOMitra",
    description: {
      en: "Mobile application for Yogya partners to restock supplies online.",
      id: "Aplikasi mobile bagi mitra Yogya untuk menyetok ulang barang secara online.",
    },
    icon: "/images/mobile/yomitra.png",
    image: "/images/mobile/yomitra-mobile.png",
    technology: "React Native & Laravel",
    url: "",
    category: "mobile",
    featured: false,
  },
  {
    id: 12,
    title: "CMS YES Mobile",
    description: {
      en: "CMS to manage Yogya Easy Service products.",
      id: "CMS untuk mengelola produk Yogya Easy Service.",
    },
    icon: "/images/mobile/yes.png",
    image: "/images/website/yes.png",
    technology: "Laravel",
    url: "",
    category: "website",
    featured: false,
  },
  {
    id: 13,
    title: "CMS YOCommerce",
    description: {
      en: "CMS to manage YOCommerce products for Yogya Group.",
      id: "CMS untuk mengelola produk YOCommerce untuk Yogya Group.",
    },
    icon: "/images/mobile/yocommerce.png",
    image: "/images/website/yocommerce.png",
    technology: "Laravel",
    url: "",
    category: "website",
    featured: false,
  },
  // 7. Miscellaneous / Older
  {
    id: 14,
    title: "Working Report 79",
    description: {
      en: "Mobile App for Daily Work Report at Padepokan 79.",
      id: "Aplikasi Mobile untuk Laporan Kerja Harian di Padepokan 79.",
    },
    icon: "/images/79.png",
    image: "/images/mobile/wr.png",
    technology: "React Native",
    url: "",
    category: "mobile",
    featured: false,
  },
  {
    id: 15,
    title: "My Assistium",
    description: {
      en: "E-learning application for Telkom Employees.",
      id: "Aplikasi E-learning untuk Karyawan Telkom.",
    },
    icon: "/images/website/telkom.png",
    image: "/images/website/my-assistium.png",
    technology: "React JS",
    url: "",
    category: "website",
    featured: false,
  },
  {
    id: 16,
    title: "Nukupay",
    description: {
      en: "Landing Page & Admin Panel for Nukupay digital products.",
      id: "Landing Page & Admin Panel untuk produk digital Nukupay.",
    },
    icon: "/images/website/nukupay.png",
    image: "/images/website/nukupay-web.png",
    technology: "Laravel & Bootstrap",
    url: "http://nukupaycompany.com",
    category: "website",
    featured: true,
  },
  {
    id: 17,
    title: "Zuwinda",
    description: {
      en: "Landing Page & Admin Panel for Zuwinda digital products.",
      id: "Landing Page & Admin Panel untuk produk digital Zuwinda.",
    },
    icon: "/images/website/nukupay.png",
    image: "/images/website/zuwinda.png",
    technology: "Laravel & Bootstrap",
    url: "http://zuwinda.com",
    category: "website",
    featured: true,
  },
];
