import { motion } from "framer-motion";
import type { TitlesAbout } from "../../types";

interface PropTypes {
  titles: TitlesAbout;
  data: {
    data: {
      title: "string";
      subTitle: "string";
    };
  }[];
}

const AboutSection = ({ titles, data }: PropTypes) => {
  return (
    <>
      <section id="about-us" className="overflow-hidden pb-12 px-5 md:px-0">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <img
                src={titles?.lightImg}
                alt="About"
                className="dark:hidden"
                loading="lazy"
                decoding="async"
              />
              <img
                src={titles?.darkImg}
                alt="About"
                className="hidden dark:block"
                loading="lazy"
                decoding="async"
              />
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              {/* <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "}
                {titles?.tag}
              </span> */}
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {titles?.title} {" "} 
                <span 
                  className="bg-gradient-to-r from-[#0eaffc] to-[#7612e5] bg-clip-text text-transparent">
                    {titles?.highlightedText}
                </span>
              </h2>
              <p>{titles?.desc}</p>

              {data?.map((item, index) => (
                <div key={index} className="mt-7.5 flex items-center gap-5">
                  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      0{index + 1}
                    </p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      {item?.data?.title}
                    </h3>
                    <p className="text-md">{item?.data?.subTitle}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
