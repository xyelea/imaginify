import mongoose, { Mongoose } from "mongoose";

// MongoDB connection URL
const MONGODB_URL = process.env.MONGODB_URL;

// Interface for storing the Mongoose connection and promise
interface MongooseConnection {
  conn: Mongoose | null; // Mongoose connection object
  promise: Promise<Mongoose> | null; // Promise for connecting to MongoDB
}

// Cached Mongoose connection object and promise
let cached: MongooseConnection = (global as any).mongoose;

// If there's no cached connection, initialize it
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

/**
 * Function to connect to MongoDB database
 * @returns {Promise<Mongoose>} Mongoose connection object
 */
export const connectToDatabase = async () => {
  // If connection already exists, return it
  if (cached.conn) return cached.conn;

  // If MongoDB URL is not provided, throw an error
  if (!MONGODB_URL) throw new Error(`Missing MongoDB Url`);

  // Connect to MongoDB and store the connection promise
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "imaginify", // Database name
      bufferCommands: false, // Disable command buffering
    });

  // Await the connection promise and store the connection object
  cached.conn = await cached.promise;

  // Return the connection object
  return cached.conn;
};
