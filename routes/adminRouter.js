import { Router } from "express";
import express from 'express'
const adminRouter = express.Router()
import {Signin, Signup, createCourse, updateCourse, courseBulk} from "../controllers/adminControllers.js"

adminRouter.route("/signup").post(Signup)
adminRouter.route("/signin").post(Signin)
adminRouter.route("/course")
  .post(createCourse)
  .put(updateCourse)
  .get(courseBulk)


export default adminRouter;