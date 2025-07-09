import express from "express";
import { verifyToken } from "../middleware/authMiddleware";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import emailTemplateRoutes from "./emailTemplateRoutes";
import itemOneRoutes from "./itemOneRoutes";
import rolesRoutes from "./rolesRoutes";
import systemPrefRoutes from "./systemPrefRoutes";
import notificationRoutes from "./notificationRoutes";

const router = express.Router();

router.use(authRoutes);
router.use(verifyToken);
router.use(systemPrefRoutes);
router.use(userRoutes);
router.use(emailTemplateRoutes);
router.use(itemOneRoutes);
router.use(rolesRoutes);
router.use(notificationRoutes);

export default router;