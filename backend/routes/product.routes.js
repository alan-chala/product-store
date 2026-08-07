import express from "express";
import * as ProductController from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/api/products", ProductController.fetchProducts);
router.post("/api/products", ProductController.createProduct);
router.put("/api/products/:id", (req, res) => {
  res.json({ error: false, message: "Product updated successfully!" });
});
router.delete("/api/products/:id", (req, res) => {
  res.json({ error: false, message: "Product deleted successfully!" });
});

export default router;
