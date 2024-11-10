const Stats = {
  name: "stats",
  label: "Stats",
  path: "src/content/stats",
  fields: [
    {
      name: "item",
      label: "item",
      type: "object",
      list: true,
      fields: [
        {
          name: "key",
          label: "Key",
          type: "string",
        },
        {
          name: "value",
          label: "Value",
          type: "string",
        },
      ],
    },
  ],
};

export default Stats;
