import cookieParser from "cookie-parser";
import express from "express";
import 'dotenv/config'
import cors from "cors"
import router from "./src/routes/auth.routes.js";

// App
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json())
app.use(cors());
app.use(cookieParser())

// Goto Routers
app.use("/api/v1/auth", router)

export default app;
