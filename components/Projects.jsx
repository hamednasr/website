// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import EncoderDecoderImg from "../public/assets/projects/encoderdecoder.jpg";
import GPTImg from "../public/assets/projects/gpt.jpg";
import TravelAppImg from "../public/assets/projects/travelapp.jpg";
import PDFAppImg from "../public/assets/projects/pdfapp.jpg";
import onlinedocsImg from "../public/assets/projects/onlinedocs.jpg";
import TranslationHFImg from "../public/assets/projects/translationHF.jpg";
import sentimentHFImg from "../public/assets/projects/sentimentHF.jpg";
import sentenceClsImg from "../public/assets/projects/sentencecls.jpg";
import tweeterImg from "../public/assets/projects/tweeter.jpg";
import plantdiseaseImg from "../public/assets/projects/plantdisease.jpg";
import bodyMoveImg from "../public/assets/projects/bodymove.jpg";
import autoencoderImg from "../public/assets/projects/autoencoder.jpg";
import foodImg from "../public/assets/projects/food.jpg";
import GanImg from "../public/assets/projects/gan.jpg";
import awsImg from "../public/assets/projects/aws.jpg";
import bitcoinImg from "../public/assets/projects/bitcoin.jpg";
import torontoImg from "../public/assets/projects/toronto.jpg";
import ddosImg from "../public/assets/projects/ddos.jpg";
import sqlImg from "../public/assets/projects/sql.jpg";
import olympicImg from "../public/assets/projects/olympic.jpg";
import fundraisingImg from "../public/assets/projects/fundraising.jpg";
import lotteryImg from "../public/assets/projects/lottery.jpg";
import voteImg from "../public/assets/projects/vote.jpg";
import icoImg from "../public/assets/projects/ico.jpg";

import ProjectItem from "./ProjectItem";
// import ProjectTag from "./ProjectTag";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-20">
      <div className="max-w-[1240px] mx-auto px-2 py-10">
        <p className="text-3xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>

        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className=" bg-gradient-to-r from-green-100 to-blue-200 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-[#1402ba]"
              style={{ fontSize: "1.75rem", color: "#1402ba" }}
            >
              Transformers, LLMs, Langchain, NLP
            </h2>
          </div>
        </div>

        <br />

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Implementing Encoder-Decoder Transformer"
            backgroundImg={EncoderDecoderImg}
            projectUrl="/encoderdecoder"
            tech="Transformer/PyTorch"
          />
          <ProjectItem
            title="Implementing Decoder Transformer (GPT)"
            backgroundImg={GPTImg}
            projectUrl="/GPT"
            tech="Transformer/PyTorch"
          />
          <ProjectItem
            title="Travel Recommender App with Langchain and LLM"
            backgroundImg={TravelAppImg}
            projectUrl="/travel"
            tech="LLM/langchain"
          />
          <ProjectItem
            title="Chat with PDF Documents"
            backgroundImg={PDFAppImg}
            projectUrl="/pdfapp"
            tech="LLM/langchain"
          />
          <ProjectItem
            title="Chat with Online Documents"
            backgroundImg={onlinedocsImg}
            projectUrl="/onlinedocs"
            tech="LLM/langchain"
          />
          <ProjectItem
            title="Fine Tunning Hugging Face Machine Translation Model"
            backgroundImg={TranslationHFImg}
            projectUrl="/translationHF"
            tech="Transformers/HuggingFace/LLM"
          />
          <ProjectItem
            title="Fine Tunning Hugging Face Sentiment Analysis Model"
            backgroundImg={sentimentHFImg}
            projectUrl="/sentimentHF"
            tech="Transformers/HuggingFace/LLM"
          />
          <ProjectItem
            title="Paper Abstract Sentence Classification"
            backgroundImg={sentenceClsImg}
            projectUrl="/sentencecls"
            tech="TensorFlow/NLP/LSTM"
          />
          <ProjectItem
            title="Analyzing Tweets"
            backgroundImg={tweeterImg}
            projectUrl="/tweets"
            tech="TensorFlow/NLP/LSTM"
          />
        </div>
        <br />
        <br />
        <br />

        <div className="bg-gradient-to-r from-green-100 to-blue-200 py-6 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100">
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-[#1402ba]"
              style={{ fontSize: "1.75rem", color: "#1402ba" }}
            >
              Computer Vision, Image Processing
            </h2>
          </div>
        </div>
        <br />

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Plant Disease Detection"
            backgroundImg={plantdiseaseImg}
            projectUrl="/plantdisease"
            tech="TensorFlow/Computer Vision"
          />
          <ProjectItem
            title="Body Movement Detection"
            backgroundImg={bodyMoveImg}
            projectUrl="/bodymove"
            tech="TensorFlow/Computer Vision/Mediapipe"
          />
          <ProjectItem
            title="Image Reconstruction with Autoencoders"
            backgroundImg={autoencoderImg}
            projectUrl="/autoencoder"
            tech="PyTorch/Compter Vision/Autoencoder"
          />
          <ProjectItem
            title="Food Image Classification"
            backgroundImg={foodImg}
            projectUrl="/food"
            tech="TensorFlow/Compter Vision/Transfer Learning"
          />
          <ProjectItem
            title=" GANs for FMNIST"
            backgroundImg={GanImg}
            projectUrl="/GAN"
            tech="PyTorch/Compter Vision/GANs"
          />
        </div>
        <br />
        <br />
        <br />

        <div className=" bg-gradient-to-r from-green-100 to-blue-200 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-[#1402ba]"
              style={{ fontSize: "1.75rem", color: "#1402ba" }}
            >
              Time Series Analysis, Regression
            </h2>
          </div>
        </div>

        <br />

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Predicting Bitcoin Price"
            backgroundImg={bitcoinImg}
            projectUrl="/bitcoin"
            tech="TensorFlow/Time Series Forecasting/Pandas"
          />
          <ProjectItem
            title="Exploring and Predicting Crime Trends In Toronto"
            backgroundImg={torontoImg}
            projectUrl="/toronto"
            tech="TensorFlow/Time Series Forecasting/Pandas"
          />
        </div>

        <br />
        <br />
        <br />
        <div className=" bg-gradient-to-r from-green-100 to-blue-200 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-[#1402ba]"
              style={{ fontSize: "1.75rem", color: "#1402ba" }}
            >
              Traditional Machine Learning Algorithms
            </h2>
          </div>
        </div>
        <br />

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="DDoS Attack Prediction"
            backgroundImg={ddosImg}
            projectUrl="/ddos"
            tech="AdaBoost/SVM/Random Forest/k-NN/ect."
          />
        </div>
        <br />
        <br />
        <br />
        <div className=" bg-gradient-to-r from-green-100 to-blue-200 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[#1402ba]">AWS</h2>
          </div>
        </div>
        <br />

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="AWS Projects"
            backgroundImg={awsImg}
            projectUrl="/aws"
            tech="AWS/SageMakers/GroundTruth/Autopilot/Data Wrangler/EC2 Launch"
          />
        </div>
        <br />
        <br />
        <br />
        <div className=" bg-gradient-to-r from-green-100 to-blue-200 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-[#1402ba]"
              style={{ fontSize: "1.75rem", color: "#1402ba" }}
            >
              SQL, Web Analytics, Data analysis
            </h2>
          </div>
        </div>

        <br />

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Web Analytics using MySQL"
            backgroundImg={sqlImg}
            projectUrl="/sql"
            tech="MySQL/Web Analytics/Data Analysis"
          />
          <ProjectItem
            title="Olympic Games Data Analysis"
            backgroundImg={olympicImg}
            projectUrl="/olympic"
            tech="Pandas / Data Dnalysis"
          />
        </div>
        <br />
        <br />
        <br />
        <div className=" bg-gradient-to-r from-green-100 to-blue-100 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="flex flex-col items-center justify-center">
            <h2
              style={{ fontSize: "1.75rem", color: "#1402ba" }}
              className="text-[#1402ba]"
            >
              Blockchain,Smart Contracts, DApp
            </h2>
          </div>
        </div>

        <br />

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Fundraising DApp on the Blockchain"
            backgroundImg={fundraisingImg}
            projectUrl="/fundraising"
            tech="Blockchain / Solidity / DApp"
          />
          <ProjectItem
            title="Lottery Smart Contract"
            backgroundImg={lotteryImg}
            projectUrl="/lottery"
            tech="Blockchain / Solidity / Smart Contract"
          />
          <ProjectItem
            title="Voting Smart Contract"
            backgroundImg={voteImg}
            projectUrl="/vote"
            tech="Blockchain / Solidity / Smart Contract"
          />
          <ProjectItem
            title="ICO (Initial Coin Offering)"
            backgroundImg={icoImg}
            projectUrl="/ico"
            tech="Blockchain / Solidity / Smart Contract"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
