// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import tensorflowImg from "../public/assets/certificates/tensorflow.JPG";
import chatGPTImg from "../public/assets/certificates/chatgpt.JPG";
import chatGPTprogImg from "../public/assets/certificates/chatGPTprog.JPG";
import awsCloudImg from "../public/assets/certificates/awscloud.JPG";
import opencvImg from "../public/assets/certificates/opencv.JPG";
import devopsImg from "../public/assets/certificates/devops.JPG";
import sqladvImg from "../public/assets/certificates/sqladv.JPG";
import sqladminImg from "../public/assets/certificates/sqladmin.JPG";
import deepImg from "../public/assets/certificates/deep.JPG";
import pandasImg from "../public/assets/certificates/pandas.JPG";
import pandas2Img from "../public/assets/certificates/pandas2.JPG";
import powerbiImg from "../public/assets/certificates/powerbi.JPG";
import tableauImg from "../public/assets/certificates/tableau.JPG";

import CertificateItem from "./CertificateItem";

const Certificates = () => {
  return (
    <div id="certificates" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <p className="text-3xl tracking-widest uppercase text-[#5651e5]">
          Certificates
        </p>

        <br />

        <div className="grid md:grid-cols-2 gap-8">
          <CertificateItem
            title="TensorFlow Developer Certificate by Google"
            backgroundImg={tensorflowImg}
            projectUrl="https://www.credential.net/145c1228-af1d-49cb-a583-bbc89f4c9c17#gs.0twkgg"
          />

          <CertificateItem
            title="ChatGPT, Generative AI, Prompt Engineering"
            backgroundImg={chatGPTImg}
            projectUrl="https://www.udemy.com/certificate/UC-77140de5-d21b-49cc-b55b-cd3551a80365/"
          />
          <CertificateItem
            title="ChatGPT for Programmers: Build Python Apps in Seconds"
            backgroundImg={chatGPTprogImg}
            projectUrl="https://www.udemy.com/certificate/UC-587636c2-029e-4342-a324-bdcfabba9179/"
          />
          <CertificateItem
            title="Ultimate AWS Certified Cloud Practitioner"
            backgroundImg={awsCloudImg}
            projectUrl="https://www.udemy.com/certificate/UC-9c6378fe-23fa-4e3c-8f97-8bc35654be73/"
          />
          <CertificateItem
            title="Python for Computer Vision with OpenCV and Deep Learning"
            backgroundImg={opencvImg}
            projectUrl="https://www.udemy.com/certificate/UC-a4a2114e-7b1e-4803-9e5d-539363023478/"
          />
          <CertificateItem
            title=" DevOps, CI/CD(Continuous Integration/Delivery"
            backgroundImg={devopsImg}
            projectUrl="https://www.udemy.com/certificate/UC-59e40c0d-4cc2-4b9b-9969-0dc4e68305ce/"
          />

          <CertificateItem
            title="Advanced SQL: MySQL for Analytics and Business Intelligence "
            backgroundImg={sqladvImg}
            projectUrl="https://www.udemy.com/certificate/UC-f0f584e4-10bc-4e1e-b921-55d4f9429594/"
          />
          <CertificateItem
            title="MySQL Database Administration: Beginner SQL Database Design"
            backgroundImg={sqladminImg}
            projectUrl="https://www.udemy.com/certificate/UC-f05111d0-2f0d-427d-a486-9d44f19f2199/"
          />
          <CertificateItem
            title="A deep understanding of deep learning"
            backgroundImg={deepImg}
            projectUrl="https://www.udemy.com/certificate/UC-649cc941-6570-4dd3-abca-1d0aba590b26/"
          />
          <CertificateItem
            title="Data Analysis with Pandas and Python"
            backgroundImg={pandasImg}
            projectUrl="https://www.udemy.com/certificate/UC-329d9f5f-98ca-4792-ba8a-73de387e0b47/"
          />
          <CertificateItem
            title="The Complete Pandas Bootcamp 2021: Data Science with Python"
            backgroundImg={pandas2Img}
            projectUrl="https://www.udemy.com/certificate/UC-50a66d8a-ea24-41ce-add0-ef64a03bf93e/"
          />
          <CertificateItem
            title="Microsoft Power BI Desktop for Business Intelligence "
            backgroundImg={powerbiImg}
            projectUrl="https://concordia.udemy.com/certificate/UC-438de991-6bb0-44ca-9b2e-56aaceea0f81/"
          />
          <CertificateItem
            title="Tableau Advanced: Master Tableau in Data Science"
            backgroundImg={tableauImg}
            projectUrl="https://www.udemy.com/certificate/UC-156fd496-606f-467e-9d61-1b72c456689d/"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
