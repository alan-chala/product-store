import Product from "../models/product.model.js";

export const fetchProducts = async () => {
  return await Product.find({});
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

export const updateProduct = async (id, newProductInformation) => {

  const updatedProduct = await Product.findByIdAndUpdate(id, newProductInformation, { returnDocument: 'after' })

  if (!updatedProduct) {
    const error = new Error("Product not found!")
    error.statusCode = 400;
    throw error;
  }

}

export const deleteProduct = async (id) => {
  
  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) {
    const error = new Error("Product not found!")
    error.statusCode = 400;
    throw error;
  }

}