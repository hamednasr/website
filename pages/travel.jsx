import Image from "next/image";
import React from "react";
import TravelAppImg from "../public/assets/projects/travelapp.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const travel = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={TravelAppImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
            Travel Recommender App with Langchain and LLM
          </h2>
          <h3>Langchain / Large Language Model / Streamlit</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-6">Overview</h2>
          <p className="text-justify text-xl">
            This project is a vacation city and sightseeing recommender system
            using Large Language Models and Langchain. It allows users to select
            a month and continent to travel to, and then recommends the city and
            sightseeings of it to visit. To use the recommender system, simply
            follow these steps:
            <br />
            1) Select the month and continent you want to travel to.
            <br />
            2) Click the Recommend button.
            <br />
            3) The recommender system will display the recommended city and
            sightseeings of it to visit.
          </p>

          <a
            href="https://github.com/hamednasr/vacation-recommender-via-LLM-model/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://vacation-recommender.streamlit.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Large Language Model
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Langchain
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Streamlit
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Transformers
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

export default travel;
