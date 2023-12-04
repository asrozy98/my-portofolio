"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardWebsite() {
  const router = useRouter();
  return (
    <div className="w-full p-4">
      <div
        className="relative h-48 xl:h-80 2xl:h-96 bg-orange-400 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 ease-out duration-300"
        onClick={() => router.push("/work/website")}
      >
        <p className="px-5 xl:px-8 py-2 xl:py-6 text-xl xl:text-4xl font-bold text-right">
          Website
        </p>
        <Image
          className="absolute top-1/2 left-1/3 h-auto max-w-full scale-125 hover:scale-150 ease-in duration-300"
          src="/images/website.png"
          width={700}
          height={700}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
