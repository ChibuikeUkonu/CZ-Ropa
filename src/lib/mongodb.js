import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  const db = await mongoose.connect(MONGODB_URI);

  isConnected = db.connections[0].readyState;
};