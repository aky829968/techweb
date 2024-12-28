import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [4, "Password must be more then four charcters"],
  },
  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student",
  },
  profile: {
    type: String,
  },
  certificates: [
    {
      type: String,
    },
  ],
});
export const userModel = mongoose.model("user", userSchema);
