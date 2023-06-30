import mongoose, { Schema, model } from "mongoose";

export interface Iitem extends mongoose.Document {
  name: string;
  price: number;
  quantity: number;
}

const ItemSchema: Schema<Iitem> = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  quantity: {
    type: Number,
  },
},{
    timestamps: true,
});

const ItemModel = model<Iitem>("supermarketModel", ItemSchema);

export default ItemModel;
