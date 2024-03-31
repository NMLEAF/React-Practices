import React, { useState } from "react";
import "./Accordion.css";

const data = [
  {
    id: 0,
    number: 1,
    question: "How long do I have to return my chair?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ut facere doloremque doloribus dolorum inventore aperiam esse dolore, beatae voluptatum nemo earum culpa impedit maxime dicta atque ducimus ipsum alias.",
  },
  {
    id: 1,
    number: 2,
    question: "What is react ?",
    answer:
      "React is a library that is used for implementing functionality to our webites.",
  },
  {
    id: 2,
    number: 3,
    question: "How long do I have to return my chair?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ut facere doloremque doloribus dolorum inventore aperiam esse dolore, beatae voluptatum nemo earum culpa impedit maxime dicta atque ducimus ipsum alias.",
  },
];

const Accordion = () => {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          question={item.question}
          answer={item.answer}
          key={item.id}
          number={item.number}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ number, question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "item open" : "item"} onClick={() => setOpen(!open)}>
      <p className="number">{number <= 9 ? `0${number}` : number}</p>
      <p className="question">{question}</p>
      <span>{open ? "-" : "+"}</span>
      <div className="answer" style={open ? { display: "block" } : {}}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
