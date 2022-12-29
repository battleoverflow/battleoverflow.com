import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-20 w-auto lg:hidden"
                    src="/favicon.gif"
                    alt="azazelm3dj3d"
                  />
                  <img
                    className="hidden h-24 w-auto lg:block"
                    src="/favicon.gif"
                    alt="azazelm3dj3d"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href="/"
                    className="text-md inline-flex items-center border-transparent px-1 pt-1 font-medium text-white transition hover:text-red-500"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-md inline-flex items-center border-transparent px-1 pt-1 font-medium text-white transition hover:text-red-500"
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="text-md inline-flex items-center border-transparent px-1 pt-1 font-medium text-white transition hover:text-red-500"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/ai"
                    className="text-md inline-flex items-center border-transparent px-1 pt-1 font-medium text-white transition hover:text-red-500"
                  >
                    AI Art
                  </Link>
                  {/* <Link
                    href="/supporters"
                    className="text-md inline-flex items-center border-transparent px-1 pt-1 font-medium text-white transition hover:text-red-500"
                  >
                    Supporters
                  </Link> */}
                  <a
                    href="https://blog.azazelm3dj3d.com"
                    className="text-md inline-flex items-center border-transparent px-1 pt-1 font-medium text-white transition hover:text-red-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white transition hover:bg-white hover:text-black"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white transition hover:bg-white hover:text-black"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/projects"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white transition hover:bg-white hover:text-black"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/ai"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white transition hover:bg-white hover:text-black"
              >
                AI Art
              </Disclosure.Button>
              {/* <Disclosure.Button
                as="a"
                href="/supporters"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white transition hover:bg-white hover:text-black"
              >
                Supporters
              </Disclosure.Button> */}
              <Disclosure.Button
                as="a"
                href="https://blog.azazelm3dj3d.com"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white transition hover:bg-white hover:text-black"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
