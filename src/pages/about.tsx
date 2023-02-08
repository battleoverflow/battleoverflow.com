import { type NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const links = [
  {
    name: "GitHub",
    anchor: "https://github.com/azazelm3dj3d",
  },
  {
    name: "Twitter",
    anchor: "https://twitter.com/azazelm3dj3d",
  },
  {
    name: "Patreon",
    anchor: "https://www.patreon.com/azazelm3dj3d",
  },
  {
    name: "LinkedIn",
    anchor: "https://www.linkedin.com/in/azazelm3dj3d/",
  },
  {
    name: "PyPI",
    anchor: "https://pypi.org/user/azazelm3dj3d/",
  },
  {
    name: "Crates.io",
    anchor: "https://crates.io/users/azazelm3dj3d",
  },
  {
    name: "npm",
    anchor: "https://www.npmjs.com/~azazelm3dj3d",
  },
  {
    name: "VS Code Publisher",
    anchor: "https://marketplace.visualstudio.com/publishers/azazelm3dj3d",
  },
];

const About: NextPage = () => {
  const NPM_PACKAGES = 3;
  const RUST_CRATES = 3;
  const PYPI_MODULES = 7;
  const VSCODE_EXT = 1;
  const TOTAL_PROJECTS = 43;

  return (
    <>
      <Head>
        <title>About</title>
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
            <ul
              role="list"
              className="h-1/2 space-y-4 shadow-2xl sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-1 lg:gap-8"
            >
              <li className="rounded-lg bg-gray-800 py-10 px-6 xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <div className="mx-auto mx-10 text-white">
                    <h1 className="text-center text-2xl font-bold">About Me</h1>
                    <br />

                    <p className="mb-5 text-xl">
                      Welcome to{" "}
                      <span className="text-red-600">Azazelm3dj3d</span>! Here
                      you{"'"}ll find a centralized location for all of my
                      social links, endeavors, projects, and much more. Over the
                      years, I{"'"}ve worked in multiple IT positions, both
                      consulting and full-time. I{"'"}ve also been a Web
                      Developer (and Full-Stack Developer), a Software Engineer
                      focused on embedded systems, and a Software Developer
                      building cybersecurity tools in the Threat Intelligence
                      space.
                    </p>

                    <p className="mb-5 text-xl">
                      If you{"'"}re interested in open source development,
                      content creation, game development, expanding your
                      knowledge into different technology topics, or anything
                      relative to those types of things, I probably have
                      something for you. You can check the various links below
                      for most of the content I create or look around the
                      website for some of my open source projects or anything
                      else.
                    </p>

                    <h3 className="mt-5 text-xl underline">Statistics</h3>
                    <ul className="mt-2 list-disc">
                      <li className="mb-2 mt-2">
                        PyPI packages: {PYPI_MODULES}+
                      </li>
                      <li className="mb-2 mt-2">
                        npm libraries: {NPM_PACKAGES}+
                      </li>
                      <li className="mb-2 mt-2">
                        VS Code extensions: {VSCODE_EXT}+
                      </li>
                      <li className="mb-2 mt-2">Rust crates: {RUST_CRATES}+</li>
                      <li className="mb-2 mt-2">
                        <a
                          href="https://github.com/search?q=user%3Aazazelm3dj3d+user%3Ashinigamilib+archived%3Afalse&type=Repositories"
                          className="border-b-2 transition hover:border-black"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open source projects
                        </a>
                        : {TOTAL_PROJECTS}+
                      </li>
                    </ul>
                    <h3 className="mt-5 text-xl underline">Links</h3>
                    <ul className="mt-2 list-disc">
                      {links.map((link) => (
                        <li className="mb-2 mt-2" key={link.name}>
                          <a
                            href={link.anchor}
                            className="transition hover:border-b-2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
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
