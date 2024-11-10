const Prices = {
  name: "prices",
  label: "Prices",
  path: "src/content/prices",
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
      name: "price",
      label: "Price",
      type: "number",
      required: true,
    },
    {
      name: "link",
      label: "Link",
      type: "string",
    },
    {
      name: "type",
      label: "Subscription Plan",
      type: "string",
      component: "select",
      options: ["Month", "Year"],
    },
    {
      name: "points",
      label: "Points",
      type: "string",
      list: true,
    },
  ],
};

export default Prices;
