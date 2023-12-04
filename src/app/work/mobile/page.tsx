/* eslint-disable react/no-unescaped-entities */
import CardProject from "@/app/components/cardProject";

interface MobileData {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  image: string;
  technology: string;
  url: string;
}

const data: MobileData[] = [
  {
    id: 1,
    title: "YES Mobile",
    description: "Mobile Webview from Yogya Easy Service (Yogya Group)",
    color: "bg-yellow-400/70",
    icon: "/my-portofolio/images/mobile/yes.png",
    image: "/my-portofolio/images/mobile/yes-mobile.png",
    technology: "Laravel",
    url: "",
  },
  {
    id: 2,
    title: "YOCommerce",
    description: "Mobile Webview from YOCommerce Website (Yogya Group)",
    color: "bg-orange-600/90",
    icon: "/my-portofolio/images/mobile/yocommerce.png",
    image: "/my-portofolio/images/mobile/yocommerce-mobile.png",
    technology: "React Native & Laravel",
    url: "",
  },
  {
    id: 3,
    title: "YOMitra",
    description: "Mobile Webview from YOMitra Website (Yogya Group)",
    color: "bg-blue-600/80",
    icon: "/my-portofolio/images/mobile/yomitra.png",
    image: "/my-portofolio/images/mobile/yomitra-mobile.png",
    technology: "React Native & Laravel",
    url: "",
  },
  {
    id: 4,
    title: "Working Report 79",
    description: "Mobile App for Daily Work Report (Padepokan 79)",
    color: "bg-blue-500/70",
    icon: "/my-portofolio/images/mobile/79.png",
    image: "/my-portofolio/images/mobile/wr.png",
    technology: "React Native",
    url: "",
  },
];

export default function WorkMobile() {
  return (
    <main className="flex flex-col justify-around items-center min-h-screen w-full p-2 pb-4 pt-32 sm:p-12 sm:pb-12 md:p-24 md:pt-48">
      <p className="text-5xl md:text-7xl xl:text-9xl mb-20 font-bold text-center">
        Mobile.
      </p>
      <div className="flex flex-row justify-around w-full">
        <div className="w-full md:max-w-3xl p-0 md:p-6">
          <p className="mb-4 text-xl font-bold text-center">
            Front-End • API Integration • UI / UX / Prototyping • 2021-2023
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
