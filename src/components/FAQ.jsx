import { ArrowDown, ArrowUp } from "react-feather";
import styles from "./FAQ.module.css";
import { useState } from "react";

export function FAQ() {
  const faqAccordionContent = [
    {
      section: "What should I do if I’m missing a part from my package?",
      response:
        "If any items are missing, contact our customer support team. We’ll promptly resolve the issue and ensure you receive the complete order.",
    },
    {
      section: "How can I check the status of my order?",
      response:
        "To check the status of your order, check your email link. Navigate to the Order History section, where you’ll find real-time updates on your order’s processing, shipping, and delivery status. If you have any concerns, our customer support team is here to assist you.",
    },
    {
      section: "Can I get replacement parts for a product purchased years ago?",
      response:
        "Certainly, we keep all our furniture lines sustainably alive! If you’ve misplaced hardware from an item that you purchased several years ago, contact our support team and we will provide you with a replacement.",
    },
  ];
  const [activeQuestion, setActiveQuestion] = useState();

  return (
    <div className={styles.faq}>
      <h3>FAQ</h3>
      <ul>
        {faqAccordionContent.map((content, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setActiveQuestion(index);
              }}
            >
              <div className={styles.content}>
                <h4>{content.section} </h4>
                <div className={styles.columnToggle}>
                  {activeQuestion === index ? <ArrowUp /> : <ArrowDown />}
                </div>
              </div>
              {activeQuestion === index && <p>{content.response}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
