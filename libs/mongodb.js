import mongoose from "mongoose";

const connectMongoDB = async () => {
  const Uri = process.env.MONGODB_URI;
  try {
    await mongoose.connect(Uri);
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
