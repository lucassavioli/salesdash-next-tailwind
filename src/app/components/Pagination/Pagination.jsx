import Link from "next/link";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function Pagination() {
  return (
    <div className="justify-center col-span-4">
      {/* Pagination: Simple */}
      <div className="text-center dark:text-gray-100">
        {/* Visible on mobile */}
        <nav className="flex md:hidden lg:hidden xl:hidden">
          <Link
            href="#"
            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <IconChevronLeft className="-mx-1.5 inline-block size-5" />
          </Link>
          <div className="flex grow items-center justify-center px-2 sm:px-4">
            <span>
              Page <span className="font-semibold">2</span> of
              <span className="font-semibold"> 20</span>
            </span>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <IconChevronRight className="-mx-1.5 inline-block size-5" />
          </Link>
        </nav>
        {/* END Visible on mobile */}

        {/* Visible on desktop */}
        <nav className="xs:hidden sm:hidden md:flex lg:flex xl:flex justify-center">
          <Link
            href="#"
            className="-mr-px inline-flex items-center justify-center space-x-2 rounded-l-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <IconChevronLeft className="-mx-1.5 inline-block size-5" />
          </Link>
          <Link
            href="#"
            className="-mr-px inline-flex items-center justify-center space-x-2 border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            1
          </Link>
          <Link
            href="#"
            className="-mr-px inline-flex items-center justify-center space-x-2 border border-gray-200 bg-gray-100 px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-700/75 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            2
          </Link>
          <Link
            href="#"
            className="-mr-px inline-flex items-center justify-center space-x-2 border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            3
          </Link>
          <div className="-mr-px flex items-center justify-center border border-gray-200 bg-white px-4 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            ...
          </div>
          <Link
            href="#"
            className="-mr-px inline-flex items-center justify-center space-x-2 border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            19
          </Link>
          <Link
            href="#"
            className="-mr-px inline-flex items-center justify-center space-x-2 border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            20
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center space-x-2 rounded-r-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <IconChevronRight className="-mx-1.5 inline-block size-5" />
          </Link>
        </nav>
        {/* END Visible on desktop */}
      </div>
      {/* END Pagination: Simple */}
    </div>
  );
}
