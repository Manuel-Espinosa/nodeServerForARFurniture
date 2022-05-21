import express from "express";
import bodyParser from "body-parser";
import { productRoutes } from "./routes/products-routes.js";
import { makerRoutes } from "./routes/maker-routes.js";
import { createProduct, getProduct} from "./mongoose.js";
const PORT = 5000;
const app = express();

app.use(bodyParser.json());
//app.use('/api/products', productRoutes);
//app.use('/api/makers', makerRoutes);
app.post("/api/products", createProduct);
app.get("/api/products/:sku", getProduct);

app.listen(PORT, () => {
  console.log("Server Running on port " + PORT);
});
