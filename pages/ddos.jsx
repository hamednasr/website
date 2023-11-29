import Image from "next/image";
import React from "react";
import ddosImg from "../public/assets/projects/ddos.jpg";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ddos = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ddosImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
          Distributed Denial-of-Service Attack (DDoS) Prediction
          </h2>
          <h3>AdaBoost / Logistic Regression / SVM / ect.</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-6">Overview</h2>
          <p className="text-justify text-xl">
                Today, Distributed Denial of Services (DDoS) attacks are one of 
                the most challenging problems which have caused numerous problems 
                for computers and servers throughout the Internet world.

              <br /><br /> In this project, the goal was evaluating the performance of prestigious
              machine learning-based classifiers to predict DDoS attacks in terms of 
              classification metrics, training, and prediction. The classifiers used 
                in the project which are k-nearest neighbors (k-NN), support vector machine (SVM),
                Logistic Regression, Random Forest, AdaBoost, Multilayer Perceptron (MLB),
                Convolutional Neural Network (CNN), and Gaussian Naïve Bayesian.
                The performance of each classifier evaluated and compared in two
                cases with different perspectives: evaluating models from the best features 
                of the training set, and considering all features.         
     
      </p>
          
          <a
            href="https://github.com/hamednasr/DDoS-Attacks"
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
                <RiRadioButtonFill className="pr-1" /> AdaBoost
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Support Vector Machine
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Logistic Regression
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Random Forest
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Multilayer Perceptron
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Gaussian Naïve Bayesian
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

export default ddos;
