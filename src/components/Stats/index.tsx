import { motion } from "framer-motion";
import type { TitlesStatsFact } from "../../types";

interface PropTypes {
  titles: TitlesStatsFact;
  stats: {
    key: string;
    value: string;
  }[];
}

const FunFact = ({ titles, stats }: PropTypes) => {
  return (
    <>
      <section className="py-20 lg:py-22.5 px-9 md:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <img
            width={335}
            height={384}
            src={titles?.img}
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
            loading="lazy"
            decoding="async"
          />
          <img
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
            loading="lazy"
            decoding="async"
          />

          <img
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
            loading="lazy"
            decoding="async"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              {titles?.title}  {"   "}
              <span className="bg-gradient-to-r from-[#0eaffc] to-[#7612e5] bg-clip-text text-transparent">
                  {titles?.highlightedText}
              </span>
            </h2>
            <p className="mx-auto lg:w-11/12">{titles?.desc}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            {stats?.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 + index / 2 }}
                viewport={{ once: true }}
                className="animate_top text-center"
              >
                <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  {item?.value}
                </h3>
                <p className="text-lg lg:text-para2">{item?.key}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFact;
