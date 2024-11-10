const SiteConfig = {
  name: "config",
  label: "Site Config",
  path: "src/content/siteConfig",
  fields: [
    {
      name: "logoLight",
      label: "Light Logo Image",
      type: "image",
      required: true,
    },
    {
      name: "logoDark",
      label: "Dark Logo Image",
      type: "image",
      required: true,
    },
    {
      name: "siteName",
      label: "Site Name",
      type: "string",
      required: true,
    },
    {
      name: "desc",
      label: "Site Description",
      type: "string",
      required: true,
    },
    {
      name: "contact",
      label: "contact",
      type: "object",
      required: true,
      fields: [
        {
          name: "location",
          label: "Location",
          component: "textarea",
          type: "string",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "string",
          required: true,
        },
        {
          name: "number",
          label: "Contact Number",
          type: "number",
          required: true,
        },
      ],
    },
    {
      name: "links",
      label: "Social Links",
      type: "object",
      fields: [
        {
          name: "fb",
          label: "Facebook",
          type: "string",
          required: true,
        },
        {
          name: "twitter",
          label: "Twitter / X",
          type: "string",
          required: true,
        },
        {
          name: "linkedIn",
          label: "Linked In",
          type: "string",
          required: true,
        },
      ],
    },
  ],
};

export default SiteConfig;
