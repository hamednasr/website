import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import YouTube from "react-youtube";

const Main = () => {
  const videoOpts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const videoStyle = {
    transform: "scale(.9)",
  };

  return (
    <div id="home" className="w-full xl:h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <YouTube videoId="" opts={videoOpts} style={videoStyle} />
        </div>

        <div>
          <p className="uppercase text-2sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h2 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Hamed</span>
          </h2>
          <p className="py-2 text-3xl text-gray-700 sm:max-w-[100%] m-auto">
            <strong>Machine learning Engineer</strong>
          </p>
          <p className="py-4 text-3xl text-gray-700">
            <strong>Google Certified TensorFlow Deep Learning Developer</strong>
          </p>
          <div className="flex items-center justify-between max-w-[480px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/hamed-nasr-60802677/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>

            <a
              href="https://github.com/hamednasr"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <Link href="/#contact">
              <div className="bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>

            <a
              className="group bg-white px-8 py-5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10  rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="public\assets\resume.pdf"
              download
            >
              <h3>Download Resume </h3>
              <HiDownload className="opacity-90 group-hover:translate-y-1.5 transition" />
            </a>

            {/* <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
