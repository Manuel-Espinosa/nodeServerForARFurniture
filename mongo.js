import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://manuelespinosa:jbQYNwRbVsIcl3VZ@furniturebd.jqi3d.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const createProduct = async (req, res, next) => {
  const newProduct = {
    sku: req.body.sku,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    modelPath: req.body.modelPath,
    maker: req.body.maker,
  };
  try{
      await client.connect();
      const db = client.db('furnituredb');
      const result = await db.collection('products').insertOne(newProduct);
    }catch(error){
      return res.json({messege: 'failed!'})
  };
  client.close();
  res.json(newProduct);
};


const getProducts = async (res, req, next) => {};

export { createProduct, getProducts };
