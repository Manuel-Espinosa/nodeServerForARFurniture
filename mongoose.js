import { Product } from "./schemas/product.js";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://manuelespinosa:jbQYNwRbVsIcl3VZ@furniturebd.jqi3d.mongodb.net/furnituredb?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    sku: req.body.sku,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    modelPath: req.body.modelPath,
    maker: req.body.maker,
  });
  const result = await createdProduct.save();
  res.json(result);
};

const getProduct = async (req, res, next) => {
  const sku = req.params.sku;
  const products = await Product.find({ sku: sku }).exec();
  res.json(products);
};

export { createProduct, getProduct };
