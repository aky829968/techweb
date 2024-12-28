import { courseModel } from "../models/courseModel.js";

export const createCourse = async (req, res) => {
  try {
    const { title, duration, description, price } = req.body;
    if (!title || !description || !price) {
      return res
        .status(400)
        .json({ message: "All feilds are required", success: false });
    }
    const course = await courseModel.create({
      title,
      duration,
      description,
      price,
    });
    return res
      .status(200)
      .json({ message: "course created successfully", success: true });
  } catch (error) {
    return res.status(400).json({ message: error.message, success: false });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "No course found", success: false });
    }
    const course = await courseModel.findById(id);
    if (!course) {
      return res
        .status(400)
        .json({ message: "No course found", success: false });
    }
    return res
      .status(200)
      .json({ message: "course found", success: true, course });
  } catch (error) {
    return res.status(400).json({ message: error.message, success: false });
  }
};

export const getAllCourse = async (req, res) => {
  try {
    const courses = await courseModel.find();
    return res
      .status(200)
      .json({ message: "Courses found successfully", courses, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await courseModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "course deleted successfully", success: true });
  } catch (error) {}
};
