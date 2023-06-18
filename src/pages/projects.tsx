import { type NextPage } from "next"
import Head from "next/head"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const projects = [
  {
    name: "Catherine",
    description:
      "General-purpose cybersecurity framework built to aggregate, validate, decode, decrypt, and maintain data",
    img: "imgs/projects/catherine.webp",
    url: "https://github.com/azazelm3dj3d/catherine",
    lang: "Rust"
  },
  {
    name: "Mercy",
    description:
      "Rust crate created to assist with building cybersecurity tools",
    img: "imgs/projects/mercy.webp",
    url: "https://github.com/azazelm3dj3d/mercy",
    lang: "Rust"
  },
  {
    name: "Droid",
    description:
      "Remote Android (adb) communication using a desktop application",
    img: "imgs/projects/droid.webp",
    url: "https://github.com/azazelm3dj3d/droid",
    lang: "Python"
  },
  {
    name: "aniFace",
    description:
      "VS Code extension that judges you for the number of errors in your codebase",
    img: "imgs/projects/aniface.webp",
    alt: "aniFace",
    url: "https://github.com/azazelm3dj3d/aniFace",
    lang: "TypeScript"
  },
  {
    name: "Shinigami",
    description:
      "Library allowing the user to generate and build Dockerfiles during runtime",
    img: "imgs/projects/shinigami.webp",
    url: "https://github.com/shinigamilib",
    lang: "Python, TypeScript"
  },
  {
    name: "RediSea",
    description:
      "Redis (in-memory database) communication framework used for database control",
    img: "imgs/projects/redisea.webp",
    url: "https://github.com/azazelm3dj3d/RediSea",
    lang: "Python"
  },
  {
    name: "Jinx",
    description:
      "The Jinx Framework is a mini framework created to provide simple components for building basic websites, auth included",
    img: "imgs/projects/jinx.webp",
    url: "https://github.com/azazelm3dj3d/jinx",
    lang: "PHP"
  }
]

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="azazelm3dj3d personal website" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/56496067"
        />
      </Head>
      <Navbar />

      <div className="bg-zinc-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="mx-auto mx-10 text-white">
              <h1 className="text-center text-4xl font-bold">Projects</h1>
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
                      <p className="mt-4 rounded-md border-2 border-red-500 bg-zinc-900 p-2 text-center">
                        {pro.lang}
                      </p>
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
