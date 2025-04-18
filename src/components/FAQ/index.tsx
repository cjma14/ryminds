import { motion } from "framer-motion";
import { useState } from "react";
import FAQItem from "./FAQItem";
import type { Faq, TitlesFaq } from "../../types";

interface PropTypes {
  titles: TitlesFaq;
  faq: {
    data: Faq;
  }[];
}

const FAQ = ({ titles, faq }: PropTypes) => {
  const [activeFaq, setActiveFaq] = useState(1);
  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      <section className="overflow-hidden pb-12 px-5 md:px-0">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <img
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-2/5 lg:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                {titles?.tag}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {titles?.title} {"   "}
                <span className="bg-gradient-to-r from-[#0eaffc] to-[#7612e5] bg-clip-text text-transparent">
                  {titles?.highlightedText}
                </span>
              </h2>

              {/* <a
                href="#"
                className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover:pr-2">Know More</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a> */}
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-3/5 lg:w-1/2"
            >
              <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
                {faq.map((faq, key) => (
                  <FAQItem
                    key={key}
                    faqData={{
                      ...faq?.data,
                      id: key + 1,
                      activeFaq,
                      handleFaqToggle,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
