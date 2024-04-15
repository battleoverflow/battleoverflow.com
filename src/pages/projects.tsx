import { type NextPage } from "next"
import Head from "next/head"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const projects = [
  {
    name: "Catherine",
    description:
      "The Catherine Framework is a general-purpose cybersecurity framework built to provide extended support for defense operations.",
    img: "images/projects/catherine_icon.png",
    url: "https://github.com/battleoverflow/catherine"
  },
  {
    name: "Mercy",
    description:
      "Mercy is an open-source Rust crate and CLI designed for building cybersecurity utilities and projects.",
    img: "images/projects/mercy.webp",
    url: "https://github.com/battleoverflow/mercy"
  },
  {
    name: "Droid",
    description:
      "Droid is a desktop application created to communicate with Android devices on the local network over the Android debug bridge (adb).",
    img: "images/projects/droid.webp",
    url: "https://github.com/battleoverflow/droid"
  },
  {
    name: "RediSea",
    description:
      "RediSea is a Redis (in-memory database) framework used for communicating with Redis in real-time",
    img: "images/projects/redisea.webp",
    url: "https://github.com/battleoverflow/RediSea"
  }
]

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="battleoverflow personal website" />
        <link rel="icon" href="images/icon.png" />
      </Head>
      <Navbar />

      <div className="bg-zinc-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="mx-auto mx-10 text-white">
              <h1 className="text-center text-4xl font-bold">
                Notable Projects
              </h1>
            </div>
            <div className="h-1/2 space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {projects.map((pro) => (
                <div key={pro.name} className="flex justify-center text-white">
                  <div className="rounded-lg bg-zinc-800 shadow-xl transition hover:shadow-2xl xl:text-left">
                    <a href={pro.url} target="_blank" rel="noreferrer">
                      <img
                        src={pro.img}
                        alt={pro.name}
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
  )
}

export default Projects
