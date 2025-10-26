import express from "express";
import cors from "cors";
import 'dotenv/config'

const app = express();

app.use(express.json())
app.use(cors())

import useRouter from '../routes/useRouter.routes.js'

app.use("/api/v1/auth", useRouter)

export default app;