import { Router } from "express";
import { handleLogin, handleSignup, handleRefresh, handleLogout } from "../controllers/auth.controller.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.middleware.js";
import { verifyRefreshToken } from "../middlewares/verifyRefreshToken.middleware.js";

const router = Router();

router.route("/refresh").post(verifyAccessToken, verifyRefreshToken, handleRefresh)
router.route("/login").post(handleLogin)
router.route("/signup").post(handleSignup)
router.route("/logout").post(handleLogout)

export default router; 