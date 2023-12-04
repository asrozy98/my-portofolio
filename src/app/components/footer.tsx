import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <footer className="mx-auto w-full h-64 max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link href="https://flowbite.com/" className="hover:underline">
                Muhammad Faisal Asrozy
              </Link>
              .
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Elsewhere
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/asrozy98"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://facebook.com/asrozy98"
                    className="hover:underline"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://instagram.com/asrozy98"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/mfaisalasrozy"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
