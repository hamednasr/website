import React from "react";
import Image from "next/image";
// import Link from "next/link";
import JournalsImg from "../public/assets/journals.jpg";

const Publications = () => {
  return (
    <div id="publications" className="w-full  p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-8 uppercase text-3xl tracking-widest text-[#5651e5]">
            Publications
          </p>

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>Hamed Nasr, </strong> Exploring Crime Rate Trends and
            Forecasting Future Patterns in Toronto City using Police MCI Data
            and Deep Learning, {"  "}
            <em className="italic">
              Submitted to Computers, Environment and Urban System (2023)
            </em>
          </p>

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>H. Nasr, M.H. Sobhiyah, V. Yousefi,</strong> Project
            Portfolio Selection via Harmony Search Algorithm and Modern
            Portfolio Theory,{"  "}
            <em className="italic">
              Procedia - Social and Behavioral Sciences. 226 (2016) 51-58
            </em>
          </p>

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>A. Kaveh, H. Nasr, </strong> Solving the conditional and
            unconditional p-center problem with modified harmony search
            Algorithm: A real case study, {"  "}
            <em className="italic">Scientia Iranica.18(4) (2011)867–877</em>
          </p>

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>A. Kaveh, H. Nasr,</strong> Hybrid harmony search Algorithm
            for conditional p-median problems,{"  "}
            <em className="italic">
              International Journal of Civil Engineering. 10(1) (2012) 32-36
            </em>
          </p>

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>
              F. Barzinpour, S.B. Ebrahimi, S.M. Hasheminejad, H. Nasr,{" "}
            </strong>{" "}
            Project Comparing the accuracy of the model Meta heuristic and
            Econometric in forecasting of financial time series with long-term
            memory,{"  "}
            <em className="italic">
              Journal of Financial Research, 13(31) (2012) 1-22
            </em>
          </p>

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>Hamed Nasr</strong>, Harmony Search Algorithm
            <em className="italic"> (In Persian)</em>
          </p>

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>Hamed Nasr</strong>, Project Ethics
            <em className="italic"> (Translated to Persian)</em>
          </p>
        </div>
        <div className="h-auto m-auto rounded-xl flex items-center justify-center p-4  shadow-xl shadow-gray-400  hover:scale-105 ease-in duration-300 ">
          <Image
            src={JournalsImg}
            className="rounded-xl"
            alt="/"
            width="300%"
            height="450%"
          />
        </div>
      </div>
    </div>
  );
};

export default Publications;
