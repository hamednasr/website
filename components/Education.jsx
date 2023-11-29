import React from "react";
import Image from "next/image";
// import Link from "next/link";
import concordiaImg from "../public/assets/concordia.jpg";
// import udemyImg from "../public/assets/certificates/logo.png";

const Education = () => {
  return (
    <div id="education" className="w-full p-2  items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-6">
          <p className="py-8 uppercase text-3xl tracking-widest text-[#5651e5]">
            Education
          </p>

          <Image
            src={concordiaImg}
            className="rounded-xl"
            alt="/"
            width="210%"
            height="70%"
          />

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>Master of Engineering </strong>{" "}
            <em className="italic">
              <small>Concordia University (2019-2021) GPA: 3.70</small>
            </em>
            <br />
            Machine Learning (A-) &emsp; Big Data for Smart City (A) &emsp;
            Building Information Modeling (A-) br &emsp; Project Management (A)
          </p>

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>Master of Project Management </strong>
            <br /> Project Management &emsp; Program Management &emsp; Portfolio
            Management &emsp; Financial Management &emsp; Strategic Management
            &emsp; Human Resource Management &emsp; Organizational Theory
          </p>

          <p className="py-4 text-gray-600 text-xl ">
            <strong>Bachelor of Engineering </strong>
            <br /> Fundamentals of Computer Programming &emsp;Theory of
            Probability and Its Applications &emsp; Engineering Statistics
            &emsp; Numerical Computations &emsp; Operations Research (Linear
            Programming) &emsp; Operations Research (Non-Linear Programming)
            &emsp; Principles of Simulation &emsp; Statistical Quality Control
            &emsp; Fundamentals of Electrical Engineering &emsp; Engineering
            Economics
            {"  "}
          </p>

          <br />

          <p className="py-4 text-gray-600 text-xl text-justify">
            <strong>ZTM Academy, Coursera, Udemy </strong>{" "}
            <em className="italic">
              <small>(2021-2023)</small>
            </em>
            <br />
            TensorFlow &emsp;PyTorch <br /> TensorFlow: Data and Deployment
            Specialization <br /> TensorFlow Developer Professional Certificate
            <br /> TensorFlow: Advanced Techniques Specialization
            <br /> Machine Learning Engineering for Production (MLOps)
            Specialization
            <br /> Solidity &emsp; Blockchain &emsp; Bitcoin &emsp; etc.
          </p>
        </div>
        {/* <div className="h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={JournalsImg}
            className="rounded-xl"
            alt="/"
            width="300%"
            height="450%"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Education;
