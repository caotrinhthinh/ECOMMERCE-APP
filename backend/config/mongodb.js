import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected");
    });
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
