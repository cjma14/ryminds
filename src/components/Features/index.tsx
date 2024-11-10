import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import type { Features, TitlesAbout } from "../../types";

interface PropTypes {
  data: {
    data: Features;
  }[];
  titles: TitlesAbout;
}

const Feature = ({ data, titles }: PropTypes) => {
  const { title, tag, desc } = titles;
  return (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: title,
              subtitle: tag,
              description: desc,
            }}
          />
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {data.map((feature, key) => (
              <SingleFeature feature={feature?.data} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
