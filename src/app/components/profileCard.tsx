import Image from "next/image";

export default function ProfileCard() {
  return (
    <figure className="relative p-8 sm:p-0 w-1/2 sm:w-1/3 md:w-80 md:p-6 max:w-2/6">
      <Image
        className="w-24 h-24 sm:w-24 md:w-48 md:h-48 rounded-full ring-2 ring-white mx-auto"
        src="/my-portofolio/images/profile.jpg"
        width={500}
        height={500}
        style={{ objectFit: "cover" }}
        alt="Picture of the author"
      />
      {/* <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400 text-center">
            Faisal
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            Blitar, Jawa Timur
          </div>
        </figcaption>
      </div> */}
      <span className="absolute top-4 sm:-top-2 md:top-3 xl:top-0 left-12 sm:left-auto sm:right-12 md:right-20 xl:right-40 items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white">
        CSS
      </span>
      <span className="absolute top-10 sm:top-24 xl:top-32 right-3 sm:right-auto sm:left-10 md:left-0 xl:left-4 items-center rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white">
        React JS
      </span>
      <span className="absolute top-36 sm:top-12 xl:top-3 right-32 sm:right-10 xl:right-24 items-center rounded-md bg-orange-700 px-2 py-1 text-xs font-medium text-white">
        Git
      </span>
      <span className="absolute -top-4 sm:-top-10 md:top-0 xl:top-8 left-2 sm:left-auto sm:right-0 xl:right-4 items-center rounded-md bg-cyan-500 px-2 py-1 text-xs font-medium text-black">
        Go Lang
      </span>
      <span className="absolute top-28 sm:-top-4 md:top-52 xl:top-9 right-10 sm:right-auto sm:left-20 md:left-28 xl:left-12 items-center rounded-md bg-orange-600 px-2 py-1 text-xs font-medium text-white">
        Html
      </span>
      <span className="absolute top-3210 sm:top-0 md:top-2 xl:top-20 left-20 sm:left-9 md:left-20 xl:left-9 items-center rounded-md bg-indigo-400 px-2 py-1 text-xs font-medium text-white">
        PHP
      </span>
      <span className="absolute top-28 sm:top-5 md:top-24 xl:top-20 left-0 sm:left-auto sm:-right-5 xl:right-0 items-center rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white">
        React Native
      </span>
      <span className="absolute top-20 sm:top-8 xl:top-44 right-2 sm:right-auto sm:left-4 xl:left-12 items-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white">
        Laravel
      </span>
      <span className="absolute top-20 sm:top-16 md:top-36 xl:top-52 left-0 sm:left-auto md:left-0 xl:left-28 items-center rounded-md bg-yellow-300 px-2 py-1 text-xs font-medium text-black">
        Javascript
      </span>
      <span className="absolute top-3 sm:top-20 md:top-36 xl:top-32 right-10 sm:right-7 md:right-0 xl:right-4 items-center rounded-md bg-purple-600 px-2 py-1 text-xs font-medium text-white">
        Bootstrap
      </span>
      <span className="absolute -top-5 sm:-top-10 md:-top-3 xl:top-56 right-2 sm:right-auto sm:left-0 xl:left-auto xl:right-12 items-center rounded-md bg-green-500 px-2 py-1 text-xs font-medium text-black">
        Node JS
      </span>
      <span className="absolute top-11 sm:top-28 md:top-48 xl:top-44 left-0 sm:left-auto sm:right-0 md:right-5 xl:right-8 items-center rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white">
        Typescript
      </span>
      <span className="absolute top-36 sm:top-32 md:top-52 xl:top-0 right-2 sm:right-auto sm:left-0 md:left-4 xl:left-6 items-center rounded-md bg-emerald-500 px-2 py-1 text-xs font-medium text-white">
        Tailwind
      </span>
    </figure>
  );
}
