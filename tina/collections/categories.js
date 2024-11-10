const Categories = {
  name: "categories",
  label: "Categories",
  path: "src/content/categories",
  fields: [
    {
      name: "category",
      label: "Category",
      type: "string",
      isTitle: true,
      required: true,
    },
  ],
};

export default Categories;
