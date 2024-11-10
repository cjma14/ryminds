const Integrations = {
  name: "integrations",
  label: "Integrations",
  path: "src/content/integrations",
  // ui: {
  //   allowedActions: {
  //     create: false,
  //     delete: false,
  //   },
  // },
  fields: [
    {
      name: "integrations",
      label: "Image",
      type: "image",
      list: true,
    },
  ],
};

export default Integrations;
