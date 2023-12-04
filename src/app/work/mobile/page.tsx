/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

interface MobileData {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  image: string;
  technology: string;
}

const data: MobileData[] = [
  {
    id: 1,
    title: "YES Mobile",
    description: "Mobile Webview from Yogya Easy Service (Yogya Group)",
    color: "bg-yellow-400/70",
    icon: "/images/mobile/yes.png",
    image: "/images/mobile/yes-mobile.png",
    technology: "Laravel",
  },
  {
    id: 2,
    title: "YOCommerce",
    description: "Mobile Webview from YOCommerce Website (Yogya Group)",
    color: "bg-orange-600/90",
    icon: "/images/mobile/yocommerce.png",
    image: "/images/mobile/yocommerce-mobile.png",
    technology: "React Native & Laravel",
  },
  {
    id: 3,
    title: "YOMintra",
    description: "Mobile Webview from YOMitra Website (Yogya Group)",
    color: "bg-blue-600/80",
    icon: "/images/mobile/yomitra.png",
    image: "/images/mobile/yomitra-mobile.png",
    technology: "React Native & Laravel",
  },
  {
    id: 4,
    title: "Working Report 79",
    description: "Mobile App for Daily Work Report (Padepokan 79)",
    color: "bg-blue-500/70",
    icon: "/images/mobile/79.png",
    image: "/images/mobile/wr.png",
    technology: "React Native",
  },
];

export default function WorkMobile() {
  return (
    <main className="flex flex-col justify-around items-center min-h-screen w-full p-2 pb-4 pt-32 sm:p-12 sm:pb-12 md:p-24">
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
