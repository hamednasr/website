import Image from "next/image";
import React from "react";
import bodyMoveImg from "../public/assets/projects/bodymove.jpg";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const bodymove = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bodyMoveImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
            Body Movement Detection
          </h2>
          <h3>TensorFlow / Compter Vision / Mediapipe</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-6">Overview</h2>
          <p className="text-justify text-xl">

          This project involved developing a human body action recognition system using TensorFlow and MediaPipe for a game development studio. The system takes video clips of human body movements as input and outputs the corresponding movement type (right, left, jump, or crouch). The system was trained on a dataset of 400 video clips, each containing 15 frames of a specific movement. The system achieved a test accuracy of 98%, indicating its robustness and efficiency in classifying body movements. This project demonstrates the potential of TensorFlow and MediaPipe in developing real-time human body action recognition systems for various applications. I have done this project for Mars game studio. You can check the demo of the project in 3 Youtube videos I have recorded and uploaded on youtube!
          </p>

          <a
            href="https://github.com/hamednasr/TensorFlow-Projects/blob/main/body_move_recognition_for_game(mediapipe_abdomen)_15fps.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://www.youtube.com/watch?v=7rAooRzc_qM&list=PLQaV6PCTazzo52mZbbRNaAzz6nTLqDtYS&index=2"
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
                <RiRadioButtonFill className="pr-1" /> TensorFlow
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Compter Vision 
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> LSTM
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mediapipe
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Numpy
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Scikit Learn
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

export default bodymove;
