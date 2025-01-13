import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://adityakumar262003:fqSdEay9L2x6yD8V@cluster0.3ohqb.mongodb.net/"
    )
    .then(() => {
      console.log("Database connected");
    });
};

export default connectDb;
