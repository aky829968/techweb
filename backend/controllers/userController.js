import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../middleware/syncMail.js";
import sendMailToPass from "../middleware/forgotPass.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All feilds are required", success: false });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already registered with thi email",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = {
      name,
      email,
      password: hashPassword,
    };
    var otp = Math.floor(Math.random() * 1000000);
    const token = await jwt.sign({ user, otp }, process.env.SECRET_KEY, {
      expiresIn: "5m",
    });
    await sendMail(email, otp);
    return res.status(200).json({ message: "otp send successfully", token });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "Some error occured",
      success: false,
    });
  }
};

export const otpVerify = async (req, res) => {
  const { otp } = req.body;
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(200)
        .json({ message: "Invalid user token", success: false });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res
        .status(200)
        .json({ message: "Invalid user not", success: false });
    }
    if (decode.otp !== otp) {
      return res.status(200).json({ message: "Invalid user", success: false });
    }
    await userModel.create({
      name: decode.user.name,
      email: decode.user.email,
      password: decode.user.password,
    });
    return res
      .status(200)
      .json({ message: "USer registered successfuly", success: true });
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
    const existingUser = await userModel.findOne({ email });
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
      { userId: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
    return res
      .status(200)
      .json({ message: "Welcome Back", success: true, token });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "Some error occured",
      success: false,
    });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    var Passotp = Math.floor(Math.random() * 1000000);
    const token = await jwt.sign({ email, Passotp }, process.env.SECRET_KEY, {
      expiresIn: "5m",
    });
    await sendMailToPass(email, Passotp);

    return res
      .status(200)
      .json({ message: "Otp send successfully", success: true, token });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "Some error occured",
      success: false,
    });
  }
};

export const verifyPassword = async (req, res) => {
  try {
    const { Passotp } = req.body;
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(200)
        .json({ message: "Invalid user token", success: false });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res
        .status(200)
        .json({ message: "Invalid user not", success: false });
    }
    if (decode.Passotp !== Passotp) {
      return res.status(200).json({ message: "Invalid user", success: false });
    }
    return res.status(200).json({ message: "Otp verified", success: true });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "Some error occured",
      success: false,
    });
  }
};

export const newpassword = async (req, res) => {
  const { password } = req.body;
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(200)
        .json({ message: "Invalid user token", success: false });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res
        .status(200)
        .json({ message: "Invalid user not", success: false });
    }
    const user = await userModel.findOne({ email: decode.email });
    if (!user) {
      return res
        .status(200)
        .json({ message: "Invalid user token", success: false });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword;
    await user.save();
    return res.json({
      message: "Password updated successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "Some error occured",
      success: false,
    });
  }
};
