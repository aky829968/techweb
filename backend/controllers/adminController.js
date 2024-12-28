import { adminModel } from "../models/adminModel.js";
import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All feilds are required", success: false });
    }
    const existingUser = await adminModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already registered with thi email",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const admin = await adminModel.create({
      name,
      email,
      password: hashPassword,
    });
    return res
      .status(200)
      .json({ message: "Account created successfully", success: true });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "Some error occured",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All feilds are required", success: false });
    }
    const existingUser = await adminModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "User is not registered with thi email",
        success: false,
      });
    }
    const isMatched = await bcrypt.compare(password, existingUser.password);
    if (!isMatched) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }
    const token = await jwt.sign(
      { adminId: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({ message: "Welcome Back", success: true, user: existingUser });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "Some error occured",
      success: false,
    });
  }
};
export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", { expiresIn: 0 })
      .json({ message: "Logout successfully", success: true });
  } catch (error) {}
};


export const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find();
    return res
      .status(200)
      .json({ message: "User found successfully", users, success: true });
  } catch (error) {}
};
