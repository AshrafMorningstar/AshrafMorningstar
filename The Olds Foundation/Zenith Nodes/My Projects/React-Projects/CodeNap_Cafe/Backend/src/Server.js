import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formRoutes from "./Routes/formRoutes.js";

// ✅ Load environment variables as early as possible
dotenv.config();

// ✅ Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Log each request (Optional for debugging in production)
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
  });
}

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running fine ✅",
  });
});

// ✅ Routes
app.use("/api", formRoutes);

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Internal Server Error:", err.message || err);
  res.status(500).json({
    error: true,
    message: "Something went wrong on the server. Please try again later.",
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar