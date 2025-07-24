import express, { Router } from "express";
import { courseRoutes } from "../controllers/courseControllers.js";

const courseRouter = express.Router();

courseRouter.route("/purchase").post(courseRoutes);

courseRouter.get('/preview', () => {
    resizeBy.json({
        message: "Preview course"
    })
})

export default courseRouter