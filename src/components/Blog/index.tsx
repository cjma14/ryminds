import type { BlogTypes, Titles } from "../../types";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";

interface PropTypes {
  titles: Titles;
  blogs: {
    data: BlogTypes;
    slug: string;
  }[];
}

const Blog = ({ titles, blogs }: PropTypes) => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              tag: titles?.tag,
              title: titles?.title,
              description: titles?.desc,
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogs
            ?.slice(0, 3)
            .map((blog, key) => (
              <BlogItem blog={blog?.data} slug={blog?.slug} key={key} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
