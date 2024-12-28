import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/techweb").then(() => {
    console.log("Database connected");
  });
};

export default connectDb;
