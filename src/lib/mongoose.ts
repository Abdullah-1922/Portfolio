/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/mongodb.js
import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI as string);

    connection.isConnected = db.connections[0].readyState;

    console.log("connected to db");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default dbConnect;
