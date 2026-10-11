import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { APIError, betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

const client = new MongoClient(uri);
const db = client.db("HireLoop");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        enum: ["seeker", "recruiter"],
        required: true,
      },
    },
  },

  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const allowed = ["seeker", "recruiter"];
          if (!allowed.includes(user.role as string)) {
            throw new APIError("BAD_REQUEST", {
              message: "Invalid role",
            });
          }
          return { data: user };
        },
      },
    },
  },
});
