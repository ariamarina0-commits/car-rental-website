import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import { faqItems } from "../../../data/faq";
import styles from "./FAQ.module.css";

function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (id: number) => {
    setOpenItem((currentItem) =>
      currentItem === id ? null : id
    );
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.heading}>
            <span>Frequently asked questions</span>

            <h2>
              Everything you need to know before your journey.
            </h2>

            <p>
              Find quick answers about booking, pick-up,
              documents and rental conditions.
            </p>
          </div>

          <div className={styles.list}>
            {faqItems.map((item) => {
              const isOpen = openItem === item.id;

              return (
                <article
                  key={item.id}
                  className={styles.item}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span>{item.question}</span>

                    <ChevronDown
                      size={21}
                      aria-hidden="true"
                      className={`${styles.icon} ${
                        isOpen ? styles.iconOpen : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className={styles.answer}
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
          <div className={styles.termsLinkWrapper}>
            <Link to="/terms" className={styles.termsLink}>
              View full rental policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;