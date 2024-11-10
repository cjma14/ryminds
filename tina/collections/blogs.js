const Blogs = {
  name: "blogs",
  label: "Blogs",
  path: "src/content/blogs",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: "date",
      label: "Date",
      type: "datetime",
      required: true,
    },
    {
      name: "category",
      label: "category",
      type: "string",
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "string",
      required: true,
    },
    {
      name: "tags",
      label: "Tags",
      type: "string",
      list: true,
    },
    {
      name: "bannerImg",
      label: "Banner Image",
      type: "image",
      required: true,
    },
    {
      name: "cardImg",
      label: "Preview Image",
      type: "image",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "rich-text",
      required: true,
      isBody: true,
    },
  ],
};

export default Blogs;
