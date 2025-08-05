import bcrypt from "bcrypt"
import { adminModel } from "../db.js";
const JWT_ADMIN_PASSWORD = "dfnhsdjks" 
import jwt from "jsonwebtoken"

export const Signup = async (req, res) => {
     const { email, password, lastName, firstName } = req.body; // do ZOD validation

     // TO do: Password Hashed

     const saltRounds = 10;
     const salt = await bcrypt.genSalt(saltRounds);
     const hashedPassword = await bcrypt.hash(password, salt);

     try {
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
}
export const Signin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email:email,
    password:password,
  });

  // ideally password should be hashed, and hence you can't compare the user provided passsword and the database password
  if (admin) {
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

  //Do cookie login instead of token based in future
}
export const createCourse = async (req, res) => {
    
}
export const updateCourse = async (req, res) => {
    
}
export const courseBulk = async (req, res) => {
    
}

