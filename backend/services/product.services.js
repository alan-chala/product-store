import Product from "../models/product.model.js";

export const fetchProducts = async () => {
  return await Product.find({})
}

export const createProduct = async (productData) => {
  const { name, price, imageUrl } = productData;
  if (!name || !price || !imageUrl) {
    const error = new Error("Missing required fields: name, price, and imageUrl are required.");
    error.statusCode = 400;
    throw error;
  }

  const newProduct = new Product({ name, price, imageUrl });
  return await newProduct.save();
}
