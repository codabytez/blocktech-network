import { NextPage } from "next";
import Accordion from "@/modules/faq/accordion";

const faqData = [
  {
    question: "What is the minimum investment amount?",
    answer:
      "The minimum investment amount is $1000. You can invest any amount above $1000.",
  },
  {
    question: "What is the maximum investment amount?",
    answer:
      "The maximum investment amount is $5000. You can invest any amount below $5000.",
  },
  {
    question: "What is the minimum investment period?",
    answer:
      "The minimum investment period is 6 months. You can invest for any period above 6 months.",
  },
  {
    question: "What is the maximum investment period?",
    answer:
      "The maximum investment period is 5 years. You can invest for any period below 5 years.",
  },
  {
    question: "What is the interest rate?",
    answer: "The interest rate is 5% per annum. The interest is paid monthly.",
  },
  {
    question: "How can I invest?",
    answer:
      "You can invest by visiting our website and clicking on the invest button. You can also visit our office and invest in person.",
  },
  {
    question: "How can I withdraw my investment?",
    answer:
      "You can withdraw your investment by visiting our website and clicking on the withdraw button. You can also visit our office and withdraw in person.",
  },
  {
    question: "What is the withdrawal fee?",
    answer:
      "The withdrawal fee is 1% of the investment amount. The fee is deducted from the investment amount at the time of withdrawal.",
  },
  {
    question: "What is the investment fee?",
    answer:
      "The investment fee is 1% of the investment amount. The fee is deducted from the investment amount at the time of investment.",
  },
  {
    question: "What is the risk involved in investing?",
    answer:
      "The risk involved in investing is minimal. We invest in safe and secure assets to ensure the safety of your investment.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support by visiting our website and clicking on the contact us button. You can also call our customer support number.",
  },
];

const FAQ: NextPage = () => {
  return (
    <div>
      <h2 className="text-center text-2xl md:text-4xl font-bold">
        Deposit Protection
      </h2>
      <Accordion content={faqData} />;
    </div>
  );
};

export default FAQ;
