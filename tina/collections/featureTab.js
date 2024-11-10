const FeatureTab = {
  name: "featureTab",
  label: "Extended Features",
  path: "src/content/featureTab",
  fields: [
    {
      name: "featureName",
      label: "Feature Name",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: "title",
      label: "Feature Title",
      type: "string",
    },
    {
      name: "lightImg",
      label: "Light Image",
      type: "image",
    },
    {
      name: "darkImg",
      label: "Dark Image",
      type: "image",
    },
    {
      name: "desc",
      label: "Description",
      type: "rich-text",
      isBody: true,
    },
  ],
};

export default FeatureTab;
