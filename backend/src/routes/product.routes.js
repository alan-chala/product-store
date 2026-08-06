import express from "express";

const router = express.Router();

router.get("/api/products", (req, res) => {
  res.json({ error: false, message: "Hello from the products route!" });
});

router.post("/api/products", (req, res) => {
  res.json({ error: false, message: "Product created successfully!" });
});

router.put("/api/products/:id", (req, res) => {
  res.json({ error: false, message: "Product updated successfully!" });
});

router.delete("/api/products/:id", (req, res) => {
  res.json({ error: false, message: "Product deleted successfully!" });
});

export default router;
