import { courseModel, purchaseModel } from "../db.js";

export const courseRoutes =async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

//should check that the user actually paid the price
    await purchaseModel.create({
        userId,
        courseId
    })

    
    res.json({
        message: "You have successfuly bought a course"
    });
};


export const coursePreview =async (req, res) => {
    const courses = await courseModel.find({})

    res.json({
        courses
    })
}
