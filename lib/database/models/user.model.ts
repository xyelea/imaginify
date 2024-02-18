import { Schema, model, models } from "mongoose";

// Define the schema for the User document
const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true }, // Clerk ID field, required and unique
  email: { type: String, required: true, unique: true }, // Email field, required and unique
  username: { type: String, required: true, unique: true }, // Username field, required and unique
  photo: { type: String, required: true }, // Photo field, required
  firstName: { type: String }, // First name field
  lastName: { type: String }, // Last name field
  planId: { type: Number, default: 1 }, // Plan ID field with default value of 1
  creditBalance: { type: Number, default: 10 }, // Credit balance field with default value of 10
});

// Create or retrieve the User model based on the schema
const User = models?.User || model("User", UserSchema);

// Export the User model
export default User;
