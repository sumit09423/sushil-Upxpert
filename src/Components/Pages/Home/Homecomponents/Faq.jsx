import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const faqData = [
    {
      label: "What is Lorem Ipsum?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      label: "Why do we use it?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      label: "Where does it come from?",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      label: "Where does it come from?",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      label: "Where does it come from?",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      label: "Where does it come from?",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
  ];

  const FaqItem = ({ label, content }) => {
    const [isActive, setIsActive] = useState(false);

    const activateTab = () => {
      setIsActive(!isActive);
    };

    const innerStyle = {
      height: isActive ? "auto" : 0,
    };

    return (
      <div className="panel" role="tabpanel" aria-expanded={isActive}>
        <button className="panel__label" role="tab" onClick={activateTab}>
          {label}
        </button>
        <div
          className="panel__inner"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p className="panel__content">{content}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-5">
        <div className="content">
          <h1>Frequently Asked Questions</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            excepturi, illo harum soluta doloribus laboriosam cum impedit, quos
            iure maiores architecto rem temporibus placeat eum illum dicta.
            Reprehenderit, itaque totam!
          </p>
        </div>

        <div className="accordion">
          {faqData.map((item, index) => (
            <FaqItem key={index} label={item.label} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
