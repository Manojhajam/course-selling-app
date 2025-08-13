 import express, { Router } from "express";
import { coursePreview, courseRoutes } from "../controllers/courseControllers.js";
import userMiddleware from "../middleware/user.js";

const courseRouter = express.Router();


//you would expect the user to pay money
courseRouter.route("/purchase").post(userMiddleware ,courseRoutes);
courseRouter.route("/preview").get(coursePreview)

// courseRouter.get('/preview',async (req, res) => {
//     res.json({
//         message: "Preview course"
//     })
// })

export default courseRouter