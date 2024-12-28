import express from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  getCourseById,
} from "../controllers/courseController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router.post("/create-course", authAdmin, createCourse);
router.get("/getallcourse", getAllCourse);
router.get("/get-course/:id", authAdmin, getCourseById);
router.delete("/delete-course/:id", authAdmin, deleteCourse);

export default router;
