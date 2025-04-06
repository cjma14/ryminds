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
      <div
        className="flex flex-col gap-4 items-center justify-center"
      >
        <img
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden aspect-[4/3] w-[100px] object-contain"
          src={lightBrand}
          alt={"brand image"}
          loading="lazy"
          decoding="async"
        />
        <img
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block aspect-[4/3] w-[100px] object-contain"
          src={brand}
          alt={"brand image"}
          loading="lazy"
          decoding="async"
        />
      </div>
    </>
  );
};

export default SingleBrand;
