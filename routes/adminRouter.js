import { Router } from "express";
import express from 'express'
const adminRouter = express.Router()
import {Signin, Signup, createCourse, updateCourse, courseBulk} from "../controllers/adminControllers.js"
import adminMiddleware from "../middleware/admin.js";

adminRouter.route("/signup").post(Signup)
adminRouter.route("/signin").post(Signin)
adminRouter.route("/course")
  .post(adminMiddleware, createCourse)
  .put(updateCourse)
  .get(courseBulk)


export default adminRouter;