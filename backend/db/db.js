import mongoose from "mongoose";
import "dotenv/config";

const connectToMongoDB = async () => {
 mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected successfully...😊"))
    .catch((err) => console.log("Failed to connect MongoDB"));
};

export default connectToMongoDB;
