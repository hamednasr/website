import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/About.jpg";

const About = () => {
  return (
    <div id="about" className="w-full  p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-3xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 text-xl text-justify">
            I am a machine learning engineer with a Google certification in Deep
            Learning TensorFlow. My technical expertise encompasses the
            utilization of advanced DL/ML frameworks such as TensorFlow,
            PyTorch, and Scikit-learn to develop intelligent algorithms capable
            of learning from data. Additionally, I excel in data manipulation
            and visualization, employing tools like Pandas, Matplotlib, and
            Seaborn. Furthermore, my proficiency spans across approximately 20
            AWS services, extending to Blockchain Technology and Solidity.
          </p>
          <p className="py-2 text-gray-700 text-xl text-justify">
            My academic foundation is fortified by a Masters degree from
            Concordia University in Canada, where I engaged in specialized
            coursework centered on data science and machine learning. This
            academic pursuit has significantly bolstered my theoretical
            comprehension, serving as a springboard for the practical
            applications I develop. I remain committed to continual learning,
            integrating new methodologies to enhance the efficacy of machine
            learning models.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-700 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className=" h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="/"
            width="280%"
            height="400%"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
