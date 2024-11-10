const Brands = {
  name: "brands",
  label: "Brands",
  path: "src/content/brands",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "brandsDark",
      label: "Brand Dark Image",
      type: "image",
      list: true,
    },
    {
      name: "brandsLight",
      label: "Brand Light Image",
      type: "image",
      list: true,
    },
  ],
};

export default Brands;
