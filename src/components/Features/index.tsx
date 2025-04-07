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
  const { title, tag, desc, highlightedText } = titles;
  return (
    <>
      <section id="services" className="py-12 px-5 md:px-0">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: title,
              highlightedText: highlightedText,
              tag: tag,
              description: desc,
            }}
          />
          <div className="mt-12 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
            {data.map((feature, key) => (
              <SingleFeature feature={feature?.data} id={key} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
