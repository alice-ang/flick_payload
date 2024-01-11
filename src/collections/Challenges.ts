import { CollectionConfig } from "payload/types";

const Challenges: CollectionConfig = {
  slug: "challenges",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "slider", // required
      type: "array", // required
      label: "Image Slider",
      required: true,
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: "Slide",
        plural: "Slides",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "startDate",
          type: "date",
          required: true,
          admin: {
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
        {
          name: "endDate",
          type: "date",
          required: true,
          admin: {
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
      ],
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "host",
      type: "relationship",
      relationTo: "companies",
      hasMany: false,
      required: true,
    },
    {
      name: "participants",
      type: "relationship",
      relationTo: ["participants"],
      hasMany: true,
    },
  ],
};

export default Challenges;
