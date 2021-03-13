import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

// Router() expands on the routes modularly
const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

// put this last b/c it can match other paths up above
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    // await resolves the promise to real data
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
