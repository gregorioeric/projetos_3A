import express from "express";
import ProductsController from "../controllers/productsController.js";

const productRoute = express.Router();

productRoute.get("/", ProductsController.allProducts);
productRoute.get("/productById/:id", ProductsController.productById);
productRoute.post("/", ProductsController.createProduct);
productRoute.put("/:id", ProductsController.updateProduct);
productRoute.delete("/:id", ProductsController.deleteProduct);

export default productRoute;
