import type { FeatureTab } from "../../types";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, lightImg, darkImg, desc1, desc2 } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden md:block md:w-1/2">
          <img
            src={lightImg as string}
            alt={title as string}
            className="dark:hidden"
            loading="lazy"
            decoding="async"
          />
          <img
            src={darkImg as string}
            alt={title as string}
            className="hidden dark:block"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
