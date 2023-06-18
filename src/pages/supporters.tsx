import { type NextPage } from "next"
import Head from "next/head"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Supporters: NextPage = () => {
  return (
    <>
      <Head>
        <title>Supporters {"💕"}</title>
        <meta name="description" content="azazelm3dj3d personal website" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/56496067"
        />
      </Head>
      <Navbar />

      <div className="h-screen bg-zinc-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul
              role="list"
              className="h-1/2 space-y-4 shadow-2xl sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-1 lg:gap-8"
            >
              <li className="rounded-lg bg-zinc-800 py-10 px-6 xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <div className="mx-auto mx-10 text-white">
                    <h1 className="text-center text-2xl font-bold">
                      Supporters
                    </h1>
                    <br />
                    <p className="text-xl">
                      No supporters yet! If you like my projects, you can
                      support me by using one of these methods:
                    </p>
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <div className="mt-2">
                          <a
                            href="https://www.patreon.com/azazelm3dj3d"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button
                              type="button"
                              className="text-md m-1 inline-flex items-center rounded-md bg-patreon-base px-6 py-3 font-medium font-bold text-white shadow-lg transition hover:bg-zinc-600"
                            >
                              Patreon
                            </button>
                          </a>
                          <a
                            href="https://github.com/sponsors/azazelm3dj3d/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button
                              type="button"
                              className="text-md m-1 inline-flex items-center rounded-md bg-github-base px-6 py-3 font-medium font-bold text-white shadow-lg transition hover:bg-zinc-600"
                            >
                              GitHub Sponsors
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                    <p className="text-xl">
                      If you decide to support me, your username and/or logo
                      will appear on this page and other places. If interested,
                      please check out the links above which outline the
                      available tiers.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Supporters
