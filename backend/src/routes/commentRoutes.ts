import { Router } from "express";
import * as commentController from "../controllers/commentController";
import { protect } from "../middleware/auth";

const router = Router();

// POST /api/comments/:productId - Add comment to product (protected)
router.post("/:productId", protect, commentController.createComment);

// DELETE /api/comments/:commentId - Delete comment (protected - owner only)
router.delete("/:commentId", protect, commentController.deleteComment);

export default router;
