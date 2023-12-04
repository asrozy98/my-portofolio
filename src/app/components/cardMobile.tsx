"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardMobile() {
  const router = useRouter();
  return (
    <div className="w-full p-4">
      <div
        className="relative h-48 xl:h-80 2xl:h-96 bg-green-600 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 ease-out duration-300"
        onClick={() => router.push("/work/mobile")}
      >
        <p className="px-5 xl:px-8 py-2 xl:py-6 text-xl xl:text-4xl font-bold text-right">
          Mobile
        </p>
        <Image
          className="absolute top-1/3 left-1/4 h-auto w-1/2 hover:scale-110 ease-in duration-300"
          src="/images/mobile.png"
          width={700}
          height={700}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
