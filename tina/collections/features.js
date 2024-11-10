const Features = {
  name: "features",
  label: "Features",
  path: "src/content/features",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: "desc",
      label: "Description",
      component: "textarea",
      type: "string",
      required: true,
    },
    {
      name: "img",
      label: "Image",
      type: "image",
      required: true,
    },
  ],
};

export default Features;
