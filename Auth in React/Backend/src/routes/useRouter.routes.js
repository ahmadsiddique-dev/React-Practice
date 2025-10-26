import { login, signup } from "../controller/auth.controller.js";
import { Router } from "express";

const useRouter = Router();

useRouter.route("/login").post(login)
useRouter.route("/signup").post(signup)

export default useRouter;