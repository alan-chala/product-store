import * as productService from "../services/product.services.js";

export const fetchProducts = async (req, res) => {
  try {
    const products = await productService.fetchProducts();
    return res
      .status(200)
      .json({
        error: false,
        message: "Products fetched successfully!",
        data: products,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Error fetching data!" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    return res
      .status(201)
      .json({
        error: false,
        message: "Product created successfully!",
        data: newProduct,
      });
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json({ error: true, message: error.message });
  }
};
