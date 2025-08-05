import { userModel } from "../db.js";
import jwt from "jsonwebtoken";
const JWT_USER_PASSWORD = "aladld123";
import bcrypt from "bcrypt";

export const Signup = async (req, res) => {
  const { email, password, lastName, firstName } = req.body; // do ZOD validation

  // TO do: Password Hashed

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await userModel.create({
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
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email:email,
    password:password,
  });

  // ideally password should be hashed, and hence you can't compare the user provided passsword and the database password
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
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
};

export const Purchase = (req, res) => {
  res.json({
    message: "Purchase endpoint",
  });
};
