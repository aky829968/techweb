import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import cors from "cors";
import cookieparser from "cookie-parser";
dotenv.config();
connectDb();
const app = express();
app.use(express.json());
app.use(cookieparser());
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: "https://frontend-9e7q.onrender.com/",
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/course", courseRoutes);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
