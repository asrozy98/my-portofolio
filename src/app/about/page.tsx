/* eslint-disable react/no-unescaped-entities */
import ProfileCard from "../components/profileCard";

export default function About() {
  return (
    <main className="flex flex-col justify-around items-center min-h-screen w-full p-1 pt-32 sm:p-3 sm:pt-24 sm:pb-12 md:pt-36">
      <p className="text-7xl mb-10 lg:mb-20 font-bold">I'am Faisal</p>
      <div className="flex flex-row justify-around items-center w-full lg:w-3/4">
        <ProfileCard />
        <div className="w-1/2 sm:w-2/3 lg:max-w-2xl sm:p-6 pt-8 sm:m-0 sm:ml-20">
          <p className="sm:pl-5 mb-4 text-xl sm:text-3xl lg:text-4xl font-bold">
            {/* eslint-disable-next-line react/no-unescaped-entities  */}
            I'm a Developer working remotely from Blitar, East Java.
          </p>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities  */}
            Over the past 3+ years, I've worked in several of digital companies,
            as front-end, back-end, or fullstack developer. I like learning new
            technology.
          </p>
        </div>
      </div>
      <div className="relative w-full p-6 pt-32 text-sm">
        <div className="absolute top-60 left-1 sm:left-5 md:left-10 lg:left-16 w-72 sm:w-2/4 lg:w-1/3 mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex flex-row w-full rounded-full bg-lime-300 dark:bg-lime-500 text-black p-4">
              <div className="flex-col">
                <p className="font-bold">Junior Hight School</p>
                <p className="font-semibold">SMP Negeri 2 Nglegok</p>
              </div>
              <div className="flex-auto">
                <div className="flex h-full justify-end items-center">
                  <p className="font-bold">2011-2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-32 left-12 sm:left-1/4 lg:left-1/3 w-72 sm:w-2/4 lg:w-1/3 mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex flex-row w-full rounded-full bg-lime-300 dark:bg-lime-500 text-black p-4">
              <div className="flex-col">
                <p className="font-bold">Senior Hight School</p>
                <p className="font-semibold">SMK Negeri 1 Nglegok</p>
              </div>
              <div className="flex-auto">
                <div className="flex h-full justify-end items-center">
                  <p className="font-bold">2014-2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-1 sm:right-5 md:right-10 lg:right-16 w-80 sm:w-3/5 lg:w-2/5 mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex flex-row w-full rounded-full bg-lime-300 dark:bg-lime-500 text-black p-4">
              <div className="flex-col">
                <p className="font-bold">University</p>
                <p className="font-semibold">Universitas Islam Balitar</p>
              </div>
              <div className="flex-auto">
                <div className="flex h-full justify-end items-center">
                  <p className="font-bold">2017-2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl p-6 pt-52">
        <p className="mb-4 text-xl sm:text-3xl lg:text-4xl font-bold">
          Let's collaborate if you're committed to sustainability, education,
          equality, or growing together.
        </p>
        <p>
          I believe we should leave this Earth as good as or better than we
          found it for future generations, my goal is to contribute to those
          ideals in whatever way I can. If you feel the same, I'd love to talk.
        </p>
      </div>
      <div className="max-w-4xl p-6 pt-0">
        <p>
          Before I became a developer like today, one of my college subjects
          discussed creating a modern website, which made me very excited when I
          studied it and finally, my skills can now be used to develop my own
          website.
        </p>
      </div>
    </main>
  );
}
