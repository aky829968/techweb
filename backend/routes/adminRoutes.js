import express from "express";
import {
  getAllUser,
  login,
  logout,
  register,
} from "../controllers/adminController.js";
import authAdmin from "../middleware/authAdmin.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/getalluser", authAdmin, getAllUser);

export default router;
