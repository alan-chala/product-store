import express from "express";
import * as ProductController from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/api/products", ProductController.fetchProducts);
router.post("/api/products", ProductController.createProduct);
router.put("/api/products/:id", ProductController.updateProduct);
router.delete("/api/products/:id", ProductController.deleteProduct);

export default router;
