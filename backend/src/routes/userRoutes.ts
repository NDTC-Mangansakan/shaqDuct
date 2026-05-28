import { Router } from "express";
import { syncUser } from "../controllers/userController";
import { protect } from "../middleware/auth";

const router = Router();

//sync the the clerk user to neon db (protected)
router.post('/sync', protect ,syncUser)

export default router;
