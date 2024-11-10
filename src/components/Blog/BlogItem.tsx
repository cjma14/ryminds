import { motion } from "framer-motion";
import type { BlogTypes } from "../../types";

const BlogItem = ({ blog, slug }: { blog: BlogTypes; slug: string }) => {
  const { cardImg, title, date, author } = blog;
  const dateObj = new Date(date);
  const options: any = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const formattedDate = dateObj?.toLocaleDateString("en-US", options);
  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <a href={`/blog/${slug}`} className="relative block aspect-[368/239]">
          <img src={cardImg} alt={title} loading="lazy" decoding="async" />
        </a>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <a href={`/blog/${slug}`}>{`${title.slice(0, 40)}...`}</a>
          </h3>
          <div className="flex justify-between items-center">
            <p className="line-clamp-3">{formattedDate}</p>
            <p>{author}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
