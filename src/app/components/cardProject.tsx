"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface DataInterface {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  image: string;
  technology: string;
  url: string;
}

export default function CardProject(item: DataInterface) {
  const router = useRouter();

  return (
    <div
      className="w-full p-4"
      key={item.id}
      onClick={() => item.url != "" && router.push(item.url)}
    >
      <div
        className={
          "relative h-48 lg:h-64 xl:h-80 2xl:h-96 backdrop-blur rounded-2xl overflow-hidden hover:scale-105 ease-out duration-300 " +
          item.color +
          (item.url != "" ? " cursor-pointer" : "")
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
}
