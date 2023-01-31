import { type NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const projects = [
  {
    name: "Catherine",
    description: "The rusty cybersecurity defense framework built using Rust.",
    img: "imgs/catherine_icon.png",
    alt: "Catherine",
    url: "https://github.com/jinxsecurity/catherine",
  },
  {
    name: "Mercy",
    description:
      "Rust crate created to assist with building cybersecurity tools.",
    img: "imgs/mercy_icon.png",
    alt: "Mercy",
    url: "https://github.com/jinxsecurity/mercy",
  },
  {
    name: "Droid",
    description:
      "Remote Android (adb) communication using a desktop application.",
    img: "imgs/droid_icon.png",
    alt: "Droid",
    url: "https://github.com/azazelm3dj3d/droid",
  },
  {
    name: "aniFace",
    description:
      "VS Code extension that judges you for the number of errors in your codebase.",
    img: "imgs/aniface_icon.png",
    alt: "aniFace",
    url: "https://github.com/azazelm3dj3d/aniFace",
  },
  {
    name: "Shinigami",
    description:
      "Library allowing the user to generate and build Dockerfiles during runtime.",
    img: "imgs/shinigami_icon.png",
    alt: "Shinigami",
    url: "https://github.com/shinigamilib",
  },
  {
    name: "RediSea",
    description:
      "Redis (in-memory database) communication framework used for database exploration.",
    img: "imgs/redisea_icon.png",
    alt: "RediSea",
    url: "https://github.com/azazelm3dj3d/RediSea",
  },
];

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

      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="mx-auto mx-10 text-white">
              <h1 className="text-center text-4xl font-bold">Projects</h1>
            </div>
            <div className="h-1/2 space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {projects.map((pro) => (
                <div key={pro.name} className="flex justify-center text-white">
                  <div className="rounded-lg bg-gray-800 shadow-xl transition hover:shadow-2xl xl:text-left">
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

export default Projects;
