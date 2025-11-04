import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      enum: ["ADMIN", "USER"],
      default: ["USER"],
      required: true,
    },
  },
  { timestamps: true }
);

const MUser = mongoose.model("User", UserSchema);

export default MUser;
