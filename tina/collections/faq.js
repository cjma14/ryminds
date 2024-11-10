const Faq = {
  name: "faq",
  label: "FAQ",
  path: "src/content/faq",
  fields: [
    {
      name: "question",
      label: "Question",
      type: "string",
      required: true,
    },
    {
      name: "ans",
      label: "Answer",
      type: "string",
      component: "textarea",
      required: true,
    },
  ],
};

export default Faq;
