"use client";
import { NextPage } from "next";
import React, { useState } from "react";

interface AccordionProps {
  content: {
    question: string;
    answer: string;
  }[];
}

const Accordion: NextPage<AccordionProps> = ({ content }) => {
  const [expandedFaq, setExpandedFaq] = useState<number>(0);

  if (!content.length) return null;

  return (
    <div className="flex flex-col rounded-[20px] py-5 px-4 lg:px-20 w-[90%] relative overflow-hidden mx-auto">
      {content.map((item, index) => (
        <React.Fragment key={index}>
          <div className="py-[30px] flex flex-col gap-5">
            <div
              className="flex justify-between gap-2 cursor-pointer"
              onClick={() => setExpandedFaq(expandedFaq === index ? -1 : index)}
            >
              <h3 className="text-sm md:text-base lg:text-xl font-medium">
                {item.question}
              </h3>
              {expandedFaq === index ? (
                <p className="text-xs md:text-sm lg:text-base font-medium">-</p>
              ) : (
                <p className="text-xs md:text-sm lg:text-base font-medium">+</p>
              )}
            </div>
            <p
              className={`text-xs md:text-sm lg:text-base w-[95%] lg:w-[90%] max-w-[1040px] font-medium opacity-60 transition-all duration-300 overflow-hidden ${
                expandedFaq === index ? "max-h-[100vh]" : "max-h-0"
              }`}
            >
              {item.answer}
            </p>
          </div>
          <div
            className={`${
              index === content.length - 1 && "hidden"
            } w-full h-[1px] bg-gray opacity-60`}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
