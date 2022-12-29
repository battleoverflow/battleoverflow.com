import { type NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About: NextPage = () => {
  const NPM_PACKAGES = 2;
  const RUST_CRATES = 2;
  const PYPI_MODULES = 5;
  const VSCODE_EXT = 1;
  const TOTAL_PROJECTS = 39;

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="azazelm3dj3d personal website" />
        <link rel="icon" href="/favicon.gif" />
      </Head>
      <Navbar />

      <div className="h-screen bg-gray-900">
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
                      I am a Software Engineer currently employed in the
                      cybersecurity industry, developing numerous tools for
                      threat intelligence, File Detection & Response (FDR),
                      malware analysis, sandbox testing, and much more. My
                      personal focus is developing open-source projects, mostly
                      CLI tools, libraries (+ crates) and desktop applications.
                      All of my projects are organized on GitHub. You can check
                      out my custom security defense framework under{" "}
                      <a
                        href="https://github.com/CatherineFramework"
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-white transition hover:border-black"
                      >
                        Catherine Framework
                      </a>
                      , utilities created for improved development under{" "}
                      <a
                        href="https://github.com/shinigamilib"
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-white transition hover:border-black"
                      >
                        Shinigami
                      </a>
                      , and everything else is under{" "}
                      <a
                        href="https://github.com/azazelm3dj3d"
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-white transition hover:border-black"
                      >
                        azazelm3dj3d
                      </a>
                      .
                    </p>
                    <br />
                    <p className="text-xl">
                      Most of my time is invested in cross-platform application
                      development using Python and Rust. I also dabble in
                      TypeScript and C/C++, if the project calls for it. I
                      currently maintain over{" "}
                      <a
                        href="https://github.com/search?q=user%3Aazazelm3dj3d+user%3Ashinigamilib+user%3ACatherineFramework+archived%3Afalse&type=Repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-white transition hover:border-black"
                      >
                        {TOTAL_PROJECTS}+ open source project(s)
                      </a>
                      ,{" "}
                      <a
                        href="https://crates.io/users/azazelm3dj3d"
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-white transition hover:border-black"
                      >
                        {RUST_CRATES}+ Rust crate(s)
                      </a>
                      ,{" "}
                      <a
                        href="https://pypi.org/user/azazelm3dj3d"
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-white transition hover:border-black"
                      >
                        {PYPI_MODULES}+ PyPi module(s)
                      </a>
                      ,{" "}
                      <a
                        href="https://www.npmjs.com/~azazelm3dj3d"
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-white transition hover:border-black"
                      >
                        {NPM_PACKAGES}+ npm package(s)
                      </a>
                      , and{" "}
                      <a
                        href="https://marketplace.visualstudio.com/publishers/azazelm3dj3d"
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-white transition hover:border-black"
                      >
                        {VSCODE_EXT}+ VS Code extension(s)
                      </a>{" "}
                      during my free time.
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
  );
};

export default About;
