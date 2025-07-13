import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import cloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import dotenv from "dotenv";

dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 4000;

connectDB();

// middlewares
app.use(express.json()); // parse body JSON
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log("Server started om PORT: " + port);
});

console.log("🕒 Server Time:", new Date().toISOString());
