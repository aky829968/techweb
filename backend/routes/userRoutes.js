import express from "express";
import {
  forgotPassword,
  login,
  newpassword,
  otpVerify,
  register,
  verifyPassword,
} from "../controllers/userController.js";
import { sendQueryMail } from "../controllers/queryController.js";
const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", otpVerify);
router.post("/login", login);
router.post("/forgot", forgotPassword);
router.post("/verify-pass", verifyPassword);
router.post("/update-pass", newpassword);
router.post("/query", sendQueryMail);

export default router;
