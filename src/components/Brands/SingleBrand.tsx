import { motion } from "framer-motion";

const SingleBrand = ({
  brand,
  lightBrand,
  id,
}: {
  brand: string;
  lightBrand: string;
  id: number;
}) => {
  return (
    <>
      <motion.a
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
        transition={{ duration: 1, delay: (id + 1) / 4 }}
        viewport={{ once: true }}
        href={"#"}
        className="animate_top mx-w-full relative block h-10 w-[98px]"
      >
        <img
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
          src={lightBrand}
          alt={"brand image"}
          loading="lazy"
          decoding="async"
        />
        <img
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
          src={brand}
          alt={"brand image"}
          loading="lazy"
          decoding="async"
        />
      </motion.a>
    </>
  );
};

export default SingleBrand;
