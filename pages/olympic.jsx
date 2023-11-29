import Image from "next/image";
import React from "react";
import olympicImg from "../public/assets/projects/olympic.jpg";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const olympic = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={olympicImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
          Thorough Olympic Games Explanatory Data Analysis
          </h2>
          <h3>Pandas / Data Dnalysis, Manipulation and Aggregation</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-6">Overview</h2>
          <p className="text-justify text-xl">
            This was a challenge in Pandas Course a few years ago.
              <br /><br />Goals of this challenge: 
              <br /> Olympic Medal Tables Data Manipulation and Aggregation 

              <br /> Explanatory Data Analysis <br />(Why are some countries more successful than other Countries in Olympic Games?)
          </p>
          
          <a
            href="https://github.com/hamednasr/Explanatory-Data-Analysis/blob/main/Explanatory_DataAnalysis_Challenge.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>

        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pandas
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Data Manipulation and Aggregation
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Explanatory Data Analysis
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default olympic;
