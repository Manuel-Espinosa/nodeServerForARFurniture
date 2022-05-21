import express from "express";

const productRoutes = express.Router();

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Albany Sofa",
    price: 5631,
    description: "Comodo sofa",
    model: "ruta al modelo",
    maker: 1
  },
  {
    id: 2,
    name: "Another Sofa",
    price: 5631,
    description: "Comodo sofa",
    model: "ruta al modelo",
    maker: 1
  },
];

productRoutes.get("/:pid", (req, res, next) => {
  const productId = req.params.pid;
  const product = DUMMY_PRODUCTS.find((p) => {
    return p.id == productId;
  });
  if (!product) {
    return res.status(404).json({
      error: "Could not find a product for the provided id",
      suggestion: "Please check if the provided id is a valid id",
    });
  }
  res.json({ product });
});
productRoutes.get("/maker/:mid", (req, res, next) => {
  const makerId = req.params.mid;
  const product = DUMMY_PRODUCTS.filter((p) => {
    return p.maker == makerId;
  });
  res.json({ product });
});

export { productRoutes };
