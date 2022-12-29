import { type NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const projects = [
  {
    key: 0,
    img: "imgs/ai/01.png",
    alt: "01",
  },
  {
    key: 1,
    img: "imgs/ai/02.png",
    alt: "01",
  },
  {
    key: 2,
    img: "imgs/ai/03.png",
    alt: "01",
  },
  {
    key: 3,
    img: "imgs/ai/04.png",
    alt: "01",
  },
  {
    key: 4,
    img: "imgs/ai/05.png",
    alt: "01",
  },
  {
    key: 5,
    img: "imgs/ai/06.png",
    alt: "01",
  },
  {
    key: 6,
    img: "imgs/ai/07.png",
    alt: "01",
  },
  {
    key: 7,
    img: "imgs/ai/08.png",
    alt: "01",
  },
];

const Projects: NextPage = () => {
  const END: number = 7;

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="azazelm3dj3d personal website" />
        <link rel="icon" href="/favicon.gif" />
      </Head>
      <Navbar />

      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="mx-auto mx-10 text-white">
              <h1 className="text-center text-4xl font-bold">AI Art</h1>
            </div>
            <p className="text-md text-white">
              I am a huge fan of artificial intelligence and one of my favorite
              things to create is AI art, so I've created a special page to
              display some of my favorite generated masterpieces. While these
              are free to use (for non-commercial projects), I do ask that you
              give attribution to me in some form for those who may be
              interested in anything I do.
            </p>
            <div className="h-1/2 space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:grid-cols-4 lg:gap-8">
              {projects.map((pro) => (
                <div key={pro.key} className="flex justify-center text-white">
                  <div className="transition">
                    <img
                      src={pro.img}
                      alt={pro.alt}
                      width="100%"
                      className="mx-auto mt-10 shadow-lg transition hover:scale-125 hover:shadow-xl"
                    />
                    <p className="text-green-600">
                      {pro.key}/{END}
                    </p>
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
