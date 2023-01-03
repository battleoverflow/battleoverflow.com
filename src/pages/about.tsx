import { type NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About: NextPage = () => {
  const NPM_PACKAGES = 2;
  const RUST_CRATES = 2;
  const PYPI_MODULES = 5;
  const VSCODE_EXT = 1;
  const TOTAL_PROJECTS = 40;
  const RELEASED_GAMES = 0;

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="azazelm3dj3d personal website" />
        <link rel="icon" href="/favicon.gif" />
      </Head>
      <Navbar />

      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul
              role="list"
              className="h-1/2 space-y-4 shadow-2xl sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-1 lg:gap-8"
            >
              <li className="rounded-lg bg-gray-800 py-10 px-6 xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <div className="mx-auto mx-10 text-white">
                    <h1 className="text-center text-2xl font-bold">About Me</h1>
                    <br />
                    <p className="text-xl">
                      Hi! I am <a href="https://github.com/azazelm3dj3d" className="border-b-2 transition hover:border-black" target="_blank" rel="noreferrer">azazelm3dj3d</a> and I am a Software Developer currently building open-source projects for cybersecurity, gaming, web development, and other industries. Feel free to look around and explore, I currently have a blog, a lot of different social links, and some other stuff!
                    </p>
                    <p className="mt-5 text-xl">
                      Some of my most recent projects are the <a href="https://github.com/CatherineFramework" className="border-b-2 transition hover:border-black" target="_blank" rel="noreferrer">Catherine Framework</a> and <a href="https://github.com/shinigamilib" className="border-b-2 transition hover:border-black" target="_blank" rel="noreferrer">Shinigami utilities</a>.
                    </p>
                    <p className="mt-5 text-xl">
                      If you need to reach me, or would like to chat about
                      something I am working on, the best way to contact me is by
                      Discord: <b>azazel#1337</b>
                    </p>
                    <h3 className="mt-5 text-xl underline">Statistics</h3>
                    <ul className="mt-2">
                      <li className="mb-2 mt-2">
                        🌸 PyPI packages: {PYPI_MODULES}+
                      </li>
                      <li className="mb-2 mt-2">
                        🌸 npm libraries: {NPM_PACKAGES}+
                      </li>
                      <li className="mb-2 mt-2">
                        🌸 VSCode extensions: {VSCODE_EXT}+
                      </li>
                      <li className="mb-2 mt-2">
                        🌸 Rust crates: {RUST_CRATES}+
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://github.com/search?q=user%3Aazazelm3dj3d+user%3Ashinigamilib+user%3ACatherineFramework+archived%3Afalse&type=Repositories"
                          className="border-b-2 transition hover:border-black"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open source projects
                        </a>
                        : {TOTAL_PROJECTS}+
                      </li>
                      <li className="mb-2 mt-2">
                        🌸 Released games: {RELEASED_GAMES}
                      </li>
                    </ul>
                    <h3 className="mt-5 text-xl underline">Links</h3>
                    <ul className="mt-2">
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://github.com/azazelm3dj3d"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://twitter.com/azazelm3dj3d"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Twitter
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://www.patreon.com/azazelm3dj3d"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Patreon
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://www.reddit.com/r/azazelm3dj3d/"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Reddit
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://pypi.org/user/azazelm3dj3d/"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          PyPI
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://www.twitch.tv/azazelm3dj3d"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Twitch
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://www.npmjs.com/~azazelm3dj3d"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          npm
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://azazelm3dj3d.itch.io/"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          itch.io
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://gamejolt.com/@azazelm3dj3d"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GameJolt
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://marketplace.visualstudio.com/publishers/azazelm3dj3d"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          VS Code Publisher
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://crates.io/users/azazelm3dj3d"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Crates
                        </a>
                      </li>
                      <li className="mb-2 mt-2">
                        🌸{" "}
                        <a
                          href="https://azazelm3dj3d.newgrounds.com/"
                          className="transition hover:border-b-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Newgrounds
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
      <Footer />
    </>
  );
};

export default About;
