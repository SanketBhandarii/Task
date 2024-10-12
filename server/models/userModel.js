import mongoose, { Mongoose, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  social: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
