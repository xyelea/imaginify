import { Schema, model, models } from "mongoose";

// Define the schema for the Transaction document
const TransactionSchema = new Schema({
  createdAt: { type: Date, default: Date.now }, // Created at field with default value of current date
  stripeId: { type: String, required: true, unique: true }, // Stripe ID field, required and unique
  amount: { type: Number, required: true }, // Amount field, required
  plan: { type: String }, // Plan field
  credits: { type: Number }, // Credits field
  buyer: { type: Schema.Types.ObjectId, ref: "User" }, // Buyer field referencing the User model
});

// Create or retrieve the Transaction model based on the schema
const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);

// Export the Transaction model
export default Transaction;
