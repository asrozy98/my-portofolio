/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

interface WebsiteData {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  image: string;
  technology: string;
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
  },
  {
    id: 2,
    title: "CMS YOCommerce",
    description: "CMS for manage YOCommerce product (Yogya Group)",
    color: "bg-orange-600/90",
    icon: "/my-portofolio/images/mobile/yocommerce.png",
    image: "/my-portofolio/images/website/yocommerce.png",
    technology: "Laravel",
  },
  {
    id: 3,
    title: "My Assistium",
    description: "E-learning app for Telkom Employee",
    color: "bg-green-500/70",
    icon: "/my-portofolio/images/website/telkom.png",
    image: "/my-portofolio/images/website/my-assistium.png",
    technology: "React JS",
  },
  {
    id: 4,
    title: "Assistium",
    description: "CMS for assesment Telkom Employee",
    color: "bg-green-700/70",
    icon: "/my-portofolio/images/website/telkom.png",
    image: "/my-portofolio/images/website/assistium.png",
    technology: "React JS",
  },
  {
    id: 5,
    title: "MOR Nestle",
    description: "CMS for making report",
    color: "bg-blue-300/90",
    icon: "/my-portofolio/images/website/nestle.png",
    image: "/my-portofolio/images/website/mor.png",
    technology: "Power App & Power Automate",
  },
  {
    id: 6,
    title: "Nukupay",
    description: "Landing Page & Admin Panel Nukupay",
    color: "bg-blue-600/70",
    icon: "/my-portofolio/images/website/nukupay.png",
    image: "/my-portofolio/images/website/nukupay-web.png",
    technology: "Laravel",
  },
];

export default function WorkWebsite() {
  return (
    <main className="flex flex-col justify-around items-center min-h-screen w-full p-2 pb-4 pt-32 sm:p-12 sm:pb-12 md:p-24">
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
          return (
            <div className="w-full p-4" key={item.id}>
              <div
                className={
                  "relative h-48 lg:h-64 xl:h-80 2xl:h-96 backdrop-blur rounded-2xl overflow-hidden cursor-pointer hover:scale-105 ease-out duration-300 " +
                  item.color
                }
              >
                <div className="absolute top-0 right-0 py-2 px-4">
                  <p className="pr-1 text-xl xl:text-4xl font-bold text-right overflow-visible">
                    {item.title}
                  </p>
                </div>
                <div className="flex flex-row justify-between w-full h-full">
                  <div className="w-3/5">
                    <div className="h-1/4 pt-4 px-4 xl:p-6">
                      <Image
                        className="object-fill backdrop-blur h-8 w-auto lg:h-12 lg:w-auto xl:h-16 xl:w-auto hover:scale-110 ease-in duration-300"
                        src={item.icon}
                        width={700}
                        height={700}
                        alt={item.title}
                      />
                    </div>
                    <div className="h-3/4 flex flex-col justify-around">
                      <p className="px-4 lg:px-8 text-sm sm:text-lg md:text-xl xl:text-2xl 3xl:text-3xl">
                        {item.description}
                      </p>
                      <p className="text-md md:text-xl xl:text-2xl text-right">
                        {item.technology}
                      </p>
                    </div>
                  </div>
                  <div className="w-2/5 flex flex-col justify-end items-center overflow-hidden pb-4">
                    <Image
                      className="object-fill h-3/4 w-auto hover:scale-110 ease-in duration-300"
                      src={item.image}
                      width={700}
                      height={700}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
