import type { Review } from "../../types";

const SingleTestimonial = ({ reviewData }: { reviewData: Review }) => {
  const { user, occupation, img, review } = reviewData;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {user}
          </h3>
          <p>{occupation}</p>
        </div>
        <img
          width={60}
          height={50}
          className=""
          src={img}
          alt={user}
          loading="lazy"
          decoding="async"
        />
      </div>

      <p>{review}</p>
    </div>
  );
};

export default SingleTestimonial;
