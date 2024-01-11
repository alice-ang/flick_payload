import { CollectionConfig } from "payload/types";

const Participants: CollectionConfig = {
  slug: "participants",
  admin: {
    useAsTitle: "userId",
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
    },
    {
      name: "joinedAt",
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
