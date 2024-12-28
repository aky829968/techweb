import jwt from "jsonwebtoken";
const authAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(404)
        .json({ message: "Token not found", success: false });
    }
    const admin = jwt.verify(token, process.env.SECRET_KEY);
    if (!admin) {
      return res.status(404).json({ message: "Token not ", success: false });
    }
    req.id = admin.adminId;
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message, success: false });
  }
};

export default authAdmin;
