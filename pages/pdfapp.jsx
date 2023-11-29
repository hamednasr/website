import Image from "next/image";
import React from "react";
import PDFAppImg from "../public/assets/projects/pdfapp.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const pdfapp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={PDFAppImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
          Chat with PDF Documents.
          </h2>
          <h3>Langchain / Large Language Model / Streamlit</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-6">Overview</h2>
          <p className="text-justify text-xl">
              This PDF Chat App is a unique application that leverages Langchain and Google Palm LLM to enable users to engage in conversational interactions with PDF documents.
              <br/>

                <br/><strong>1) Conversation with PDF documents: </strong> Users can chat with PDF documents as if they were engaging in a conversation with another person.
                <br/><strong>2) Langchain integration: </strong>The app uses Langchain for natural language processing and understanding user input.
                <br/><strong>3) Google Palm LLM: </strong> Google Palm LLM is utilized to generate context-aware responses and improve the conversational experience.
          </p>



          <a
            href="https://github.com/hamednasr/ChatPDF"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://chatwithpdf2.streamlit.app/"
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

export default pdfapp;
