import { CollectionConfig } from "payload/types";

const Participants: CollectionConfig = {
  slug: "participants",

  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "userId",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "email", // required
      type: "email", // required
      label: "Participant email",
      required: true,
    },
    {
      name: "joinedDate",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyy",
        },
      },
    },
  ],
};

export default Participants;
