import mongoose from "mongoose";

const connectDB = async () => {
    console.log("Connecting to database...");
    console.log(process.env.MONGODB_URI);
    return mongoose.connect(process.env.MONGODB_URI as string);
};

export default connectDB;