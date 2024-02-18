import { Document, Schema, model, models } from "mongoose";

// Interface representing the structure of the Image document
export interface IImage extends Document {
  title: string; // Title of the image
  transformationType: string; // Type of transformation applied to the image
  publicId: string; // Public ID of the image
  secureUrl: string; // Secure URL of the image
  width?: number; // Width of the image
  height?: number; // Height of the image
  config?: object; // Configuration object for the image
  transformationUrl?: URL; // URL for the transformation applied to the image
  aspectRatio?: string; // Aspect ratio of the image
  color?: string; // Color information of the image
  prompt?: string; // Prompt associated with the image
  author?: { _id: string; firstName: string; lastName: string }; // Author of the image (assuming user's ObjectId and name)
  createdAt?: Date; // Date when the image was created
  updatedAt?: Date; // Date when the image was last updated
}

// Define the schema for the Image document
const ImageSchema = new Schema({
  title: { type: String, required: true }, // Title field, required
  transformationType: { type: String, required: true }, // Transformation type field, required
  publicId: { type: String, required: true }, // Public ID field, required
  secureUrl: { type: String, required: true }, // Secure URL field, required
  width: { type: Number }, // Width field
  height: { type: Number }, // Height field
  config: { type: Object }, // Configuration object field
  transformationUrl: { type: URL }, // Transformation URL field
  aspectRatio: { type: String }, // Aspect ratio field
  color: { type: String }, // Color field
  prompt: { type: String }, // Prompt field
  author: { type: Schema.Types.ObjectId, ref: "User" }, // Author field referencing the User model
  createdAt: { type: Date, default: Date.now }, // Created at field with default value of current date
  updatedAt: { type: Date, default: Date.now }, // Updated at field with default value of current date
});

// Create or retrieve the Image model based on the schema
const Image = models?.Image || model("Image", ImageSchema);

// Export the Image model
export default Image;
