import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products/:id", (req, res) => {
  // console.log("request received for " + req.params.id);
  const product = data.products.find((x) => x._id === req.params.id);
  // console.log(product)
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
