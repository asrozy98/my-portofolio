/* eslint-disable react/no-unescaped-entities */
import CardProject from "@/app/components/cardProject";

interface WebsiteData {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  image: string;
  technology: string;
  url: string;
}

const data: WebsiteData[] = [
  {
    id: 1,
    title: "CMS YES Mobile",
    description: "CMS for manage Yogya Easy Service product (Yogya Group)",
    color: "bg-yellow-400/70",
    icon: "/my-portofolio/images/mobile/yes.png",
    image: "/my-portofolio/images/website/yes.png",
    technology: "Laravel",
    url: "",
  },
  {
    id: 2,
    title: "CMS YOCommerce",
    description: "CMS for manage YOCommerce product (Yogya Group)",
    color: "bg-orange-600/90",
    icon: "/my-portofolio/images/mobile/yocommerce.png",
    image: "/my-portofolio/images/website/yocommerce.png",
    technology: "Laravel",
    url: "",
  },
  {
    id: 3,
    title: "My Assistium",
    description: "E-learning app for Telkom Employee",
    color: "bg-green-500/70",
    icon: "/my-portofolio/images/website/telkom.png",
    image: "/my-portofolio/images/website/my-assistium.png",
    technology: "React JS",
    url: "",
  },
  {
    id: 4,
    title: "Assistium",
    description: "CMS for assesment Telkom Employee",
    color: "bg-green-700/70",
    icon: "/my-portofolio/images/website/telkom.png",
    image: "/my-portofolio/images/website/assistium.png",
    technology: "React JS",
    url: "",
  },
  {
    id: 5,
    title: "MOR Nestle",
    description: "CMS for making monthly report in Nestle",
    color: "bg-blue-300/90",
    icon: "/my-portofolio/images/website/nestle.png",
    image: "/my-portofolio/images/website/mor.png",
    technology: "Power App & Power Automate",
    url: "",
  },
  {
    id: 6,
    title: "Nukupay",
    description: "Landing Page & Admin Panel Nukupay",
    color: "bg-blue-600/70",
    icon: "/my-portofolio/images/website/nukupay.png",
    image: "/my-portofolio/images/website/nukupay-web.png",
    technology: "Laravel",
    url: "http://nukupay.com",
  },
];

export default function WorkWebsite() {
  return (
    <main className="flex flex-col justify-around items-center min-h-screen w-full p-2 pb-4 pt-32 sm:p-12 sm:pb-12 md:p-24 md:pt-48">
      <p className="text-5xl md:text-7xl xl:text-9xl mb-20 font-bold text-center">
        Website.
      </p>
      <div className="flex flex-row justify-around w-full">
        <div className="w-full md:max-w-3xl p-0 md:p-6">
          <p className="mb-4 text-xl font-bold text-center">
            Front-End • Back-End • API Integration • UI / UX / Prototyping •
            2021-2023
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2 w-full p-2 mt-6">
        {data.map((item) => {
          return <CardProject {...item} key={item.id} />;
        })}
      </div>
    </main>
  );
}
