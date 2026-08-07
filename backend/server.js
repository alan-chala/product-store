import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDb from "./config/db.js"
import productRoutes from "./routes/product.routes.js";

dotenv.config()

let PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(productRoutes);

async function startServer() {
  await connectDb()
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
}

startServer()
