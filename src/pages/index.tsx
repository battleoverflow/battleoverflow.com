import { type NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

const projects = [
  {
    name: "Jinx Security",
    description: "Open source cybersecurity projects",
    img: "https://avatars.githubusercontent.com/u/123960708",
    alt: "Jinx Security",
    url: "https://github.com/jinxsecurity",
  },
  {
    name: "azazelm3dj3d",
    description: "Personal GitHub",
    img: "https://avatars.githubusercontent.com/u/56496067",
    alt: "azazelm3dj3d",
    url: "https://github.com/azazelm3dj3d",
  },
  {
    name: "Shinigami",
    description: "Utilities for communicating with Docker during runtime",
    img: "https://avatars.githubusercontent.com/u/120699168",
    alt: "Droid",
    url: "https://github.com/shinigamilib",
  },
];

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="azazelm3dj3d personal website" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/56496067"
        />
      </Head>
      <Navbar />

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h2"
                        className="text-2xl font-medium leading-6 text-white"
                      >
                        Support Me
                      </Dialog.Title>
                      <br />
                      <div className="mt-2">
                        <a
                          href="https://www.patreon.com/azazelm3dj3d"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button
                            type="button"
                            className="text-md m-1 inline-flex items-center rounded-md bg-patreon-base px-6 py-3 font-medium font-bold text-white shadow-lg transition hover:bg-gray-600"
                          >
                            Patreon
                          </button>
                        </a>
                        <a
                          href="https://github.com/sponsors/azazelm3dj3d"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button
                            type="button"
                            className="text-md m-1 inline-flex items-center rounded-md bg-github-base px-6 py-3 font-medium font-bold text-white shadow-lg transition hover:bg-gray-600"
                          >
                            GitHub Sponsors
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul
              role="list"
              className="h-1/2 space-y-4 shadow-2xl sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-1 lg:gap-8"
            >
              <li className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                    src="https://avatars.githubusercontent.com/u/56496067"
                    alt="azazelm3dj3d avatar"
                  />
                  <div className="mx-auto text-center">
                    <h3 className="font-size-lg text-2xl font-bold text-white">
                      Sup?
                    </h3>
                    <br />
                    <Link href={"/projects"}>
                      <button
                        type="button"
                        className="text-md m-1 inline-flex items-center rounded-md bg-gray-700 px-6 py-3 font-medium font-bold text-white shadow-lg transition hover:bg-gray-600"
                      >
                        Projects
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="text-md m-1 inline-flex items-center rounded-md bg-gray-700 px-6 py-3 font-medium font-bold text-white shadow-lg transition hover:bg-gray-600"
                      onClick={() => setOpen(true)}
                    >
                      Support
                    </button>
                  </div>
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="space-y-1 text-lg font-medium leading-6 text-white">
                      <h3 className="text-white"></h3>
                    </div>
                    <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <a
                          href="https://github.com/azazelm3dj3d"
                          className="text-gray-400 hover:text-red-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">GitHub</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/azazelm3dj3d"
                          className="text-gray-400 hover:text-red-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="mx-auto mx-10 text-white">
              <h1 className="text-center text-4xl font-bold">
                Open Source Development
              </h1>
            </div>
            <div className="h-1/2 space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {projects.map((pro) => (
                <div key={pro.name} className="flex justify-center text-white">
                  <div className="rounded-lg bg-gray-800 shadow-lg transition hover:shadow-2xl xl:text-left">
                    <a href={pro.url} target="_blank" rel="noreferrer">
                      <img
                        src={pro.img}
                        alt={pro.alt}
                        width="50%"
                        className="mx-auto mt-10 rounded-lg border border-2 border-red-500 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                      />
                    </a>
                    <div className="p-6">
                      <h1 className="mt-1 text-center text-xl font-bold">
                        {pro.name}
                      </h1>
                      <p className="mt-4 text-lg">{pro.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
