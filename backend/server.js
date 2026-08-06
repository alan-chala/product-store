import express from "express";
import cors from "cors";

import productRoutes from "./src/routes/product.routes.js";

let PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

