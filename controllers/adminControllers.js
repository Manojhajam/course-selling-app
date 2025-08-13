import bcrypt from "bcrypt";
import { adminModel, courseModel } from "../db.js";
import { JWT_ADMIN_PASSWORD } from "../config.js";
import jwt from "jsonwebtoken";

export const Signup = async (req, res) => {
  // TO do: Password Hashed

  try {
    const { email, password, lastName, firstName } = req.body; // do ZOD validation

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    await adminModel.create({
      email: email,
      password: hashedPassword,
      lastName: lastName,
      firstName: firstName,
    });

    res.json({
      message: "Signup successed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
      email: email,
    });

    if (!admin) {
      return res.status(403).json({
        success: false,
        message: "Invalid Credentails",
      });
    }

    // Compare the entered password with hashed password in DB
    const hashedPassword = admin.password;
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          id: admin._id,
        },
        JWT_ADMIN_PASSWORD
      );

      res.json({
        token: token,
      });
    } else {
      res.status(403).json({
        message: "Incorrect credentials",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

  //Do cookie login instead of token based in future
};
export const createCourse = async (req, res) => {
  const adminId = req.userId;

  //Youtube video for creating a web3 saas in 6 hours (for imageUrl)
  const { title, description, imageUrl, price } = req.body;
  const course = await courseModel.create({
    tittle: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId,
  });
  res.json({
    message: "Course created",
    courseId: course._id,
  });
};
export const updateCourse = async (req, res) => {
  const adminId = req.userId;

  //Youtube video for creating a web3 saas in 6 hours (for imageUrl)
  const { title, description, imageUrl, price, courseId } = req.body;

  const course = await courseModel.findOneAndUpdate(
    {
      _id: courseId,
      creatorId: adminId, //course belogs to same admin
    },
    {
      new: true,
    },
    {
      tittle: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    }
  );
  res.json({
    message: "Course Updated",
    courseId: course._id,
  });
};
export const courseBulk = async (req, res) => {
  const adminId = req.userId;

  const courses = await courseModel.find({
    creatorId: adminId,
  });

  res.json({
    success: true,
    courses: courses,
  });
};
