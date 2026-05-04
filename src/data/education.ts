export interface EducationData {
  id: number;
  school: string;
  degree: string;
  period: string;
  description?: {
    en: string;
    id: string;
  };
}

export const educationData: EducationData[] = [
  {
    id: 1,
    school: "Universitas Islam Balitar",
    degree: "S1 Teknik Informatika (S.Kom)",
    period: "2017 — 2021",
    description: {
      en: "Graduated with a Bachelor of Computer Science, focusing on Software Engineering and Application Development.",
      id: "Lulus dengan gelar Sarjana Komputer, berfokus pada Rekayasa Perangkat Lunak dan Pengembangan Aplikasi."
    }
  },
  {
    id: 2,
    school: "SMK Negeri 1 Nglegok",
    degree: "Teknik Komputer dan Jaringan",
    period: "2014 — 2017",
    description: {
      en: "Vocational High School specializing in Computer Network Engineering.",
      id: "Sekolah Menengah Kejuruan dengan spesialisasi Teknik Komputer dan Jaringan."
    }
  }
];
