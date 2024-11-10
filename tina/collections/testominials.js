const Testominials = {
  name: "testimonials",
  label: "Testimonials",
  path: "src/content/testimonials",
  fields: [
    {
      name: "user",
      label: "User Name",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "img",
      label: "Image",
      type: "image",
      required: true,
    },
    {
      name: "occupation",
      label: "Occupation",
      type: "string",
      required: true,
    },
    {
      name: "review",
      label: "Review",
      type: "string",
      component: "textarea",
      required: true,
    },
  ],
};

export default Testominials;
