import { motion } from "framer-motion";

interface PropTypes {
  feature: {
    title: string;
    desc: string;
    img: string;
  };
  id: number;
}

const SingleFeature = ({ feature, id }: PropTypes) => {
  const { img, title, desc } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: (id + 1) / 4 }}
        viewport={{ once: true }}
        className="rounded-lg border border-white bg-white p-7.5 shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          <img
            src={img}
            width={36}
            height={36}
            alt="title"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3> 
        <p>{desc}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
