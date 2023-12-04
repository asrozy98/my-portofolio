/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import CardWebsite from "./components/cardWebsite";
import CardMobile from "./components/cardMobile";

export default function Home() {
  return (
    <main className="flex flex-col justify-around items-center min-h-screen w-full p-2 pb-4 pt-32 sm:p-12 sm:pb-12 md:p-24 md:pt-48">
      <p className="text-5xl md:text-7xl xl:text-9xl mb-20 font-bold text-center">
        Hi. I'am Faisal.
        <br />A Developer.
      </p>
      <div className="flex flex-row justify-around w-full">
        <div className="w-full md:max-w-3xl p-0 md:p-6">
          <p className="mb-4 text-md sm:text-lg lg:text-xl font-bold text-center">
            I'm passionate about crafting experiences that are engaging,
            accessible, and easy to use.
          </p>
        </div>
      </div>
      <div className="columns-1 md:columns-2 gap-2 w-full p-2 mt-6">
        <CardWebsite />
        <CardMobile />
      </div>
    </main>
  );
}
