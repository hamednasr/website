import Image from "next/image";
import React from "react";
import foodImg from "../public/assets/projects/food.jpg";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const food = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={foodImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
            101 Food Image Classification
          </h2>
          <h3>TensorFlow / Compter Vision / Transfer Learning</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-6">Overview</h2>
          <p className="text-justify text-xl">
          In this project I developed and trained a CNN Model via TensorFlow Functional API and Transfer learning. EfficientNetB0 Model was downloaded and I made the last 30 layers of the model Trainable. Then trained the model with training data (101 different categories of food images) and with early stopping and model checkpoint callbacks. Finally, the fine tuned model performance was evaluated using confusion matrix, classification report, worst predicted classes diagram and tensorboard graphs.
          </p>
          <a
            href="https://github.com/hamednasr/TensorFlow-Projects/blob/main/Food_Vision_101.ipynb"
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
                <RiRadioButtonFill className="pr-1" /> TensorFlow
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Compter Vision 
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Transfer Learning
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> EfficientNet
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Scikit Learn
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Matplotlib
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

export default food;
