import mongoose, { Document, Model, Schema } from "mongoose";

interface Facility {
  img: string;
  name: string;
}

export interface Hotel extends Document {
  name: string;
  description: string;
  banner: string;
  gallery: string[];
  price?: number;
  facilities: Facility[];
  location?: string;
}

const hotelSchema: Schema<Hotel> = new Schema<Hotel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String,
      required: true,
    },
    gallery: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
    },
    facilities: [
      {
        img: String,
        name: String,
      },
    ],
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const HotelModel: Model<Hotel> = mongoose.models.hotel || mongoose.model<Hotel>("hotel", hotelSchema);

export default HotelModel;
