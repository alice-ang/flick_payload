import { CollectionConfig } from "payload/types";

const Companies: CollectionConfig = {
  slug: "companies",

  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "logo", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },

    {
      name: "content",
      type: "richText",
    },
  ],
};

export default Companies;
