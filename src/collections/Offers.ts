import { CollectionConfig } from "payload/types";

const Offers: CollectionConfig = {
  slug: "offers",

  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "slider", // required
      type: "array", // required
      label: "Image Slider",
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
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "startDate",
          type: "date",
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
    },
    {
      name: "featured", // required
      type: "checkbox", // required
      label: "Make this a featured offer",
      defaultValue: false,
    },
    {
      name: "company",
      type: "relationship",
      relationTo: "companies",
      hasMany: false,
    },
  ],
};

export default Offers;
