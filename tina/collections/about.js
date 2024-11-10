const About = {
  name: "about",
  label: "About Section Points",
  path: "src/content/about",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "subTitle",
      label: "Sub Title",
      type: "string",
      required: true,
    },
  ],
};

export default About;
