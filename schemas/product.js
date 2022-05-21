import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true },
  name: { type: String, requiered: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  modelPath: { type: String, requiered: false },
  maker: { type: Number, requiered: true },
});

const Product = mongoose.model('Product', productSchema);

export {Product};