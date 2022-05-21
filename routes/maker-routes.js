import express from "express";

const makerRoutes = express.Router();

const DUMMY_MAKERS = [
  {
    id: 1,
    name: "SofaMex",
    address: "Address",
    location: {
        latidude: 1,
        longitude: 1
    },
    phone: 15545115
  },
];

makerRoutes.get("/:mid", (req, res, next) => {
  console.log("Lista de productos");
  const makerId = req.params.mid;
  const maker = DUMMY_MAKERS.find(m => {
    return m.id == makerId;
  });
  res.json({ maker });
});


export { makerRoutes };
