"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
// import { useSectionInView } from "../lib/hooks";
// import { useTheme } from "../context/theme-context";

export default function Timeline() {
  //   const { ref } = useSectionInView("Experience");
  //   const { theme } = useTheme();

  return (
    <section
      id="timeline"
      /*ref={ref}*/ className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-1 gap-8">
        <p className="py-8 uppercase text-3xl tracking-widest text-[#5651e5]">
          Timeline
        </p>
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{}}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-bold text-xl capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-xl text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
