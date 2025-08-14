import { courseModel, purchaseModel } from "../db.js";

export const purchaseCourse = async (req, res) => {
  try {
    const userId = req.userId;
    const { courseId } = req.body;

    // Check if course exists
    const course = await courseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    // Check if user already purchased this course
    const existingPurchase = await purchaseModel.findOne({
      userId,
      courseId,
    });

    if (existingPurchase) {
      return res.status(400).json({
        message: "You have already purchased this course",
      });
    }

    // Create purchase record
    await purchaseModel.create({
      userId,
      courseId,
    });


      
    res.json({
      message: "You have successfully bought the course",
      courseTitle: course,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error purchasing course",
      error: error.message,
    });
  }
};

export const coursePreview = async (req, res) => {
    try {
        
    const courses = await courseModel.find({});

    res.json({
      courses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching courses",
      error: error.message,
    });
  }
};
