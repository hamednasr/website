import Image from "next/image";
import React from "react";
import awsImg from "../public/assets/projects/aws.jpg";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const aws = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={awsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">AWS Projects</h2>
          <h3>
            AWS / SageMakers / GroundTruth / Autopilot / Data Wrangler / EC2
            Launch
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-6">Overview</h2>
          <p className="text-justify text-xl">
            <strong>I have done some AWS projects:</strong>
            <br />
            <br /> 1) Predicting S&P 500 Price Prediction via AWS Autopilot (On
            AWS Sagemaker Studio)
            <br /> 2) Life Expectancy Prediction using AWS Sagemaker (On AWS
            Sagemaker Python SDK)
            <br /> 3) Predicting Cardiovascular Disease with AWS SageMaker
            XG-Boost (On AWS Sagemaker Python SDK)
            <br /> 4) Semantic Segmentation and labeling Images with AWS
            GroundTruth (On AWS Sagemaker Studio)
            <br /> 5) Data Analysis, Processing and Visualization with Data
            Wrangler (On AWS Sagemaker Studio)
            <br /> 6) EC2 Linux and Windows Servers Configuration and Launch
          </p>

          <a
            href="https://github.com/hamednasr/SageMaker/blob/main/life%20expectancy%20prediction.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code 1</button>
          </a>

          <a
            href="https://github.com/hamednasr/SageMaker/blob/main/predicting%20cardiovascular%20disease.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code 2</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SageMakers
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GroundTruth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Data Wrangler
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Autopilot
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> EC2 Launch
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

export default aws;
