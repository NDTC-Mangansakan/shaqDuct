import { Router } from "express";
import * as productController from "../controllers/productController";
import { requireAuth } from "@clerk/express";
import { protect } from "../middleware/auth";

const router = Router();

// GET /api/products => Get all products (public)
router.get("/", productController.getAllProducts);

// GET /api/products/my - Get current user's products (protected)
router.get("/my", protect, productController.getMyProducts);

// GET /api/products/:id - Get single product by ID (public)
router.get("/:id", productController.getProductById);

// POST /api/products - Create new product (protected)
router.post("/", protect, productController.createProduct);

// PUT /api/products/:id - Update product (protected - owner only)
router.put("/:id", protect, productController.updateProduct);

// DELETE /api/products/:id - Delete product (protected - owner only)
router.delete("/:id", protect, productController.deleteProduct);

export default router;
